// Web App Marketplace
// Copyright 2014-2016 Josh Abbott

var delaymilli = 1000;

// Reset Object Function
function update_reset_object(appobject) {
	appobject.dlxmlhttp = false;
	appobject.dlattemptcount = 0;
	appobject.dlinprogress = 0;
	appobject.stxmlhttp = false;
	appobject.exxmlhttp = false;
	appobject.insxmlhttp = false;
	appobject.oldcount = 0;
	appobject.countdiff = 0;
}

// Download Function
function update_start_download(appobject) {

	appobject.dlxmlhttp = start_xml_http();

	if(!appobject.dlxmlhttp) {
		update_set_status(appobject, 'Your browser is blocking or does not support Ajax');
		return false;
	}

	appobject.dlxmlhttp.onreadystatechange = function() {
	if (appobject.dlxmlhttp.readyState == 4) {
		
		appobject.dlinprogress = 0;
		
		dlresponse = appobject.dlxmlhttp.responseText;
		
		// Process The Result
		var startdlresult = dlresponse.indexOf('RESULT:') + 7;
		if (dlresponse.indexOf('RESULT:') > -1) {
			var enddlresult = dlresponse.indexOf(':ENDRESULT');
			dlresponse = dlresponse.substring(startdlresult, enddlresult);
			if (dlresponse == 'SUCCESS' || dlresponse == 'File Already Downloaded') {
				// File Downloaded Successfully
				update_set_counter(appobject, 100);
				update_set_status(appobject, 'Download Successful');
				update_start_extract(appobject);
			} else if (dlresponse == 'Saved File Was Corrupt') {
				// Download Failed - Try Again
				update_set_status(appobject, 'File was corrupt.  Trying again.');
				appobject.dlattemptcount = appobject.dlattemptcount+1;
				if (appobject.dlattemptcount < 2) {
					setTimeout("retry_download(" + appobject.objectname + ")", 2100);
				} else {
					// Number Of Attempts Exceeded - Give Up
					update_set_status(appobject, 'Download failed.  File is corrupt.');
					update_error(appobject);
				}
			} else {
				// Another Error Was Reported
				update_set_status(appobject, 'Download Error: ' + dlresponse);
				update_error(appobject);
			}
		} else {
			// Unknown Error
			update_set_status(appobject, 'Invalid download response.  Trying again.');
			appobject.dlattemptcount = appobject.dlattemptcount+1;
			if (appobject.dlattemptcount < 2) {
				setTimeout("retry_download(" + appobject.objectname + ")", 2100);
			} else {
				update_set_status(appobject, 'Invalid download response: ' + dlresponse);
				update_error(appobject);
			}
		}
	}
	}
	
	newDate = new Date();
	milliCount = newDate.getTime();
	var dlurl = 'downloader.php?sourcedomain=' + appobject.sourcedomain + '&sourcefile=' + appobject.updatefile + "&m=" + milliCount;
	
	appobject.dlxmlhttp.open('GET',dlurl,true);
	appobject.dlxmlhttp.send(null);
	
	appobject.dlinprogress = 1;
	setTimeout("update_start_dl_status(" + appobject.objectname + ")", 1000);
	
	update_set_status(appobject, 'Downloading...');
}

function update_retry_download(appobject) {
	newDate = new Date();
	milliCount = newDate.getTime();
	var dlurl = 'downloader.php?sourcedomain=' + appobject.sourcedomain + '&sourcefile=' + appobject.updatefile + '&attemptnum=' + appobject.dlattemptcount + "&m=" + milliCount;
	appobject.dlxmlhttp.open('GET',dlurl,true);
	appobject.dlxmlhttp.send(null);
	appobject.dlinprogress = 1;
	update_start_dl_status(appobject);
}

// Download Status Function
function update_start_dl_status(appobject) {

	appobject.stxmlhttp = start_xml_http();

	if(!appobject.stxmlhttp) {
		alert('Your browser is blocking or does not support Ajax');
		return false;
	}

	appobject.stxmlhttp.onreadystatechange = function() {
	if (appobject.stxmlhttp.readyState == 4) {
		stresponse = appobject.stxmlhttp.responseText;
		if (stresponse == 0) {
			// Download hasn't started yet
			update_set_counter(appobject, 0);
		} else if (stresponse == 1) {
			// Download is finished
			update_set_counter(appobject, 100);
		} else if (stresponse.indexOf('/') > -1) {
			// Update counter
			var starray = stresponse.split("/");
			var stpercent = starray[0]/starray[1];
			stpercent = Math.ceil(stpercent*100);
			update_live_counter(appobject, stpercent);
		} else {
			// Invalid status
			update_set_counter(appobject, 0);
		}
	}
	}
	
	newDate = new Date();
	milliCount = newDate.getTime();
	sturl = 'download_status.php?filename=' + appobject.updatefile + "&m=" + milliCount;
	
	appobject.stxmlhttp.open('GET',sturl,true);
	appobject.stxmlhttp.send(null);
}

// Live Counter Function
function update_live_counter(appobject, countval) {

	countdiff = countval-appobject.oldcount;

	if (appobject.oldcount > 0 && countdiff > 0) {
		
		speedval = delaymilli/countdiff;
		update_increase_counter(appobject, appobject.oldcount, countval, speedval);
		
	} else {
		update_set_counter(appobject, countval);
	}
	
	appobject.oldcount = countval;
	
	if (appobject.dlinprogress == 1) {
		newDate = new Date();
		milliCount = newDate.getTime();
		setTimeout("update_start_dl_status(" + appobject.objectname + ")", delaymilli);
	}
}

// Increase Counter Function
function update_increase_counter(appobject, currentval, endval, speedval) {
	if (currentval < endval && appobject.dlinprogress == 1) {
		currentval = currentval+1;
		update_set_counter(appobject, currentval);
		setTimeout("update_increase_counter(" + appobject.objectname + ", " + currentval + ", " + endval + ", " + speedval + ")", speedval);
	}
}

// Status Output Function
function update_set_counter(appobject, counternum) {
	document.getElementById(appobject.objectname + "_update_dlpercent").innerHTML = counternum.toString() + "%";
	$("div." + appobject.objectname + "_update_pie1").text(counternum.toString() + "/100").change();
}

// Extract Function
function update_start_extract(appobject) {
	
	appobject.exxmlhttp = start_xml_http();

	if(!appobject.exxmlhttp) {
		update_set_status(appobject, 'Your browser is blocking or does not support Ajax');
		update_error(appobject);
		return false;
	}

	appobject.exxmlhttp.onreadystatechange = function() {
	if (appobject.exxmlhttp.readyState == 4) {
		
		exresponse = appobject.exxmlhttp.responseText;
		
		// Process The Result
		var startexresult = exresponse.indexOf('RESULT:') + 7;
		if (exresponse.indexOf('RESULT:') > -1) {
			var endexresult = exresponse.indexOf(':ENDRESULT');
			exresponse = exresponse.substring(startexresult, endexresult);
			if (exresponse == 'SUCCESS') {
				// File Extracted Successfully
				update_set_status(appobject, 'Content Updated Successfully');
				update_start_install(appobject)
			} else {
				// An Error Was Reported
				update_set_status(appobject, 'Extract Error: ' + exresponse);
				update_error(appobject);
			}
		} else {
			// Unknown Error
			update_set_status(appobject, 'Invalid extract response: ' + exresponse);
			update_error(appobject);
		}
	}
	}
	
	newDate = new Date();
	milliCount = newDate.getTime();
	var exurl = 'downloader_unzip.php?sourcefile=' + appobject.updatefile + "&m=" + milliCount;
	
	appobject.exxmlhttp.open('GET',exurl,true);
	appobject.exxmlhttp.send(null);
	
	update_set_status(appobject, 'Extracting...');
}

// Install Function
function update_start_install(appobject) {
	
	appobject.insxmlhttp = start_xml_http();

	if(!appobject.insxmlhttp) {
		update_set_status(appobject, 'Your browser is blocking or does not support Ajax');
		update_error(appobject);
		return false;
	}

	appobject.insxmlhttp.onreadystatechange = function() {
	if (appobject.insxmlhttp.readyState == 4) {
		
		insresponse = appobject.insxmlhttp.responseText;
		
		// Process The Result
		var startinsresult = insresponse.indexOf('RESULT:') + 7;
		if (insresponse.indexOf('RESULT:') > -1) {
			var endinsresult = insresponse.indexOf(':ENDRESULT');
			insresponse = insresponse.substring(startinsresult, endinsresult);
			if (insresponse == 'SUCCESS') {
				// File Installed Successfully
				update_set_status(appobject, 'Content Updated Successfully');
				update_success(appobject);
				remove_update(appobject);
			} else {
				// An Error Was Reported
				update_set_status(appobject, 'Install Error: ' + insresponse);
				update_error(appobject);
			}
		} else {
			// Unknown Error
			update_set_status(appobject, 'Invalid install response: ' + insresponse);
			update_error(appobject);
		}
	}
	}
	
	newDate = new Date();
	milliCount = newDate.getTime();
	var insurl = 'installers/' + appobject.updatefile + ".php?m=" + milliCount;
	
	appobject.insxmlhttp.open('GET',insurl,true);
	appobject.insxmlhttp.send(null);
	
	update_set_status(appobject, 'Installing...');
}

// Update Status Message Set Function
function update_set_status(appobject, statusmessage) {
	document.getElementById(appobject.objectname + "update_statusmessage").innerHTML = statusmessage;
}

// Update Failed Function
function update_error(appobject) {
	document.getElementById(appobject.objectname + "update_statusmessage").style.visibility = "visible";
}

// Update Success Function
function update_success(appobject) {
	document.getElementById(appobject.objectname + "update_statusmessage").style.visibility = "visible";
}
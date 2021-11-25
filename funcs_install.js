// Web App Marketplace
// Copyright 2014-2016 Josh Abbott

var delaymilli = 1000;

// Reset Object Function
function reset_object(appobject) {
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
function start_download(appobject) {

	appobject.dlxmlhttp = start_xml_http();

	if(!appobject.dlxmlhttp) {
		set_installstatus(appobject, 'Your browser is blocking or does not support Ajax');
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
				set_counter(appobject, 100);
				set_installstatus(appobject, 'Download Successful');
				start_extract(appobject);
			} else if (dlresponse == 'Saved File Was Corrupt') {
				// Download Failed - Try Again
				set_installstatus(appobject, 'File was corrupt.  Trying again.');
				appobject.dlattemptcount = appobject.dlattemptcount+1;
				if (appobject.dlattemptcount < 2) {
					setTimeout("retry_download(" + appobject.objectname + ")", 2100);
				} else {
					// Number Of Attempts Exceeded - Give Up
					set_installstatus(appobject, 'Download failed.  File is corrupt.');
					install_error(appobject);
				}
			} else {
				// Another Error Was Reported
				set_installstatus(appobject, 'Download Error: ' + dlresponse);
				install_error(appobject);
			}
		} else {
			// Unknown Error
			set_installstatus(appobject, 'Invalid download response.  Trying again.');
			appobject.dlattemptcount = appobject.dlattemptcount+1;
			if (appobject.dlattemptcount < 2) {
				setTimeout("retry_download(" + appobject.objectname + ")", 2100);
			} else {
				set_installstatus(appobject, 'Invalid download response: ' + dlresponse);
				install_error(appobject);
			}
		}
	}
	}
	
	newDate = new Date();
	milliCount = newDate.getTime();
	var dlurl = 'downloader.php?sourcedomain=' + appobject.sourcedomain + '&sourcefile=' + appobject.sourcefile + "&m=" + milliCount;
	
	appobject.dlxmlhttp.open('GET',dlurl,true);
	appobject.dlxmlhttp.send(null);
	
	appobject.dlinprogress = 1;
	setTimeout("start_dl_status(" + appobject.objectname + ")", 1000);
	
	set_installstatus(appobject, 'Downloading...');
}

function retry_download(appobject) {
	newDate = new Date();
	milliCount = newDate.getTime();
	var dlurl = 'downloader.php?sourcedomain=' + appobject.sourcedomain + '&sourcefile=' + appobject.sourcefile + '&attemptnum=' + appobject.dlattemptcount + "&m=" + milliCount;
	appobject.dlxmlhttp.open('GET',dlurl,true);
	appobject.dlxmlhttp.send(null);
	appobject.dlinprogress = 1;
	start_dl_status(appobject);
}

// Download Status Function
function start_dl_status(appobject) {

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
			set_counter(appobject, 0);
		} else if (stresponse == 1) {
			// Download is finished
			set_counter(appobject, 100);
		} else if (stresponse.indexOf('/') > -1) {
			// Update counter
			var starray = stresponse.split("/");
			var stpercent = starray[0]/starray[1];
			stpercent = Math.ceil(stpercent*100);
			live_counter(appobject, stpercent);
		} else {
			// Invalid status
			set_counter(appobject, 0);
		}
	}
	}
	
	newDate = new Date();
	milliCount = newDate.getTime();
	sturl = 'download_status.php?filename=' + appobject.sourcefile + "&m=" + milliCount;
	
	appobject.stxmlhttp.open('GET',sturl,true);
	appobject.stxmlhttp.send(null);
}

// Live Counter Function
function live_counter(appobject, countval) {

	countdiff = countval-appobject.oldcount;

	if (appobject.oldcount > 0 && countdiff > 0) {
		
		speedval = delaymilli/countdiff;
		increase_counter(appobject, appobject.oldcount, countval, speedval);
		
	} else {
		set_counter(appobject, countval);
	}
	
	appobject.oldcount = countval;
	
	if (appobject.dlinprogress == 1) {
		newDate = new Date();
		milliCount = newDate.getTime();
		setTimeout("start_dl_status(" + appobject.objectname + ")", delaymilli);
	}
}

// Increase Counter Function
function increase_counter(appobject, currentval, endval, speedval) {
	if (currentval < endval && appobject.dlinprogress == 1) {
		currentval = currentval+1;
		set_counter(appobject, currentval);
		setTimeout("increase_counter(" + appobject.objectname + ", " + currentval + ", " + endval + ", " + speedval + ")", speedval);
	}
}

// Status Output Function
function set_counter(appobject, counternum) {
	document.getElementById(appobject.objectname + "_dlpercent").innerHTML = counternum.toString() + "%";
	$("div." + appobject.objectname + "_pie1").text(counternum.toString() + "/100").change();
}

// Extract Function
function start_extract(appobject) {
	
	appobject.exxmlhttp = start_xml_http();

	if(!appobject.exxmlhttp) {
		set_installstatus(appobject, 'Your browser is blocking or does not support Ajax');
		install_error(appobject);
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
				set_installstatus(appobject, 'Content Installed Successfully');
				start_install(appobject)
			} else {
				// An Error Was Reported
				set_installstatus(appobject, 'Extract Error: ' + exresponse);
				install_error(appobject);
			}
		} else {
			// Unknown Error
			set_installstatus(appobject, 'Invalid extract response: ' + exresponse);
			install_error(appobject);
		}
	}
	}
	
	newDate = new Date();
	milliCount = newDate.getTime();
	var exurl = 'downloader_unzip.php?sourcefile=' + appobject.sourcefile + "&m=" + milliCount;
	
	appobject.exxmlhttp.open('GET',exurl,true);
	appobject.exxmlhttp.send(null);
	
	set_installstatus(appobject, 'Extracting...');
}

// Install Function
function start_install(appobject) {
	
	appobject.insxmlhttp = start_xml_http();

	if(!appobject.insxmlhttp) {
		set_installstatus(appobject, 'Your browser is blocking or does not support Ajax');
		install_error(appobject);
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
				set_installstatus(appobject, 'Content Installed Successfully');
				install_success(appobject);
				remove_listitem(appobject);
				add_uninstall(appobject);
			} else {
				// An Error Was Reported
				set_installstatus(appobject, 'Install Error: ' + insresponse);
				install_error(appobject);
			}
		} else {
			// Unknown Error
			set_installstatus(appobject, 'Invalid install response: ' + insresponse);
			install_error(appobject);
		}
	}
	}
	
	newDate = new Date();
	milliCount = newDate.getTime();
	var insurl = 'installers/' + appobject.sourcefile + ".php?m=" + milliCount;
	
	appobject.insxmlhttp.open('GET',insurl,true);
	appobject.insxmlhttp.send(null);
	
	set_installstatus(appobject, 'Installing...');
}

// Uninstall Function
function start_uninstall(appobject) {
	
	appobject.insxmlhttp = start_xml_http();

	if(!appobject.insxmlhttp) {
		set_installstatus(appobject, 'Your browser is blocking or does not support Ajax');
		install_error(appobject);
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
				set_installstatus(appobject, 'Content Uninstalled Successfully');
				install_success(appobject);
				remove_listitem(appobject);
				add_install(appobject);
			} else {
				// An Error Was Reported
				set_installstatus(appobject, 'Uninstall Error: ' + insresponse);
				install_error(appobject);
			}
		} else {
			// Unknown Error
			set_installstatus(appobject, 'Invalid uninstall response: ' + insresponse);
			install_error(appobject);
		}
	}
	}
	
	newDate = new Date();
	milliCount = newDate.getTime();
	var insurl = 'uninstallers/' + appobject.sourcefile + ".php?m=" + milliCount;
	
	appobject.insxmlhttp.open('GET',insurl,true);
	appobject.insxmlhttp.send(null);
	
	set_installstatus(appobject, 'Uninstalling...');
}

// Install/Uninstall Status Message Set Function
function set_installstatus(appobject, statusmessage) {
	document.getElementById(appobject.objectname + "_statusmessage").innerHTML = statusmessage;
}

// Install/Uninstall Failed Function
function install_error(appobject) {
	document.getElementById(appobject.objectname + "_statusmessage").style.visibility = "visible";
}

// Install/Uninstall Success Function
function install_success(appobject) {
	document.getElementById(appobject.objectname + "_statusmessage").style.visibility = "visible";
}
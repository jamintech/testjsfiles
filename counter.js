// Live Hit Counter
// ©2011-2021 Josh Abbott

// This Javascript/Ajax library pulls a number stat from a URL and increments it in real time

function livehitcounter_pull_count(countobj) {
	
	// Define essential variables to defaults
	if (typeof countobj.url === 'undefined') {
		alert('The Live Hit Counter URL must be defined.');
		return false;
	}
	if (typeof countobj.elementid === 'undefined') {
		alert('The Live Hit Counter target element must be defined.');
		return false;
	}
	if (typeof countobj.delaymilli === 'undefined') { countobj.delaymilli = 2000; }
	if (typeof countobj.oldcount === 'undefined') { countobj.oldcount = 0; }
	
	// Start the Ajax connection
	countobj.ajax_xmlhttp = new XMLHttpRequest();
	if(countobj.ajax_xmlhttp.overrideMimeType) {
		countobj.ajax_xmlhttp.overrideMimeType('text/xml');
	}
	
	if(!countobj.ajax_xmlhttp) {
		alert('Ajax Failed');
		return false;
	}
	
	countobj.ajax_xmlhttp.onreadystatechange = function() {
	if (countobj.ajax_xmlhttp.readyState == 4) {
		livehitcounter_live_counter(countobj, parseInt(countobj.ajax_xmlhttp.responseText));
	}
	}
	
	newDate = new Date();
	milliCount = newDate.getTime();
	
	if (countobj.url.includes('?')) {
		getURL = countobj.url + '&m=' + milliCount;
	} else {
		getURL = countobj.url + '?m=' + milliCount;
	}
	
	countobj.ajax_xmlhttp.open('GET', getURL, true);
	countobj.ajax_xmlhttp.send(null);
	
}

function livehitcounter_live_counter(countobj, countval) {
	
	countdiff = countval-countobj.oldcount;

	if (countobj.oldcount > 0 && countdiff > 0) {
		
		speedval = countobj.delaymilli/countdiff;
		livehitcounter_increase_counter(countobj, countobj.oldcount, countval, speedval);
		
	} else {
		livehitcounter_set_counter(countobj, countval);
	}
	
	countobj.oldcount = countval;

	setTimeout(livehitcounter_pull_count, countobj.delaymilli, countobj);

}

function livehitcounter_increase_counter(countobj, currentval, endval, speedval) {
	if (currentval < endval) {
		currentval = currentval+1;
		livehitcounter_set_counter(countobj, currentval);
		setTimeout(livehitcounter_increase_counter, speedval, countobj, currentval, endval, speedval);
	}
}

function livehitcounter_set_counter(countobj, counternum) {
	document.getElementById(countobj.elementid).innerHTML = counternum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
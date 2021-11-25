var newxmlhttp = false;

function start_xml_http() {

	if(window.XMLHttpRequest) {
		newxmlhttp=new XMLHttpRequest();
		if(newxmlhttp.overrideMimeType) {
			newxmlhttp.overrideMimeType('text/xml');
		}
	} else if(window.ActiveXObject) {
		try {
			newxmlhttp=new ActiveXObject("Msxml2.XMLHTTP");
		} catch(e) {
			try {
				newxmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
			} catch(e) {
			}
		}
	}

	if(!newxmlhttp) {
		alert('Your browser is blocking Ajax');
		return false;
	}

	return newxmlhttp;

}
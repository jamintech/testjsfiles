// VisuGraph JS
// ©2012-2020 Josh Abbott

// This Javascript/Ajax library pulls stats from a database, and draws an interactive graph using Flot

function visugraph_ajax_connect(visuobj, url) {
	
	visuobj.graph_xmlhttp = new XMLHttpRequest();
	if(visuobj.graph_xmlhttp.overrideMimeType) {
		visuobj.graph_xmlhttp.overrideMimeType('text/xml');
	}
	
	if(!visuobj.graph_xmlhttp) {
		alert('Ajax Failed');
		return false;
	}

	visuobj.graph_xmlhttp.onreadystatechange = function() {
	if (visuobj.graph_xmlhttp.readyState == 4) {
	
		graphresponse = visuobj.graph_xmlhttp.responseText;
		
		// Pull The Start Date
		var startsdate = graphresponse.indexOf('#STARTSTARTDATE#') + 16;
		if (graphresponse.indexOf('#STARTSTARTDATE#') > -1) {
			var endsdate = graphresponse.indexOf('#ENDSTARTDATE#');
			var graphsdate = graphresponse.substring(startsdate, endsdate);	
			document.getElementById(visuobj.startdate_id).value = graphsdate;
			tempdateobj = new Date(graphsdate);
			visuobj.stimestamp = (tempdateobj.getTime()) / 1000;
		}
		
		// Pull The End Date
		var startedate = graphresponse.indexOf('#STARTENDDATE#') + 14;
		if (graphresponse.indexOf('#STARTENDDATE#') > -1) {
			var endedate = graphresponse.indexOf('#ENDENDDATE#');
			var graphedate = graphresponse.substring(startedate, endedate);	
			document.getElementById(visuobj.enddate_id).value = graphedate;
			tempdateobj = new Date(graphedate);
			visuobj.etimestamp = (tempdateobj.getTime()) / 1000;	
		}
		
		// Pull The Graph Type
		var startgraphtype = graphresponse.indexOf('#STARTGRAPHTYPE#') + 16;
		if (graphresponse.indexOf('#STARTGRAPHTYPE#') > -1) {
			var endgraphtype = graphresponse.indexOf('#ENDGRAPHTYPE#');
			var graphgraphtype = graphresponse.substring(startgraphtype, endgraphtype);
			if (graphgraphtype == 'yearly' || graphgraphtype == 'monthly' || graphgraphtype == 'daily') {
				visuobj.graphtype = graphgraphtype;
			} else {
				visuobj.graphtype = 'minute';
			}
		}
		
		// Pull The Graph Data Label
		var startdatalabel = graphresponse.indexOf('#STARTDATALABEL#') + 16;
		if (graphresponse.indexOf('#STARTDATALABEL#') > -1) {
			var enddatalabel = graphresponse.indexOf('#ENDDATALABEL#');
			var graphdatalabel = graphresponse.substring(startdatalabel, enddatalabel);	
		}
		
		// Pull The Graph Data
		var startdata = graphresponse.indexOf('#STARTDATA#') + 11;
		if (graphresponse.indexOf('#STARTDATA#') > -1) {
			var enddata = graphresponse.indexOf('#ENDDATA#');
			var graphdata = graphresponse.substring(startdata, enddata);
			
			// Break up the results and put them back in usable arrays
			var arraygraphdata = graphdata.split('|');
			var arrlength = arraygraphdata.length;
			var temparray = [];
			for (var i = 0; i < arrlength; i++) {
				temparray = arraygraphdata[i].split(',');
				arraygraphdata[i] = [temparray[0], temparray[1]];
			}
		} else {
			var arraygraphdata = [];
		}
		
		// Pull The Ticks Data
		var startticks = graphresponse.indexOf('#STARTTICKS#') + 12;
		if (graphresponse.indexOf('#STARTTICKS#') > -1) {
			var endticks = graphresponse.indexOf('#ENDTICKS#');
			var graphticks = graphresponse.substring(startticks, endticks);
			
			// Break up the results and put them back in usable arrays
			var arraygraphticks = graphticks.split('|');
			var arrlength = arraygraphticks.length;
			var temparray = [];
			for (var i = 0; i < arrlength; i++) {
				temparray = arraygraphticks[i].split(',');
				arraygraphticks[i] = [temparray[0], temparray[1]];
			}
			
		} else {
			var arraygraphticks = [];
		}
		
		// Pull The Max Stat (For Top Y Axis)
		var startmax = graphresponse.indexOf('#STARTMAX#') + 10;
		if (graphresponse.indexOf('#STARTMAX#') > -1) {
			var endmax = graphresponse.indexOf('#ENDMAX#');
			var graphmax = graphresponse.substring(startmax, endmax);		
		}
		
		// Pull The Zoom In Data
		var startzoomin = graphresponse.indexOf('#STARTZOOMIN#') + 13;
		if (graphresponse.indexOf('#STARTZOOMIN#') > -1) {
			var endzoomin = graphresponse.indexOf('#ENDZOOMIN#');
			var canzoomin = graphresponse.substring(startzoomin, endzoomin);
			if (canzoomin == "yes") {
				document.getElementById(visuobj.zoomin_id).disabled = false;
			} else {
				document.getElementById(visuobj.zoomin_id).disabled = true;
			}
		} else {
			document.getElementById(visuobj.zoomin_id).disabled = true;
		}
		
		// Pull The Zoom Out Data
		var startzoomout = graphresponse.indexOf('#STARTZOOMOUT#') + 14;
		if (graphresponse.indexOf('#STARTZOOMOUT#') > -1) {
			var endzoomout = graphresponse.indexOf('#ENDZOOMOUT#');
			var canzoomout = graphresponse.substring(startzoomout, endzoomout);
			if (canzoomout == "yes") {
				document.getElementById(visuobj.zoomout_id).disabled = false;
			} else {
				document.getElementById(visuobj.zoomout_id).disabled = true;
			}	
		} else {
			document.getElementById(visuobj.zoomout_id).disabled = true;
		}
		
		// Pull The Pan Left Data
		var startpanleft = graphresponse.indexOf('#STARTPANLEFT#') + 14;
		if (graphresponse.indexOf('#STARTPANLEFT#') > -1) {
			var endpanleft = graphresponse.indexOf('#ENDPANLEFT#');
			var canpanleft = graphresponse.substring(startpanleft, endpanleft);
			if (canpanleft == "yes") {
				document.getElementById(visuobj.panleft_id).disabled = false;
			} else {
				document.getElementById(visuobj.panleft_id).disabled = true;
			}		
		} else {
			document.getElementById(visuobj.panleft_id).disabled = true;
		}
		
		// Pull The Pan Right Data
		var startpanright = graphresponse.indexOf('#STARTPANRIGHT#') + 15;
		if (graphresponse.indexOf('#STARTPANRIGHT#') > -1) {
			var endpanright = graphresponse.indexOf('#ENDPANRIGHT#');
			var canpanright = graphresponse.substring(startpanright, endpanright);
			if (canpanright == "yes") {
				document.getElementById(visuobj.panright_id).disabled = false;
			} else {
				document.getElementById(visuobj.panright_id).disabled = true;
			}	
		} else {
			document.getElementById(visuobj.panright_id).disabled = true;
		}
		
		document.getElementById(visuobj.spinnerdiv_id).style.visibility = "hidden";
		
		var maxy = Math.ceil(graphmax/10)*10;
		visugraph_drawgraph(visuobj, graphdatalabel, arraygraphdata, maxy, arraygraphticks);
	}
	}
	
	// Disable Buttons While The Graph Is Loading
	document.getElementById(visuobj.zoomin_id).disabled = true;
	document.getElementById(visuobj.zoomout_id).disabled = true;
	document.getElementById(visuobj.panleft_id).disabled = true;
	document.getElementById(visuobj.panright_id).disabled = true;
	
	document.getElementById(visuobj.spinnerdiv_id).style.visibility = "visible";

	visuobj.graph_xmlhttp.open('GET',url,true);
	visuobj.graph_xmlhttp.send(null);
	
}

function visugraph_makegraph(visuobj) {
	
	datatype = document.getElementById(visuobj.datatype_id).value;
	starttime = (new Date(document.getElementById(visuobj.startdate_id).value).getTime()/1000);
	endtime = (new Date(document.getElementById(visuobj.enddate_id).value).getTime()/1000);
	
	if (endtime <= starttime) {
		return 0;
	}
	
	// Connect To Graph
	graphurl = visuobj.ajax_url + "?starttime=" + starttime + "&endtime=" + endtime + "&datatype=" + datatype;
	visugraph_ajax_connect(visuobj, graphurl);

}

function visugraph_click_zoomin(visuobj, clickx) {
	
	datatype = document.getElementById(visuobj.datatype_id).value;
	starttime = (new Date(document.getElementById(visuobj.startdate_id).value).getTime()/1000);
	endtime = (new Date(document.getElementById(visuobj.enddate_id).value).getTime()/1000);
	
	timedistance = endtime - starttime;
	
	if (timedistance > 345600 || timedistance < 86400) {
		distancezoom = Math.round(timedistance/4);
	} else {
		distancezoom = Math.round(timedistance/6);
	}
	
	// Last Center Time
	centertime = (starttime+endtime)/2;
	
	// Unix Timestamp Of Clicked Date
	clickx = clickx/1000;
	
	// Number Of Seconds From The Center Date
	clickx = Math.round(clickx - centertime);
	
	// Center To The Clicked Point
	starttime = starttime + clickx;
	endtime = starttime + timedistance;
	
	// Zoom Into Clicked Point
	if (document.getElementById(visuobj.zoomin_id).disabled == false) {
		starttime = starttime + distancezoom;
		endtime = starttime + (distancezoom*2);
	}
	
	if ((endtime - starttime) < 60) {
		return 0;
	}
	
	// Connect To Graph
	graphurl = visuobj.ajax_url + "?starttime=" + starttime + "&endtime=" + endtime + "&datatype=" + datatype;
	visugraph_ajax_connect(visuobj, graphurl);

}

function visugraph_change_zoom(visuobj, zoom) {
	
	datatype = document.getElementById(visuobj.datatype_id).value;
	starttime = (new Date(document.getElementById(visuobj.startdate_id).value).getTime()/1000);
	endtime = (new Date(document.getElementById(visuobj.enddate_id).value).getTime()/1000);
	
	timedistance = endtime - starttime;
	
	if (timedistance > 345600 || timedistance < 86400) {
		distancezoom = Math.round(timedistance/4);
	} else {
		distancezoom = Math.round(timedistance/6);
	}
	
	if (zoom == 0 && document.getElementById(visuobj.zoomin_id).disabled == false) {
		// Zoom In
		starttime = starttime + distancezoom;
		endtime = starttime + (distancezoom*2);
	} else if (document.getElementById(visuobj.zoomout_id).disabled == false) {
		// Zoom Out
		starttime = starttime - (distancezoom*2);
		endtime = starttime + (distancezoom*8);
	} else {
		// Zoom Disabled
		return 0;
	}
	
	if ((endtime - starttime) < 60) {
		return 0;
	}
	
	// Connect To Graph
	graphurl = visuobj.ajax_url + "?starttime=" + starttime + "&endtime=" + endtime + "&datatype=" + datatype;
	visugraph_ajax_connect(visuobj, graphurl);
	
}

function visugraph_change_pan(visuobj, direction) {
	
	datatype = document.getElementById(visuobj.datatype_id).value;
	starttime = (new Date(document.getElementById(visuobj.startdate_id).value).getTime()/1000);
	endtime = (new Date(document.getElementById(visuobj.enddate_id).value).getTime()/1000);
	
	timedistance = endtime - starttime;
	
	pandistance = Math.round(timedistance/4);
	rightpandistance = pandistance;
	
	if (direction == 0 && document.getElementById(visuobj.panleft_id).disabled == false) {
		// Pan Left
		starttime = starttime - pandistance;
		endtime = starttime + timedistance;
	} else if (document.getElementById(visuobj.panright_id).disabled == false) {
		// Pan Right
		starttime = starttime + rightpandistance;
		endtime = starttime + timedistance;
	} else {
		// Pan Disabled
		return 0;
	}
	
	if ((endtime - starttime) < 60) {
		return 0;
	}
	
	// Connect To Graph
	graphurl = visuobj.ajax_url + "?starttime=" + starttime + "&endtime=" + endtime + "&datatype=" + datatype;
	visugraph_ajax_connect(visuobj, graphurl);
	
}

function visugraph_drawgraph(visuobj, updatedlabel, updateddata, updatedmaxy, updatedticks) {
	
	if (visuobj.autofontsize) {
		if (updateddata.length > 20) {
			document.getElementById(visuobj.graphdiv_id).style.fontSize = "14px";
		} else if (updateddata.length > 14) {
			document.getElementById(visuobj.graphdiv_id).style.fontSize = "15px";
		} else {
			document.getElementById(visuobj.graphdiv_id).style.fontSize = "16px";
		}
	}
	
        var plot = $.plot($("#" + visuobj.graphdiv_id),
               [ { data: updateddata, label: updatedlabel } ], {
                   series: {
                       lines: { show: true, fill: true, fillColor: { colors: [{ opacity: 0.2 }, { opacity: 0.2 }] } },
                       points: { show: true }
                   },
                   colors: [visuobj.graphcolor],
                   grid: {
                   	margin: {
		            left: 23,
		            right: 30,
		            top: 20,
		            botttom: 40
		          },
		          labelMargin: 15,
		          axisMargin: 500,
		          hoverable: true,
		          clickable: true,
		          tickColor: "rgba(0,0,0,0.15)",
		          borderWidth: 0
		   },
                   xaxes: [ { mode: 'null', ticks: updatedticks } ],
                   yaxis: { min: 0, max: updatedmaxy },
                   tooltip:{
                             show: true,
                             cssClass: "visugraph_tooltip",
                             content: function(label, xval, yval, flotItem){
           			return "<div class='visugraph_tooltipdiv'> <span class='visugraph_tooltipdate'> " + visugraph_toolTipDate(visuobj, xval) + " </span> <span class='visugraph_tooltipvalue'> " + yval + " </span> </div>"
                             },
                             defaultTheme: false
                   }
                 });
}

function visugraph_toolTipDate(visuobj, x) {
	var tipmonths = new Array();
	tipmonths[0] = "Jan";
	tipmonths[1] = "Feb";
	tipmonths[2] = "Mar";
	tipmonths[3] = "Apr";
	tipmonths[4] = "May";
	tipmonths[5] = "Jun";
	tipmonths[6] = "Jul";
	tipmonths[7] = "Aug";
	tipmonths[8] = "Sep";
	tipmonths[9] = "Oct";
	tipmonths[10] = "Nov";
	tipmonths[11] = "Dec";
	
	var tipdateobj = new Date(parseInt(x));
	var tipyear = tipdateobj.getUTCFullYear();
	var tipmonth = tipmonths[tipdateobj.getUTCMonth()];        
	
	if (visuobj.graphtype == 'yearly') {
		var tiptext = tipyear;
	} else if (visuobj.graphtype == 'monthly') {
		var tiptext = tipmonth + " " + tipyear;
	} else if (visuobj.graphtype == 'daily') {
		var tipday = tipdateobj.getUTCDate();
		var tiptext = tipmonth + " " + tipday + " " + tipyear;
	} else {
		var tipday = tipdateobj.getUTCDate();
		var tiphour = tipdateobj.getUTCHours();
		var tipmin = tipdateobj.getUTCMinutes();
		tipmin = ('0'+tipmin).slice(-2);
		if (tiphour >= 12) {
			var tipampm = 'PM';
			tiphour = tiphour - 12;
		} else {
			var tipampm = 'AM';
		}
		if (tiphour < 1) {
			tiphour = '12';
		}
		var tiptext = tipmonth + " " + tipday + " " + tipyear + " " + tiphour + ":" + tipmin + tipampm;
	}
	
	return tiptext;
}
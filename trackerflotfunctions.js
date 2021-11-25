    // Main Graphing Function
    function drawgraph(updatedlabel, updateddata, updatedmaxy, updatedticks) {
	
	if (updateddata.length > 14) {
		graphdiv.style.fontSize = "10px";
	} else {
		graphdiv.style.fontSize = "11px";
	}
	
        var plot = $.plot($("#graphdiv"),
               [ { data: updateddata, label: updatedlabel } ], {
                   series: {
                       lines: { show: true },
                       points: { show: true }
                   },
                   grid: { hoverable: true, clickable: true },
                   xaxes: [ { mode: 'null', ticks: updatedticks } ],
                   yaxis: { min: 0, max: updatedmaxy }
                 });
    }
    
    // Hover Functions
    function showTooltip(x, y, contents) {
        $('<div id="tooltip">' + contents + '</div>').css( {
            position: 'absolute',
            display: 'none',
            top: y + 5,
            left: x + 5,
            border: '1px solid #fdd',
            padding: '2px',
            'background-color': '#fee',
            opacity: 0.80
        }).appendTo("body").fadeIn(200);
    }

    var previousPoint = null;
    $("#graphdiv").bind("plothover", function (event, pos, item) {
        if (ShowTooltips == true) {
            if (item) {
                if (previousPoint != item.dataIndex) {
                    previousPoint = item.dataIndex;
                    
                    $("#tooltip").remove();
                    var x = item.datapoint[0].toFixed(0),
                        y = item.datapoint[1].toFixed(0);
                    
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
                    var tipyear = tipdateobj.getFullYear();
                    var tipmonth = tipmonths[tipdateobj.getMonth()];
                    
                    if (MonthlyGraph == true) {
                        var tiptext = tipmonth + " " + tipyear;
                    } else {
                        var tipday = tipdateobj.getDate();
                        var tiptext = tipmonth + " " + tipday + " " + tipyear;
                    }

                    showTooltip(item.pageX, item.pageY, tiptext + "<br>" + y);

                }
            }
            else {
                $("#tooltip").remove();
                previousPoint = null;            
            }
        }
    });
    // End Hover Functions

    // Click Function
    $("#graphdiv").bind("plotclick", function (evt, pos, obj) {
	var clickx = Math.round(pos['x']);
	clickZoomIn(document.getElementById('siteid').value, document.getElementById('datatype').value, document.getElementById('tabletype').value, stimestamp, etimestamp, clickx);
    });
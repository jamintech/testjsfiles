// hide the results divs
$("#codes").hide();
$("#winners").hide();
$("#cleared").hide();
$("#results").hide();
$("#form2").hide();
var lastmaxclaims = 0;
$("#showtimercodes").click(function() {
	$("#results").hide();
	showTimerCodes();
	});
	
$("#createtimercode").click(function() {
	var rdata = $("#form1").serialize();
	$.post("/admin/jtmods/timer.php",rdata,function(data) {
		$("#results").html(data).show();
		if (!$("#restricted").is(":checked")) {
			showTimerCodes();
		}
	})});
	
$("#restricted").click(function() {
	console.log("restricted clicked " + $("#restricted").val());
	if ($("#restricted").is(":checked")) {
		// transistioned from unchecked to checked
		lastmaxclaims = $("#maxclaims").val();
		$("#maxclaims").val(0);
	} else {
		$("#maxclaims").val(lastmaxclaims);		
	}
});
	
function deleteCode(code) {
	var rdata = "command=delete&id=" + code;
	$.post("/admin/jtmods/timer.php",rdata, function(data) {
		$("#results").html(data).show();
		showTimerCodes();
	})};

function deletememid(id,timercode) {
	var rdata = "command=deletememid&id=" + id +"&timercode=" + timercode;
	$.post("/admin/jtmods/timer.php", rdata, function(data) {
		$("#results").html(data).show();
	});
}

function editRestrictions(code) {
	var rdata = "command=editRestrictions&id=" + code;
	$.post("/admin/jtmods/timer.php", rdata, function(data) {
		$("#results").html(data).show();
	});
}
	
function showClaims(code) {
	var rdata = "command=showclaims&id=" + code;
	$.post("/admin/jtmods/timer.php",rdata, function(data) {
		$("#results").html(data).show();
	})};
	
function showTimerCodes() {
	rdata = $("#form2").serialize();
		$.post("/admin/jtmods/timer.php",rdata,function(data) {
		$("#codes").html(data).show();
	})};


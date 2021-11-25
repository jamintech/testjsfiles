// hide the results divs
$("#tickets").hide();
$("#winners").hide();
$("#cleared").hide();
$("#results").hide();
$("#form1").hide();$("#form2").hide();$("#form3").hide();$("#form4").hide();$("#form5").hide();$("#form6").hide();
$("#form100").hide();
$("#form400").hide();
$("#showtickets").click(function() {
	//$(this).hide();
	var rdata = $("#form1").serialize();
	$("#results").html('<h4>Loading...</h4>').show();
	$.post("/admin/jtmods/rafflemgr.php",rdata,function(data) {
		$("#results").html(data).show();
	})});
$("#pickwinner").click(function() {
	//$(this).hide();
	var rdata = $("#form2").serialize();
	$("#results").html('<h4>Loading...</h4>').show();
	$.post("/admin/jtmods/rafflemgr.php",rdata,function(data) {
		$("#results").html(data).show();
	})});
$("#cleartickets").click(function() {
	//$(this).hide();
	if (confirm("Are you sure you wish to clear all active tickets?")) {
		var rdata = $("#form3").serialize();
		$("#results").html('<h4>Loading...</h4>').show();
		$.post("/admin/jtmods/rafflemgr.php",rdata,function(data) {
		$("#results").html(data).show();
	})}});
$("#showticketstats").click(function() {
	//$(this).hide();
	var rdata = $("#form4").serialize();
	$("#results").html('<h4>Loading...</h4>').show();
	$.post("/admin/jtmods/rafflemgr.php",rdata,function(data) {
		$("#results").html(data).show();
	})});	
$("#settings").click(function() {
	//$(this).hide();
	var rdata = $("#form5").serialize();
	$("#results").html('<h4>Loading...</h4>').show();
	$.post("/admin/jtmods/rafflemgr.php",rdata,function(data) {
		$("#results").html(data).show();
	})});
$("#contestselect").click(function() {
	//$(this).hide();
	var rdata = $("#form6").serialize();
	$("#results").html('<h4>Loading...</h4>').show();
	$.post("/admin/jtmods/rafflemgr.php",rdata,function(data) {
		$("#results").html(data).show();
	})});
		


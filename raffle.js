//$("#raffle_status").hide();
$("#raffledata").hide();
$("button").click(function() {
	$(this).hide();
	var rdata = $("#raffleform").serialize();
	$.post("/jtmods/raffle_claim.php",rdata,function(data) {
		$("#raffle_status").html(data).show();
	})});
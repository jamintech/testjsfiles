// PrizeGlance
// ©2016 LFM Wealth Systems, http://thetrafficexchangescript.com
// Licensed for the LFMTE script

// -- Graph Functions --
// VisuGraph JS 1.0
// ©2012 Josh Abbott, http://visugraph.com

function clearTable() {
	for (var i = document.getElementById("statstable").rows.length; i > 0; i--) {
		document.getElementById("statstable").deleteRow(i-1);
	}
	for (var i = document.getElementById("topwinstable").rows.length; i > 0; i--) {
		document.getElementById("topwinstable").deleteRow(i-1);
	}
}

function createTable() {
	
	clearTable();
	
	var newrow = document.getElementById("statstable").insertRow(0);
	
	var namecell = newrow.insertCell(0);
	namecell.id = "nameheading";
	document.getElementById("nameheading").style.backgroundColor = '#EEEEEE';
	document.getElementById("nameheading").innerHTML = '<font size=3>Plugin</font>';
	
	var prizecell = newrow.insertCell(1);
	prizecell.id = "prizeheading";
	document.getElementById("prizeheading").style.backgroundColor = '#EEEEEE';
	document.getElementById("prizeheading").style.textAlign = 'center';
	document.getElementById("prizeheading").innerHTML = '<span onClick="sortTable(1, \'desc\');"><font size=3>Amount</font></span>';
	
	var unitscell = newrow.insertCell(2);
	unitscell.id = "unitsheading";
	document.getElementById("unitsheading").style.backgroundColor = '#EEEEEE';
	document.getElementById("unitsheading").style.textAlign = 'center';
	document.getElementById("unitsheading").innerHTML = '<span onClick="sortTable(2, \'desc\');"><font size=3>Prizes<br>Awarded</font></span>';
	
	var newtwrow = document.getElementById("topwinstable").insertRow(0);
	
	var usercell = newtwrow.insertCell(0);
	usercell.id = "userheading";
	document.getElementById("userheading").style.backgroundColor = '#EEEEEE';
	document.getElementById("userheading").innerHTML = 'User';
	
	var amtcell = newtwrow.insertCell(1);
	amtcell.id = "amtheading";
	document.getElementById("amtheading").style.backgroundColor = '#EEEEEE';
	document.getElementById("amtheading").style.textAlign = 'center';
	document.getElementById("amtheading").innerHTML = '<span onClick="sortTWTable(1, \'desc\');">Amount Won</span>';
	
	var pwoncell = newtwrow.insertCell(2);
	pwoncell.id = "pwonheading";
	document.getElementById("pwonheading").style.backgroundColor = '#EEEEEE';
	document.getElementById("pwonheading").style.textAlign = 'center';
	document.getElementById("pwonheading").innerHTML = '<span onClick="sortTWTable(2, \'desc\');">Prizes Won</span>';
	
	var highprzcell = newtwrow.insertCell(3);
	highprzcell.id = "highprzheading";
	document.getElementById("highprzheading").style.backgroundColor = '#EEEEEE';
	document.getElementById("highprzheading").style.textAlign = 'center';
	document.getElementById("highprzheading").innerHTML = '<span onClick="sortTWTable(3, \'desc\');">Highest<br>Prize<br>Won</span>';
	
	var viewusrcell = newtwrow.insertCell(4);
	viewusrcell.id = "viewusrheading";
	document.getElementById("viewusrheading").style.backgroundColor = '#EEEEEE';
	document.getElementById("viewusrheading").style.textAlign = 'center';
	document.getElementById("viewusrheading").innerHTML = 'View All Prizes Won<br>by this Member';
	
}

function addItem(name, prize, prizep, units, unitsp) {
	// Insert The New Row
	var numofrows = document.getElementById("statstable").rows.length;
	var newrow = document.getElementById("statstable").insertRow(numofrows);
	
	// Create The Name Column
	var namecell = newrow.insertCell(0);
	namecell.id = "name" + name;
	document.getElementById("name" + name).innerHTML = '<font size=3>' + name + '</font>';
	
	// Special Condition for Cash Prizes
	var iscash = "";
	if (prizetype == 'cash') {
		iscash = '$';
		prize = prize.toFixed(2);
	}

	// Create The prize Column
	var prizecell = newrow.insertCell(1);
	prizecell.id = "prize" + name;
	document.getElementById("prize" + name).style.textAlign = 'center';
	document.getElementById("prize" + name).innerHTML = '<font size=3><b>' + iscash + prize + "</b></font><br><font size=2>" + prizep + "%</font>";
	
	// Create The Units Sold Column
	var unitscell = newrow.insertCell(2);
	unitscell.id = "units" + name;
	document.getElementById("units" + name).style.textAlign = 'center';
	document.getElementById("units" + name).innerHTML = '<font size=3><b>' + units + "</b></font><br><font size=2>" + unitsp + "%</font>";
	
}

function addTopWin(user, uname, amount, amountp, numprizes, numprizesp, highprize, stime, etime) {
	// Insert The New Row
	var numtwrows = document.getElementById("topwinstable").rows.length;
	var newtwrow = document.getElementById("topwinstable").insertRow(numtwrows);
	
	// Create The user Column
	var usercell = newtwrow.insertCell(0);
	usercell.id = "twuser" + user;
	document.getElementById("twuser" + user).innerHTML = '<font size=3><b>' + user + "</b><br><font size=2>" + uname + "</font></font>";
	
	// Special Condition for Cash Prizes
	var iscash = "";
	if (prizetype == 'cash') {
		iscash = '$';
		amount = amount.toFixed(2);
	}
	
	// Create The amount Column
	var amtcell = newtwrow.insertCell(1);
	amtcell.id = "twamt" + user;
	document.getElementById("twamt" + user).style.textAlign = 'center';
	document.getElementById("twamt" + user).innerHTML = '<font size=3><b>' + iscash + amount + "</b></font><br><font size=2>" + amountp + "%</font>";
	
	// Create The prizes won Column
	var pwoncell = newtwrow.insertCell(2);
	pwoncell.id = "twpwon" + user;
	document.getElementById("twpwon" + user).style.textAlign = 'center';
	document.getElementById("twpwon" + user).innerHTML = '<font size=3><b>' + numprizes + "</b></font><br><font size=2>" + numprizesp + "%</font>";
	
	// Special Condition for Cash Prizes
	var iscash = "";
	if (prizetype == 'cash') {
		iscash = '$';
		highprize = highprize.toFixed(2);
	}
	
	// Create The prizes won Column
	var highprzcell = newtwrow.insertCell(3);
	highprzcell.id = "twhprz" + user;
	document.getElementById("twhprz" + user).style.textAlign = 'center';
	document.getElementById("twhprz" + user).innerHTML = '<font size=3><b>' + iscash + highprize + "</b></font>";
	
	// Create The prizes won Column
	var detailscell = newtwrow.insertCell(4);
	detailscell.id = "twdetails" + user;
	document.getElementById("twdetails" + user).style.textAlign = 'center';
	document.getElementById("twdetails" + user).innerHTML = '<a href="prizeglance_udetails.php?user=' + user + '&starttime=' + stime + '&endtime=' + etime +'&prizetype=' + prizetype + '" target="_blank">View</a>';
}

function addTableText(text) {
	// Insert The New Row
	var numofrows = document.getElementById("statstable").rows.length;
	var newrow = document.getElementById("statstable").insertRow(numofrows);
	
	// Create The Column
	var textcell = newrow.insertCell(0);
	textcell.id = "textcell";
	document.getElementById("textcell").innerHTML = text;
	document.getElementById("textcell").colSpan = "3";
}

function addTWTableText(text) {
	// Insert The New Row
	var numofrows = document.getElementById("topwinstable").rows.length;
	var newrow = document.getElementById("topwinstable").insertRow(numofrows);
	
	// Create The Column
	var twtextcell = newrow.insertCell(0);
	twtextcell.id = "twtextcell";
	document.getElementById("twtextcell").innerHTML = text;
	document.getElementById("twtextcell").colSpan = "5";
}

function sortTable(colindex, order) {
	var tbl = document.getElementById("statstable").tBodies[0];
	if (tbl.rows.length > 2) {
		var store = [];
		for(var i=0, len=tbl.rows.length; i<len; i++) {
			var row = tbl.rows[i];
			var sortnr = parseFloat(row.cells[colindex].textContent || row.cells[colindex].innerText);
			if (order == "desc") { sortnr = 0 - sortnr; }
			if(!isNaN(sortnr)) store.push([sortnr, row]);
		}
		store.sort(function(x,y) {
			return x[0] - y[0];
		});
		for(var i=0, len=store.length; i<len; i++){
			tbl.appendChild(store[i][1]);
		}
		store = null;
	}
}

function sortTWTable(colindex, order) {
	var tbl = document.getElementById("topwinstable").tBodies[0];
	if (tbl.rows.length > 2) {
		var store = [];
		for(var i=0, len=tbl.rows.length; i<len; i++) {
			var row = tbl.rows[i];
			var sortnr = parseFloat(row.cells[colindex].textContent || row.cells[colindex].innerText);
			if (order == "desc") { sortnr = 0 - sortnr; }
			if(!isNaN(sortnr)) store.push([sortnr, row]);
		}
		store.sort(function(x,y) {
			return x[0] - y[0];
		});
		for(var i=0, len=store.length; i<len; i++){
			tbl.appendChild(store[i][1]);
		}
		store = null;
	}
}
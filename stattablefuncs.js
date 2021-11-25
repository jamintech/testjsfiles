function clearTable() {
	for (var i = document.getElementById("statstable").rows.length; i > 0; i--) {
		document.getElementById("statstable").deleteRow(i-1);
	}
}

function createLiveTable() {
	
	clearTable();
	
	var newrow = document.getElementById("statstable").insertRow(0);
	
	var namecell = newrow.insertCell(0);
	namecell.id = "nameheading";
	document.getElementById("nameheading").style.backgroundColor = '#EEEEEE';
	document.getElementById("nameheading").innerHTML = '<font size=1>Source</font>';
	
	var statcell = newrow.insertCell(1);
	statcell.id = "statheading";
	document.getElementById("statheading").style.backgroundColor = '#EEEEEE';
	document.getElementById("statheading").innerHTML = '<span onClick="sortTable(1, \'desc\');"><font size=1>Hits</font></span>';
}

function createDetailsTable() {
	
	clearTable();
	
	var newrow = document.getElementById("statstable").insertRow(0);
	
	var namecell = newrow.insertCell(0);
	namecell.id = "nameheading";
	document.getElementById("nameheading").style.backgroundColor = '#EEEEEE';
	document.getElementById("nameheading").innerHTML = '<font size=1>Source</font>';
	
	var hitscell = newrow.insertCell(1);
	hitscell.id = "hitsheading";
	document.getElementById("hitsheading").style.backgroundColor = '#EEEEEE';
	document.getElementById("hitsheading").innerHTML = '<span onClick="sortTable(1, \'desc\');"><font size=1>Hits</font></span>';
	
	var uhitscell = newrow.insertCell(2);
	uhitscell.id = "uhitsheading";
	document.getElementById("uhitsheading").style.backgroundColor = '#EEEEEE';
	document.getElementById("uhitsheading").innerHTML = '<span onClick="sortTable(2, \'desc\');"><font size=1>Uniq<br>Hits</font></span>';
	
	var mhitscell = newrow.insertCell(3);
	mhitscell.id = "mhitsheading";
	document.getElementById("mhitsheading").style.backgroundColor = '#EEEEEE';
	document.getElementById("mhitsheading").innerHTML = '<span onClick="sortTable(3, \'desc\');"><font size=1>Max<br>Hits</font></span>';
	
	var convscell = newrow.insertCell(4);
	convscell.id = "convsheading";
	document.getElementById("convsheading").style.backgroundColor = '#EEEEEE';
	document.getElementById("convsheading").innerHTML = '<span onClick="sortTable(4, \'desc\');"><font size=1>Convs</font></span>';
	
}

function setStat(colid, colval) {
	document.getElementById(colid).innerHTML = colval;
}

function addSource(name, stat) {
	// Insert The New Row
	var numofrows = document.getElementById("statstable").rows.length;
	var newrow = document.getElementById("statstable").insertRow(numofrows);
	
	// Create The Name Column
	var namecell = newrow.insertCell(0);
	namecell.id = "name" + name;
	document.getElementById("name" + name).innerHTML = name;
	
	// Create The Stat Column
	var statcell = newrow.insertCell(1);
	statcell.id = "stat" + name;
	document.getElementById("stat" + name).innerHTML = stat;
}

function addSourceDetailed(name, nhits, uhits, convs, mhits) {
	// Insert The New Row
	var numofrows = document.getElementById("statstable").rows.length;
	var newrow = document.getElementById("statstable").insertRow(numofrows);
	
	// Create The Name Column
	var namecell = newrow.insertCell(0);
	namecell.id = "name" + name;
	document.getElementById("name" + name).innerHTML = name;
	
	// Create The Total Hits Column
	var nhitscell = newrow.insertCell(1);
	nhitscell.id = "nhits" + name;
	document.getElementById("nhits" + name).innerHTML = nhits;
	
	// Create The Unique Hits Column
	var uhitscell = newrow.insertCell(2);
	uhitscell.id = "uhits" + name;
	document.getElementById("uhits" + name).innerHTML = uhits;
	
	// Create The Max Hits Column
	var mhitscell = newrow.insertCell(3);
	mhitscell.id = "mhits" + name;
	document.getElementById("mhits" + name).innerHTML = mhits;
	
	// Create The Conversions Column
	var convscell = newrow.insertCell(4);
	convscell.id = "convs" + name;
	document.getElementById("convs" + name).innerHTML = convs;
	
}

function addDetailedText(text) {
	// Insert The New Row
	var numofrows = document.getElementById("statstable").rows.length;
	var newrow = document.getElementById("statstable").insertRow(numofrows);
	
	// Create The Column
	var textcell = newrow.insertCell(0);
	textcell.id = "textcell";
	document.getElementById("textcell").innerHTML = text;
	document.getElementById("textcell").colSpan = "5";
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
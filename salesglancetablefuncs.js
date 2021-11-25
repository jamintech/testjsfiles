function clearTable() {
	for (var i = document.getElementById("statstable").rows.length; i > 0; i--) {
		document.getElementById("statstable").deleteRow(i-1);
	}
}

function createTable() {
	
	clearTable();
	
	var newrow = document.getElementById("statstable").insertRow(0);
	
	var namecell = newrow.insertCell(0);
	namecell.id = "nameheading";
	document.getElementById("nameheading").style.backgroundColor = '#EEEEEE';
	document.getElementById("nameheading").innerHTML = '<font size=3>Item</font>';
	
	var salescell = newrow.insertCell(1);
	salescell.id = "salesheading";
	document.getElementById("salesheading").style.backgroundColor = '#EEEEEE';
	document.getElementById("salesheading").innerHTML = '<span onClick="sortTable(1, \'desc\');"><font size=3>Sales</font></span>';
	
	var unitscell = newrow.insertCell(2);
	unitscell.id = "unitsheading";
	document.getElementById("unitsheading").style.backgroundColor = '#EEEEEE';
	document.getElementById("unitsheading").innerHTML = '<span onClick="sortTable(2, \'desc\');"><font size=3>Units<br>Sold</font></span>';
	
}

function addItem(name, sales, salesp, units, unitsp) {
	// Insert The New Row
	var numofrows = document.getElementById("statstable").rows.length;
	var newrow = document.getElementById("statstable").insertRow(numofrows);
	
	// Create The Name Column
	var namecell = newrow.insertCell(0);
	namecell.id = "name" + name;
	document.getElementById("name" + name).innerHTML = '<font size=3>' + name + '</font>';
	
	// Create The Sales Column
	var salescell = newrow.insertCell(1);
	salescell.id = "sales" + name;
	document.getElementById("sales" + name).innerHTML = '<font size=3><b>$' + sales + "</b></font><br><font size=2>" + salesp + "%</font>";
	
	// Create The Units Sold Column
	var unitscell = newrow.insertCell(2);
	unitscell.id = "units" + name;
	document.getElementById("units" + name).innerHTML = '<font size=3><b>' + units + "</b></font><br><font size=2>" + unitsp + "%</font>";
	
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
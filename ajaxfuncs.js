
function getOTO(sel1,sel2,sel3)
{
	var pId1 = sel1.options[sel1.selectedIndex].value;
	var pId2 = sel2.options[sel2.selectedIndex].value;
	var pId3 = sel3.options[sel3.selectedIndex].value;

	document.getElementById('item_id').value = '';	// Empty text box
	document.getElementById('_2co_productid').value = '';	// Empty text box
	document.getElementById('item_price').value = '';	// Empty text box

	document.getElementById('item2_id').value = '';	// Empty text box
	document.getElementById('_2co_productid2').value = '';	// Empty text box
	document.getElementById('item2_price').value = '';	// Empty text box

	document.getElementById('item3_id').value = '';	// Empty text box
	document.getElementById('_2co_productid3').value = '';	// Empty text box
	document.getElementById('item3_price').value = '';	// Empty text box

	if(pId1.length>0){
		ajax.requestFile = 'aj_otoproduct.php?pid1='+pId1+'&pid2='+pId2+'&pid3='+pId3;	// Specifying which file to get
		ajax.onCompletion = createItem;	// Specify function that will be executed after file has been found
		ajax.runAJAX();		// Execute AJAX function
	}
}

function createItem()
{
	var obj = document.getElementById('item_id');
	var obj2 = document.getElementById('_2co_productid');
	var obj3 = document.getElementById('item_price');
	var obj4 = document.getElementById('item2_id');
	var obj5 = document.getElementById('_2co_productid2');
	var obj6 = document.getElementById('item2_price');
	var obj7 = document.getElementById('item3_id');
	var obj8 = document.getElementById('_2co_productid3');
	var obj9 = document.getElementById('item3_price');
	eval(ajax.response);	// Executing the response from Ajax as Javascript code	
}

function getOTO1(sel)
{
	var productId = sel.options[sel.selectedIndex].value;
	document.getElementById('item_id').value = '';	// Empty text box
	document.getElementById('_2co_productid').value = '';	// Empty text box
	document.getElementById('item_price').value = '';	// Empty text box
	
	if(productId.length>0){
		ajax.requestFile = 'aj_otoproduct.php?pid1='+productId;	// Specifying which file to get
		ajax.onCompletion = createItem1;	// Specify function that will be executed after file has been found
		ajax.runAJAX();		// Execute AJAX function
	}
}

function createItem1()
{
	var obj = document.getElementById('item_id');
	var obj2 = document.getElementById('_2co_productid');
	var obj3 = document.getElementById('item_price');
	eval(ajax.response);	// Executing the response from Ajax as Javascript code	
}

function getOTO2(sel)
{
	var productId = sel.options[sel.selectedIndex].value;
	document.getElementById('item2_id').value = '';	// Empty text box
	document.getElementById('_2co_productid2').value = '';	// Empty text box
	document.getElementById('item2_price').value = '';	// Empty text box
	
	if(productId.length>0){
		ajax.requestFile = 'aj_otoproduct.php?pid2='+productId;	// Specifying which file to get
		ajax.onCompletion = createItem2;	// Specify function that will be executed after file has been found
		ajax.runAJAX();		// Execute AJAX function
	}
}

function createItem2()
{
	var obj4 = document.getElementById('item2_id');
	var obj5 = document.getElementById('_2co_productid2');
	var obj6 = document.getElementById('item2_price');
	eval(ajax.response);	// Executing the response from Ajax as Javascript code	
}

function getOTO3(sel)
{
	var productId = sel.options[sel.selectedIndex].value;
	document.getElementById('item3_id').value = '';	// Empty text box
	document.getElementById('_2co_productid3').value = '';	// Empty text box
	document.getElementById('item3_price').value = '';	// Empty text box
	
	if(productId.length>0){
		ajax.requestFile = 'aj_otoproduct.php?pid3='+productId;	// Specifying which file to get
		ajax.onCompletion = createItem3;	// Specify function that will be executed after file has been found
		ajax.runAJAX();		// Execute AJAX function
	}
}

function createItem3()
{
	var obj7 = document.getElementById('item3_id');
	var obj8 = document.getElementById('_2co_productid3');
	var obj9 = document.getElementById('item3_price');
	eval(ajax.response);	// Executing the response from Ajax as Javascript code	
}

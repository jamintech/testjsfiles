function chkCBEnabled()
{
	if (document.ss.cb_enable.checked == false) 
  	{ 
  		document.ss.cb_publisherid.disabled = true; 
  		document.ss.cb_secret.disabled = true; 
  		document.ss.cb_hoplink.disabled = true; 
  	}
	else
  	{ 
  		document.ss.cb_publisherid.disabled = false; 
  		document.ss.cb_secret.disabled = false; 
  		document.ss.cb_hoplink.disabled = false; 
	}
}

function chkANEnabled()
{
	if (document.ss.authnet_enable.checked == false) 
  	{ 
  		document.ss.authnet_login.disabled = true; 
  		document.ss.authnet_key.disabled = true; 
  	}
	else
  	{ 
  		document.ss.authnet_login.disabled = false; 
  		document.ss.authnet_key.disabled = false; 
	}
}

function chk2COEnabled()
{
	if (document.ss._2co_enable.checked == false) 
  	{ 
  		document.ss._2co_id.disabled = true; 
  		document.ss._2co_secret.disabled = true; 
  	}
	else
  	{ 
  		document.ss._2co_id.disabled = false; 
  		document.ss._2co_secret.disabled = false; 
	}
}

function chkPPTestmode()
{
	if (document.ss.pptestmode.checked == false) 
  	{ 
  		document.ss.pptestemail.disabled = true; 
  	}
	else
  	{ 
  		document.ss.pptestemail.disabled = false; 
	}
}

function toggleDisplay(obj,obj2) {
	var el = document.getElementById(obj);
	var e2 = document.getElementById(obj2);
	if ( el.style.display != 'none' ) 
	{
		el.style.display = 'none';
		e2.style.display = '';
	}
	else {
		el.style.display = '';
		e2.style.display = 'none';
	}
}

function getCode(pid)
{
	var windowprops = "location=no,scrollbars=yes,menubars=no,toolbars=no,resizable=no" + ",left=100,top=100,width=700,height=600";
 
	var URL = "paycode.php?pid="+pid; 
	popup = window.open(URL,"SalesPopup",windowprops);	
}
function showSales(mid)
{
	var windowprops = "location=no,scrollbars=yes,menubars=no,toolbars=no,resizable=no" + ",left=100,top=100,width=700,height=500";
 
	var URL = "showsales.php?mid="+mid; 
	popup = window.open(URL,"SalesPopup",windowprops);	
}

function addSale(sid)
{
	var windowprops = "location=no,scrollbars=no,menubars=no,toolbars=no,resizable=no" + ",left=100,top=100,width=500,height=500"; 
 
	var URL = "addsale.php?saleid="+sid; 
	popup = window.open(URL,"GroupPopup",windowprops);	
}

function editSale(sid)
{
	var windowprops = "location=no,scrollbars=no,menubars=no,toolbars=no,resizable=no" + ",left=100,top=100,width=500,height=500"; 
 
	var URL = "editsale.php?saleid="+sid; 
	popup = window.open(URL,"GroupPopup",windowprops);	
}

function delSale(sid)
{
	var windowprops = "location=no,scrollbars=no,menubars=no,toolbars=no,resizable=no" + ",left=100,top=100,width=500,height=500"; 
 
	var URL = "delsale.php?saleid="+sid; 
	popup = window.open(URL,"GroupPopup",windowprops);	
}

function editProduct(pid)
{
	var windowprops = "location=no,scrollbars=no,menubars=no,toolbars=no,resizable=no" + ",left=100,top=100,width=500,height=500"; 
 
	var URL = "editproduct.php?productid="+pid; 
	popup = window.open(URL,"GroupPopup",windowprops);	
}

function editCreditSale(pid)
{
	var windowprops = "location=no,scrollbars=no,menubars=no,toolbars=no,resizable=no" + ",left=100,top=100,width=500,height=500"; 
 
	var URL = "editcreditsale.php?productid="+pid; 
	popup = window.open(URL,"GroupPopup",windowprops);	
}

function editBonusPage(pid)
{
	var windowprops = "location=no,scrollbars=no,menubars=no,toolbars=no,resizable=no" + ",left=100,top=100,width=500,height=500"; 
 
	var URL = "editbonuspage.php?pageid="+pid; 
	popup = window.open(URL,"GroupPopup",windowprops);	
}

function editSpartner(pid)
{
	var windowprops = "location=no,scrollbars=no,menubars=no,toolbars=no,resizable=no" + ",left=100,top=100,width=500,height=500"; 
 
	var URL = "editspartner.php?partnerid="+pid; 
	popup = window.open(URL,"GroupPopup",windowprops);	
}

function editFilelib(fileid)
{
	var windowprops = "location=no,scrollbars=no,menubars=no,toolbars=no,resizable=no" + ",left=100,top=100,width=500,height=400"; 
 
	var URL = "editfilelib.php?fileid="+fileid; 
	popup = window.open(URL,"FilelibPopup",windowprops);	
}

function delFilelib(fileid)
{
	var windowprops = "location=no,scrollbars=no,menubars=no,toolbars=no,resizable=no" + ",left=100,top=100,width=500,height=400"; 
 
	var URL = "delfilelib.php?fileid="+fileid; 
	popup = window.open(URL,"FilelibPopup",windowprops);	
}

function delPage(pageid)
{
	var windowprops = "location=no,scrollbars=no,menubars=no,toolbars=no,resizable=no" + ",left=100,top=100,width=500,height=400"; 
 
	var URL = "delpage.php?pageid="+pageid; 
	popup = window.open(URL,"PagePopup",windowprops);	
}

function editPromo(promo)
{
	var windowprops = "location=no,scrollbars=no,menubars=no,toolbars=no,resizable=no" + ",left=100,top=100,width=500,height=400"; 
 
	var URL = "editpromo.php?promo="+promo; 
	popup = window.open(URL,"PromoPopup",windowprops);	
}

function delPromo(promo)
{
	var windowprops = "location=no,scrollbars=no,menubars=no,toolbars=no,resizable=no" + ",left=100,top=100,width=300,height=300"; 
 
	var URL = "delpromo.php?promo="+promo; 
	popup = window.open(URL,"PromoPopup",windowprops);	
}

function confirmDelGroup(group)
{
	var windowprops = "location=no,scrollbars=no,menubars=no,toolbars=no,resizable=no" + ",left=100,top=100,width=400,height=300"; 
 
	var URL = "delgroup.php?group="+group; 
	popup = window.open(URL,"GroupPopup",windowprops);	
}

function editGroup(group)
{
	var windowprops = "location=no,scrollbars=no,menubars=no,toolbars=no,resizable=no" + ",left=100,top=100,width=400,height=300"; 
 
	var URL = "editgroup.php?group="+group; 
	popup = window.open(URL,"GroupPopup",windowprops);	
}

function editMembertype(mtid)
{
	var windowprops = "location=no,scrollbars=yes,menubars=no,toolbars=no,resizable=no" + ",left=100,top=100,width=900,height=650"; 
 
	var URL = "editmt.php?mtid="+mtid; 
	popup = window.open(URL,"GroupPopup",windowprops);	
}

function delMembertype(mtid)
{
	var windowprops = "location=no,scrollbars=no,menubars=no,toolbars=no,resizable=no" + ",left=100,top=100,width=400,height=300"; 
 
	var URL = "delmt.php?mtid="+mtid; 
	popup = window.open(URL,"MTPopup",windowprops);	
}

function validate_reg_form(form) {
	var e = form.elements, m = '';
	if(!e['firstname'].value) {m += '- First name is required.\n';}
	if(!e['lastname'].value) {m += '- Last name is required.\n';}
	if(!e['address'].value) {m += '- Address is required.\n';}
	if(!e['city'].value) {m += '- City is required.\n';}
	if(!e['postcode'].value) {m += '- Postcode is required.\n';}
	if(!e['telephone'].value) {m += '- Telephone number is required.\n';}
	if(!e['paypal_email'].value) {m += '- PayPal email address is required.\n';}
	if(!/.+@[^.]+(\.[^.]+)+/.test(e['email'].value)) {
	m += '- E-mail requires a valid e-mail address.\n';
	}
	if(!e['username'].value) {m += '- Username is required.\n';}
	if(!e['password'].value) {m += '- Password is required.\n';}
	if(e['password'].value != e['password2'].value) {
	m += '- Your password and password confirmation do not match.\n';
	}
	if(e['email'].value != e['email2'].value) {
	m += '- Your email and email confirmation do not match.\n';
	}
	if(!e.geo[0].checked && !e.geo[1].checked && !e.geo[2].checked && !e.geo[3].checked) { m += '- Please select your part of the world.\n';}
	if(m) {
	alert('The following error(s) occurred:\n\n' + m);
	return false;
	}
return true;
}

function validate_profile(form) {
	var e = form.elements, m = '';
	if(!e['firstname'].value) {m += '- First name is required.\n';}
	if(!e['lastname'].value) {m += '- Last name is required.\n';}
	if(!e['address'].value) {m += '- Address is required.\n';}
	if(!e['city'].value) {m += '- City is required.\n';}
	if(!e['postcode'].value) {m += '- Postcode is required.\n';}
	if(!e['telephone'].value) {m += '- Telephone number is required.\n';}
	if(!e['paypal_email'].value) {m += '- PayPal email address is required.\n';}
	if(!/.+@[^.]+(\.[^.]+)+/.test(e['email'].value)) {
	m += '- E-mail requires a valid e-mail address.\n';
	}
	if(!e['username'].value) {m += '- Username is required.\n';}
	if(!e['password'].value) {m += '- Password is required.\n';}
	if(e['password'].value != e['password2'].value) {
	m += '- Your password and password confirmation do not match.\n';
	}
	if(m) {
	alert('The following error(s) occurred:\n\n' + m);
	return false;
	}
return true;
}

function checkAll(theForm, cName)
{
    for (i=0,n=theForm.elements.length;i<n;i++)
        if (theForm.elements[i].className.indexOf(cName) !=-1)
            if (theForm.elements[i].checked == true) {
                theForm.elements[i].checked = false;
            } else {
                theForm.elements[i].checked = true;
            }
}

function validate_addMembertype(form) {
	var e = form.elements, m = '';
	if(!e['accname'].value) {m += '- Name is required.\n';}
	if(!e['accfee'].value) {m += '- Monthly Fee is required.\n';}
	if(!e['acclevel'].value) {m += '- Level is required.\n';}
	if(!e['comm'].value) {m += '- Level is required.\n';}
	if(m) {
	alert('The following error(s) occurred:\n\n' + m);
	return false;
	}
return true;
}

function editMember(mid)
{
	var windowprops = "location=no,scrollbars=yes,menubars=no,toolbars=no,resizable=no" + ",left=100,top=50,width=500,height=700"; 
 
	var URL = "editmem.php?id="+mid; 
	popup = window.open(URL,"MemberPopup",windowprops);	
}

function editSite(mid)
{
	var windowprops = "location=no,scrollbars=yes,menubars=no,toolbars=no,resizable=no" + ",left=100,top=50,width=500,height=700"; 
 
	var URL = "editsite.php?id="+mid; 
	popup = window.open(URL,"MemberPopup",windowprops);	
}

function editReport(mid)
{
	var windowprops = "location=no,scrollbars=yes,menubars=no,toolbars=no,resizable=no" + ",left=100,top=50,width=500,height=700"; 
 
	var URL = "editreport.php?id="+mid; 
	popup = window.open(URL,"MemberPopup",windowprops);	
}

function editBanner(mid)
{
	var windowprops = "location=no,scrollbars=yes,menubars=no,toolbars=no,resizable=no" + ",left=100,top=50,width=500,height=700"; 
 
	var URL = "editbanner.php?id="+mid; 
	popup = window.open(URL,"MemberPopup",windowprops);	
}

function editSqban(mid)
{
	var windowprops = "location=no,scrollbars=yes,menubars=no,toolbars=no,resizable=no" + ",left=100,top=50,width=500,height=700"; 
 
	var URL = "editsqban.php?id="+mid; 
	popup = window.open(URL,"MemberPopup",windowprops);	
}

function addSqban()
{
	var windowprops = "location=no,scrollbars=no,menubars=no,toolbars=no,resizable=no" + ",left=100,top=50,width=500,height=700"; 
 
	var URL = "addsqban.php"; 
	popup = window.open(URL,"MemberPopup",windowprops);	
}

function delSqban(mid)
{
	var windowprops = "location=no,scrollbars=no,menubars=no,toolbars=no,resizable=no" + ",left=100,top=100,width=500,height=500"; 
 
	var URL = "delsqban.php?id="+mid; 
	popup = window.open(URL,"MemberPopup",windowprops);	
}

function editText(mid)
{
	var windowprops = "location=no,scrollbars=yes,menubars=no,toolbars=no,resizable=no" + ",left=100,top=50,width=500,height=700"; 
 
	var URL = "edittext.php?id="+mid; 
	popup = window.open(URL,"MemberPopup",windowprops);	
}

function addMember()
{
	var windowprops = "location=no,scrollbars=no,menubars=no,toolbars=no,resizable=no" + ",left=100,top=50,width=500,height=700"; 
 
	var URL = "addmem.php"; 
	popup = window.open(URL,"MemberPopup",windowprops);	
}

function addSite()
{
	var windowprops = "location=no,scrollbars=no,menubars=no,toolbars=no,resizable=no" + ",left=100,top=50,width=500,height=700"; 
 
	var URL = "addsite.php"; 
	popup = window.open(URL,"MemberPopup",windowprops);	
}

function addBan()
{
	var windowprops = "location=no,scrollbars=no,menubars=no,toolbars=no,resizable=no" + ",left=100,top=50,width=500,height=700"; 
 
	var URL = "addban.php"; 
	popup = window.open(URL,"MemberPopup",windowprops);	
}

function addEban()
{
	var windowprops = "location=no,scrollbars=no,menubars=no,toolbars=no,resizable=no" + ",left=100,top=50,width=500,height=700"; 
 
	var URL = "addeban.php"; 
	popup = window.open(URL,"MemberPopup",windowprops);	
}

function addIpban()
{
	var windowprops = "location=no,scrollbars=no,menubars=no,toolbars=no,resizable=no" + ",left=100,top=50,width=500,height=700"; 
 
	var URL = "addipban.php"; 
	popup = window.open(URL,"MemberPopup",windowprops);	
}

function addApp()
{
	var windowprops = "location=no,scrollbars=no,menubars=no,toolbars=no,resizable=no" + ",left=100,top=50,width=500,height=700"; 
 
	var URL = "addapp.php"; 
	popup = window.open(URL,"MemberPopup",windowprops);	
}

function addBanner()
{
	var windowprops = "location=no,scrollbars=no,menubars=no,toolbars=no,resizable=no" + ",left=100,top=50,width=500,height=700"; 
 
	var URL = "addbanner.php"; 
	popup = window.open(URL,"MemberPopup",windowprops);	
}

function addText()
{
	var windowprops = "location=no,scrollbars=no,menubars=no,toolbars=no,resizable=no" + ",left=100,top=50,width=500,height=700"; 
 
	var URL = "addtext.php"; 
	popup = window.open(URL,"MemberPopup",windowprops);	
}

function delMember(mid)
{
	var windowprops = "location=no,scrollbars=no,menubars=no,toolbars=no,resizable=no" + ",left=100,top=100,width=500,height=300"; 
 
	var URL = "delmem.php?id="+mid; 
	popup = window.open(URL,"MemberPopup",windowprops);	
}

function delSite(mid)
{
	var windowprops = "location=no,scrollbars=no,menubars=no,toolbars=no,resizable=no" + ",left=100,top=100,width=500,height=300"; 
 
	var URL = "delsite.php?id="+mid; 
	popup = window.open(URL,"MemberPopup",windowprops);	
}

function delReport(mid)
{
	var windowprops = "location=no,scrollbars=no,menubars=no,toolbars=no,resizable=no" + ",left=100,top=100,width=500,height=300"; 
 
	var URL = "delreport.php?id="+mid; 
	popup = window.open(URL,"MemberPopup",windowprops);	
}

function delBan(mid)
{
	var windowprops = "location=no,scrollbars=no,menubars=no,toolbars=no,resizable=no" + ",left=100,top=100,width=500,height=300"; 
 
	var URL = "delban.php?id="+mid; 
	popup = window.open(URL,"MemberPopup",windowprops);	
}

function delEban(mid)
{
	var windowprops = "location=no,scrollbars=no,menubars=no,toolbars=no,resizable=no" + ",left=100,top=100,width=500,height=300"; 
 
	var URL = "deleban.php?id="+mid; 
	popup = window.open(URL,"MemberPopup",windowprops);	
}

function delIpban(mid)
{
	var windowprops = "location=no,scrollbars=no,menubars=no,toolbars=no,resizable=no" + ",left=100,top=100,width=500,height=300"; 
 
	var URL = "delipban.php?id="+mid; 
	popup = window.open(URL,"MemberPopup",windowprops);	
}

function delApp(mid)
{
	var windowprops = "location=no,scrollbars=no,menubars=no,toolbars=no,resizable=no" + ",left=100,top=100,width=500,height=300"; 
 
	var URL = "delapp.php?id="+mid; 
	popup = window.open(URL,"MemberPopup",windowprops);	
}

function delBanner(mid)
{
	var windowprops = "location=no,scrollbars=no,menubars=no,toolbars=no,resizable=no" + ",left=100,top=100,width=500,height=300"; 
 
	var URL = "delbanner.php?id="+mid; 
	popup = window.open(URL,"MemberPopup",windowprops);	
}

function delText(mid)
{
	var windowprops = "location=no,scrollbars=no,menubars=no,toolbars=no,resizable=no" + ",left=100,top=100,width=500,height=300"; 
 
	var URL = "deltext.php?id="+mid; 
	popup = window.open(URL,"MemberPopup",windowprops);	
}

function editURL(id)
{
	var windowprops = "location=no,scrollbars=no,menubars=no,toolbars=no,resizable=no" + ",left=100,top=100,width=450,height=150"; 
 
	var URL = "editlink.php?id="+id; 
	popup = window.open(URL,"MemberPopup",windowprops);	
}

function delLink(id)
{
	var windowprops = "location=no,scrollbars=no,menubars=no,toolbars=no,resizable=no" + ",left=100,top=100,width=400,height=250"; 
 
	var URL = "dellink.php?id="+id; 
	popup = window.open(URL,"MemberPopup",windowprops);	
}

function closeAndRefresh()
{
	window.opener.location.reload();
	self.close();
}

function previewPage(page)
{
var windowprops = 'location=yes,scrollbars=yes,menubars=no,toolbars=no,resizable=yes,left=0,top=0,width=800,height=600';

var URL = 'previewtp.php?ctl='+page;
popup = window.open(URL,"PreviewPopup",windowprops);
}

function HighlightRowIfChecked(checkBox){
    var bgColor = checkBox.checked ? "yellow" : "white";
    var el = checkBox.parentNode;
    while(el.tagName.toLowerCase() != "td"){
        el = el.parentNode;
    }
    el.style.backgroundColor = bgColor;
}

function payAll(msalesid)
{
	var windowprops = 'location=no,scrollbars=no,menubars=no,toolbars=no,resizable=no,left=100,top=100,width=300,height=200';

	var URL = 'payall.php?msalesid='+msalesid;
	popup = window.open(URL,"PayPopup",windowprops);
}

function viewLog()
{
	var windowprops = "location=no,scrollbars=yes,menubars=no,toolbars=no,resizable=yes" + ",left=100,top=100,width=800,height=600"; 
 
	var URL = "viewlog.php"; 
	popup = window.open(URL,"LogPopup",windowprops);	
}
function editSurfCash(mtid)
{
    var windowprops = "location=no,scrollbars=yes,menubars=no,toolbars=no,resizable=no" + ",left=100,top=100,width=900,height=650"; 
 
    var URL = "editsfc.php?mtid="+mtid; 
    popup = window.open(URL,"MemberPopup",windowprops);    
}

function validate_surfCash(form) {
 return true;
}
function editDvMax(mtid)
{
    var windowprops = "location=no,scrollbars=yes,menubars=no,toolbars=no,resizable=no" + ",left=100,top=100,width=900,height=650"; 
 
    var URL = "editdvmax.php?mtid="+mtid; 
    popup = window.open(URL,"MemberPopup",windowprops);    
}

function validate_dvMax(form) {
 return true;
}
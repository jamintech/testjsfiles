// Web App Marketplace
// Copyright 2014-2016 Josh Abbott

// The function that is called when the Update All button is clicked
function update_all() {
	document.getElementById("updateall").disabled = true;
	var list = document.getElementById("updatelist");
	var listitems = list.getElementsByTagName("li");
	for (var i=1; i < listitems.length; i++) {
		var listitemid = listitems[i].id;
		var appid = listitemid.replace("update", "");
		var delaymilli = (i*850)-849;
		setTimeout('update_app(' + appid + ');', delaymilli);
	}
}

// The function that is called when an Update button is clicked
function update_app(appobject) {
	var listactionname = appobject.objectname + "updateaction";
	var listaction = document.getElementById(listactionname);
	listaction.innerHTML = '<table bgcolor="#FFFFFF" border=0 cellpadding=0 cellspacing=0 width=50>			<tr><td align=center>				<div id="' + appobject.objectname + '_update_holder1" class="holder1">				<div id="' + appobject.objectname + '_update_pie1" class="' + appobject.objectname + '_update_pie1">0/100</div>				<div id="' + appobject.objectname + '_update_holder2" class="holder2">					<div id="' + appobject.objectname + '_update_pie2" class="' + appobject.objectname + '_update_pie2">1/1</div>					<div id="' + appobject.objectname + '_update_holder3" class="holder3">						<center><div id="' + appobject.objectname + '_update_dlpercent" style="font-size: 10pt; margin: 0px;">0%</div></center>					</div>				</div>				</div>						</td>			<td width=10><p>&nbsp;</p></td>			<td width=10><p>&nbsp;</p></td>			<td width=10><p>&nbsp;</p></td>			</tr>		</table>';
	
	// Create pie graph for download progress
	$.fn.peity.defaults.pie = {
	  colours: ["#00ACD8", "#DDDDDD"],
	  delimiter: null,
	  diameter: 54,
	  height: null,
	  width: null
	};
	$("div." + appobject.objectname + "_update_pie1").peity("pie");
	$.fn.peity.defaults.pie = {
	  colours: ["#FFFFFF"],
	  delimiter: null,
	  diameter: 46,
	  height: null,
	  width: null
	};
	$("div." + appobject.objectname + "_update_pie2").peity("pie");
	
	eval('update_start_download(' + appobject.objectname + ');');
}

// Adds an app to the list of available updates
function add_update(appobject) {
	
	// Remove the placeholder if necessary
	document.getElementById("updateall").disabled = false;
	var listitem = document.getElementById("updateplaceholder");
	if (listitem) {
		listitem.parentNode.removeChild(listitem);
	}
	
	// Create the new list item and append it to the list
	var listitemname = appobject.objectname + "update";
	var list = document.getElementById("updatelist");
	var listitem = document.createElement("li");
	listitem.setAttribute("id", listitemname);
	listitem.setAttribute("class", "list-group-item media p-a");
	list.appendChild(listitem);
	
	// Set the HTML of the new list item
	listitem.innerHTML = '<div class="media-body">            <small id="' + appobject.objectname + 'updateaction" class="pull-right text-muted">              <button id="' + appobject.objectname + 'updatebtn" onclick="update_app(' + appobject.objectname + ')" class="btn btn-primary-outline btn-sm">Update</button>            </small>            <div class="media-heading">              <h4 class="m-a-0">' + appobject.appname + '</h4>              <div id="' + appobject.objectname + 'update_statusmessage" style="font-size:12pt; color:#000000; margin:0px; visibility:hidden;"></div>	<small id="' + appobject.objectname + 'updateinfo" class="pull-left text-muted">' + appobject.updatedetails + '</small>            </div>          </div>';
}

// Removes an app from the list of available updates
function remove_update(appobject) {
	var listitemname = appobject.objectname + "update";
	var listitem = document.getElementById(listitemname);
	if (listitem) {
		listitem.parentNode.removeChild(listitem);
		add_update_placeholder();
	}
}

// Adds a placeholder if no updates are available
function add_update_placeholder() {
	var list = document.getElementById("updatelist");
	var listitems = list.getElementsByTagName("li");
	if (listitems.length == 1) {
		document.getElementById("updateall").disabled = true;
		var listitem = document.createElement("li");
		listitem.setAttribute("id", "updateplaceholder");
		listitem.setAttribute("class", "list-group-item media p-a");
		list.appendChild(listitem);
		listitem.innerHTML = '<div class="media-body" style="text-align:center;">No Updates Are Available</div>';
	}
}

// The function that is called when the Install All button is clicked
function install_all() {
	document.getElementById("installall").disabled = true;
	var list = document.getElementById("notinstalledlist");
	var listitems = list.getElementsByTagName("li");
	for (var i=1; i < listitems.length; i++) {
		var listitemid = listitems[i].id;
		var appid = listitemid.replace("listitem", "");
		var delaymilli = (i*850)-849;
		setTimeout('install_app(' + appid + ');', delaymilli);
	}
}

// The function that is called when an Install button is clicked
function install_app(appobject) {
	var listactionname = appobject.objectname + "action";
	var listaction = document.getElementById(listactionname);
	
	listaction.innerHTML = '<table bgcolor="#FFFFFF" border=0 cellpadding=0 cellspacing=0 width=50>			<tr><td align=center>				<div id="' + appobject.objectname + '_holder1" class="holder1">				<div id="' + appobject.objectname + '_pie1" class="' + appobject.objectname + '_pie1">0/100</div>				<div id="' + appobject.objectname + '_holder2" class="holder2">					<div id="' + appobject.objectname + '_pie2" class="' + appobject.objectname + '_pie2">1/1</div>					<div id="' + appobject.objectname + '_holder3" class="holder3">						<center><div id="' + appobject.objectname + '_dlpercent" style="font-size: 10pt; margin: 0px;">0%</div></center>					</div>				</div>				</div>						</td>			<td width=10><p>&nbsp;</p></td>			<td width=10><p>&nbsp;</p></td>			<td width=10><p>&nbsp;</p></td>			</tr>		</table>';
	
	// Create pie graph for download progress
	$.fn.peity.defaults.pie = {
	  colours: ["#00ACD8", "#DDDDDD"],
	  delimiter: null,
	  diameter: 54,
	  height: null,
	  width: null
	};
	$("div." + appobject.objectname + "_pie1").peity("pie");
	$.fn.peity.defaults.pie = {
	  colours: ["#FFFFFF"],
	  delimiter: null,
	  diameter: 46,
	  height: null,
	  width: null
	};
	$("div." + appobject.objectname + "_pie2").peity("pie");
	
	eval('start_download(' + appobject.objectname + ');');
}

// Adds an app to the list of apps not installed
function add_install(appobject) {
	
	// Remove the placeholder if necessary
	document.getElementById("installall").disabled = false;
	var listitem = document.getElementById("installplaceholder");
	if (listitem) {
		listitem.parentNode.removeChild(listitem);
	}
	
	// Create the new list item and append it to the list
	var listitemname = appobject.objectname + "listitem";
	var list = document.getElementById("notinstalledlist");
	var listitem = document.createElement("li");
	listitem.setAttribute("id", listitemname);
	listitem.setAttribute("class", "list-group-item media p-a");
	list.appendChild(listitem);
	
	// Set the HTML of the new list item
	listitem.innerHTML = '<div class="media-body">            <small id="' + appobject.objectname + 'action" class="pull-right text-muted">              <button id="' + appobject.objectname + 'actionbtn" onclick="install_app(' + appobject.objectname + ')" class="btn btn-primary-outline btn-sm">Install</button>            </small>            <div class="media-heading">              <h4 class="m-a-0">' + appobject.appname + '</h4>              <div id="' + appobject.objectname + '_statusmessage" style="font-size:12pt; color:#000000; margin:0px; visibility:hidden;"></div>	<small id="' + appobject.objectname + 'appinfo" class="pull-left text-muted">' + appobject.appdetails + '</small>            </div>          </div>';
}

// The function that is called when an Uninstall button is clicked
function uninstall_app(appobject) {
	var listactionname = appobject.objectname + "action";
	var listaction = document.getElementById(listactionname);
	listaction.innerHTML = '<img src="assets/img/graphloading.gif">';
	start_uninstall(appobject);
}

// Adds an app to the list of apps installed
function add_uninstall(appobject) {
	
	// Remove the placeholder if necessary
	var listitem = document.getElementById("uninstallplaceholder");
	if (listitem) {
		listitem.parentNode.removeChild(listitem);
	}
	
	// Create the new list item and append it to the list
	var listitemname = appobject.objectname + "listitem";
	var list = document.getElementById("installedlist");
	var listitem = document.createElement("li");
	listitem.setAttribute("id", listitemname);
	listitem.setAttribute("class", "list-group-item media p-a");
	list.appendChild(listitem);
	
	// Set the HTML of the new list item
	listitem.innerHTML = '<div class="media-body">            <small id="' + appobject.objectname + 'action" class="pull-right text-muted">      <button id="' + appobject.objectname + 'reactionbtn" onclick="install_app(' + appobject.objectname + ')" class="btn btn-primary-outline btn-sm">Reinstall</button>        <a href="#uninstallconf' + appobject.objectname + '" class="text-inherit" data-toggle="modal"><button id="' + appobject.objectname + 'actionbtn" class="btn btn-primary-outline btn-sm" style="background-color:darkred;color:white;">Uninstall</button></a>            </small>            <div class="media-heading">              <h4 class="m-a-0">' + appobject.appname + '</h4>              <div id="' + appobject.objectname + '_statusmessage" style="font-size:12pt; color:#000000; margin:0px; visibility:hidden;"></div>	<small id="' + appobject.objectname + 'appinfo" class="pull-left text-muted">' + appobject.appdetails + '</small>            </div>          </div>				<div class="modal" id="uninstallconf' + appobject.objectname + '" role="dialog" aria-labelledby="uninstallconf' + appobject.objectname + '" aria-hidden="true">  <div class="modal-dialog modal-sm">    <div class="modal-content">      <div class="modal-header">        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>        <h4 class="modal-title">Uninstall App</h4>      </div>      <div class="modal-body">        <p>Are you sure you wish to uninstall the ' + appobject.appname + ' app from this site?</p>      </div>      <div class="modal-actions">        <button type="button" class="btn-link modal-action" data-dismiss="modal" onclick="uninstall_app(' + appobject.objectname + ')">          <strong>Uninstall</strong>        </button>        <button type="button" class="btn-link modal-action" data-dismiss="modal">Cancel</button>      </div>    </div>  </div></div>';
}

// Removes an app from the list of apps available or the list of apps installed
function remove_listitem(appobject) {
	var listitemname = appobject.objectname + "listitem";
	var listitem = document.getElementById(listitemname);
	if (listitem) {
		listitem.parentNode.removeChild(listitem);
		add_placeholders();
	}
}

// Adds placeholders if no apps are installed or available to be installed
function add_placeholders() {
	var list = document.getElementById("notinstalledlist");
	var listitems = list.getElementsByTagName("li");
	if (listitems.length == 1) {
		document.getElementById("installall").disabled = true;
		var listitem = document.createElement("li");
		listitem.setAttribute("id", "installplaceholder");
		listitem.setAttribute("class", "list-group-item media p-a");
		list.appendChild(listitem);
		listitem.innerHTML = '<div class="media-body" style="text-align:center;">No Apps Are Available</div>';
	}
	var list = document.getElementById("installedlist");
	var listitems = list.getElementsByTagName("li");
	if (listitems.length == 1) {
		var listitem = document.createElement("li");
		listitem.setAttribute("id", "uninstallplaceholder");
		listitem.setAttribute("class", "list-group-item media p-a");
		list.appendChild(listitem);
		listitem.innerHTML = '<div class="media-body" style="text-align:center;">No Apps Are Installed</div>';
	}
}
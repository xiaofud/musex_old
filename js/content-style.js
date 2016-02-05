//Load device CSS from the parent frame
if(window.parent.document.getElementById("device-style")){
	var ParentDeviceStyle = window.parent.document.getElementById("device-style");
	if(ParentDeviceStyle.href.indexOf("desktop") != -1){var theDeviceType = "desktop"}
	else if(ParentDeviceStyle.href.indexOf("mobile") != -1){var theDeviceType = "mobile"}
	var theDeviceStyle = document.createElement("link");
	theDeviceStyle.id = "device-style";
	theDeviceStyle.rel = "stylesheet";
	theDeviceStyle.type = "text/css";
	theDeviceStyle.href = "../css/content-" + (theDeviceType) + ".css";
	document.getElementsByTagName("HEAD")[0].appendChild(theDeviceStyle)}

//Load display mode CSS from the parent frame
if(window.parent.document.getElementById("mode-style")){
	var ParentModeStyle = window.parent.document.getElementById("mode-style");
	var theDisplayStyle = document.createElement("link");
	theDisplayStyle.id = "mode-style";
	theDisplayStyle.rel = "stylesheet";
	theDisplayStyle.type = "text/css";
	theDisplayStyle.href = ParentModeStyle.href;
	document.getElementsByTagName("HEAD")[0].appendChild(theDisplayStyle);}
	
//Run script successfully
//alert("Content style script done!")
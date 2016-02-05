//Recognize device type according to the window size
var theWidth = window.innerWidth;
var theHeight = window.innerHeight;
var theDeviceType;
if(theWidth > theHeight){
	theDeviceType = "desktop"}
	else{
	theDeviceType = "mobile"}
	
//If window size changes
window.onresize = MinSize()
function MinSize(){
if(theWidth!=window.innerWidth){
	window.location = document.location}}

//Load CSS according to the device type
var theDeviceStyle = document.createElement("link");
	theDeviceStyle.id = "device-style";
	theDeviceStyle.rel = "stylesheet";
	theDeviceStyle.type = "text/css";
	theDeviceStyle.href = "../css/index-" + (theDeviceType) + ".css";
	document.getElementsByTagName("HEAD")[0].appendChild(theDeviceStyle)

//Get time
var theDate = new Date;
var theHour = theDate.getHours();
var theTime;
if(theHour >= 6 && theHour < 19){
	theTime = "day"}
	else{
	theTime = "night"}

//Load CSS according to the time
var theDisplayStyle = document.createElement("link");
	theDisplayStyle.id = "mode-style";
	theDisplayStyle.rel = "stylesheet";
	theDisplayStyle.type = "text/css";
	theDisplayStyle.href = "../css/mode-" + (theTime) + ".css";
	document.getElementsByTagName("HEAD")[0].appendChild(theDisplayStyle)

//Menu switch
var theMenuState = "off"
function MenuSwitch(){
	var theCatalog = document.getElementById("catalog")
	if(theMenuState == "off"){
		theCatalog.style.display = "inline";
		theMenuState = "on"}
	else{
		theCatalog.style.display = "none";
		theMenuState = "off"}}

function menuhide(){
	if(theDeviceStyle.href.indexOf("mobile") != -1){
		var theCatalog = document.getElementById("catalog")
		theCatalog.style.display = "none";
		theMenuState = "off"}}
		
//Run script successfully
//alert("Style script done!")
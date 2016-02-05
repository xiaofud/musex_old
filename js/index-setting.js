var theSettingFrame = document.getElementById("setting-frame")

//Show Setting Frame
function SettingPop(){
	//document.getElementById("glass-rub").play()
	theSettingFrame.style.animationName = "setting-pop";
	theSettingFrame.style.animationDuration = "0.5s";
	theSettingFrame.style.top = "0";
	theSettingFrame.style.display = "inline"}

//Hide Setting Frame
function SettingFade(){
	//document.getElementById("glass-rub").play()
	theSettingFrame.style.animationName = "setting-fade";
	theSettingFrame.style.animationDuration = "0.5s";
	theSettingFrame.style.top = "-200%";
	window.setTimeout("theSettingFrame.style.display = 'none'", 500)}

//Change device mode
function ModeDesktop(){
	var PresentDevice = "desktop";
	DeviceChange(PresentDevice)}
	
function ModeMobile(){
	var PresentDevice = "mobile";
	DeviceChange(PresentDevice)}

function DeviceChange(PresentDevice){
	theDeviceStyle.href = "../css/index-"+(PresentDevice)+".css";
	var ContentDeviceStyle = document.getElementById("content-frame").contentWindow.document.getElementById("device-style")
	if(ContentDeviceStyle){
		ContentDeviceStyle.href = "../css/content-"+(PresentDevice)+".css"}
	SettingFade()}

//Change display mode
function ModeDay(){
	var PresentMode = "day";
	ModeChange(PresentMode)}
	
function ModeNight(){
	var PresentMode = "night";
	ModeChange(PresentMode)}

function ModeChange(PresentMode){
	theDisplayStyle.href = "../css/mode-"+(PresentMode)+".css";
	var ContentModeStyle = document.getElementById("content-frame").contentWindow.document.getElementById("mode-style")
	if(ContentModeStyle){
		ContentModeStyle.href = theDisplayStyle.href}
	SettingFade();
	theBackgroundStyle.style.opacity = "0";
	theSettingFrame.style.opacity = "0";
	window.setTimeout("ChangeBackground()", 2000)}

//Change background image
function ChangeBackground(){
	var theTargetClass
	if(theDisplayStyle.href.indexOf("day") != -1){theTargetClass = "day"}
	else if(theDisplayStyle.href.indexOf("night") != -1){theTargetClass = "night"}
	var newImageIndex = parseInt(Math.random()*3) + 1;
	var newImageURL =  "../img/bgi/"+(theTargetClass)+"-"+(newImageIndex)+".jpg";
	theBackgroundStyle.style.backgroundImage = "url("+(newImageURL)+")";
	theSettingStyle.style.backgroundImage = "url("+(newImageURL)+")";
	theBackgroundStyle.style.opacity = "1";
	theSettingFrame.style.opacity = "0.85"}

//Change music style
function PlaylistClassic(){
	PresentStyleID = IDClassic
	PlaylistChange(PresentStyleID)}

function PlaylistFearless(){
	PresentStyleID = IDFearless
	PlaylistChange(PresentStyleID)}

function PlaylistFresh(){
	PresentStyleID = IDFresh
	PlaylistChange(PresentStyleID)}

function PlaylistDark(){
	PresentStyleID = IDDark
	PlaylistChange(PresentStyleID)}

function PlaylistSexy(){
	PresentStyleID = IDSexy
	PlaylistChange(PresentStyleID)}

function PlaylistChange(PresentStyleID){
	var PlayerMiniURL = "http://music.163.com/outchain/player?type=0&id="+(PresentStyleID)+"&auto=1&height=32"
	var thePlayer = document.getElementById("player")
	thePlayer.src = PlayerMiniURL;
	thePlayer.style.display = "inline";
	SettingFade()}

function PlaylistHide(){
	var thePlayer = document.getElementById("player")
	thePlayer.src = "";
	thePlayer.style.display = "none";
	SettingFade()}

//Run script successfully
//alert("Setting script done!")
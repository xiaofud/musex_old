//Create objects
var theBackgroundStyle = document.getElementById("background-style")
var theSettingStyle = document.getElementById("setting-style")

//Choose background image accroding to the random and time
var theImageIndex = parseInt(Math.random()*3) + 1;
var theImageURL =  "../img/bgi/"+theTime+"-"+theImageIndex+".jpg"

//Load background image
theBackgroundStyle.style.backgroundImage = "url("+(theImageURL)+")";
theSettingStyle.style.backgroundImage = "url("+(theImageURL)+")";

function Loaded(){
	//Show elements
	theBackgroundStyle.style.opacity = "1"
	
	//preload other background
	for (var i=0;i<theImageIndex.length;i++)
	{var theImage = new Image[theImageIndex.length];
	var theURL = "../img/bgi/day-"+i+".jpg";
	var theURL = "../img/bgi/night-"+i+".jpg";
	theImages[i].src = theURL}}
	
//Run script successfully
//alert("Loaded script done!")
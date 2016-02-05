//Make a random
var theRandom = Math.random();
theRandom = Math.ceil(theRandom * 5);

//Playlist ID
var PresentStyleID
var IDClassic = "117792763"
var IDFearless = "150768146"
var IDFresh = "136344840"
var IDDark = "150721895"
var IDSexy = "150733830"
var Autoplay = "0"

//Choose playlist accroding to the random
if(theRandom == 1){
	PresentStyleID = IDClassic}
else if(theRandom == 2){
	PresentStyleID = IDFearless}
else if(theRandom == 3){
	PresentStyleID = IDFresh}
else if(theRandom == 4){
	PresentStyleID = IDDark}
else{
	PresentStyleID = IDSexy}

//Load playlist
var PlayerMiniURL = "http://music.163.com/outchain/player?type=0&id="+(PresentStyleID)+"&auto="+(Autoplay)+"&height=32"
var thePlayer = document.getElementById("player")
thePlayer.src = PlayerMiniURL

//Hide player if failed

//Run script successfully
//alert("Music script done!")
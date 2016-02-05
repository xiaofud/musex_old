//Icon animation
function StartAnimation(){
	//document.getElementById("pop-up").play()
	var theAnimationIcon = document.getElementById(theAnimationTarget)
	if(theAnimationTarget=="favorites-icon"||theAnimationTarget=="setting-icon"||theAnimationTarget=="project-icon"){
		theAnimationIcon.style.animationName = "animation-rotate";
		theAnimationIcon.style.animationTimingFunction = "linear";
		theAnimationIcon.style.animationIterationCount = "infinite";
		theAnimationIcon.style.animationDuration = "2s"}
	else{
		theAnimationIcon.style.transform = "rotate(0deg)"}
	theAnimationIcon.style.animationPlayState = "running"}

function StopAnimation(){
	var theAnimationIcon = document.getElementById(theAnimationTarget)
	if(theAnimationTarget=="favorites-icon"||theAnimationTarget=="setting-icon"||theAnimationTarget=="project-icon"){theAnimationIcon.style.animationPlayState = "paused"}
	else{theAnimationIcon.style.transform = "rotate(90deg)"}}

//Run script successfully
//alert("Animation script done!")
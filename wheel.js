var emoji = "None"

function ab1_Click() {
   var vid1 = document.getElementById("wheel");
   if (vid1.style.visibility == "visible") { v = "hidden"; }
   else{
	   v = "visible"
   }
   vid1.style.visibility =  v; 
} 

function mouseDown() {
	document.getElementById("wheel").style.display = 'block';
}

function mouseUp() {
  document.getElementById("wheel").style.display = 'none';
}


function foo() {
	document.getElementById("wheel").style.display = "none";
}

function myFunction() {
  var x = document.getElementById("wheel");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function mouseDown1() {
    var x = event.clientX;
    var y = event.clientY;
	document.getElementById("x").innerHTML = x;
	document.getElementById("y").innerHTML = y;
	
	var width = document.body.clientWidth;
	var height = document.body.clientHeight;
    var wheelSel = document.getElementById("wheel");
    wheelSel.style.display = 'block';
    wheelSel.style.position = 'absolute';
	wheelSel.style.left = x-width/2 + 100 + 'px'
	wheelSel.style.top = y-200 + 'px'
}

function mouseUp1() {

    var wheelSel = document.getElementById("wheel");
    wheelSel.style.display = 'none';
    wheelSel.style.position = 'absolute';
}


function myFunction1() {
  document.getElementById("demo").innerHTML = emoji;
}

function updateEmoji(em){
	document.getElementById("update").innerHTML = em;
}
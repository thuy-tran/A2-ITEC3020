// validatorr.js
//   Register the event handlers for validator.html
//document.getElementById("myForm").onchange = chkParam;
//document.getElementById("a").onchange = chkParam;
// document.getElementById("b").onchange = chkParam;
// document.getElementById("c").onchange = chkParam;
//document.getElementById("calcVolumeBtn").onclick = calcVolume;

//can use focus and select on the text box element??? They don't work!!!!
//onselect does not give error mssg when wrong input of name
//onfocus gives an alert mssg as soon as you load tye brower or move close to the name text box


var aNode = document.getElementById("a");
aNode.addEventListener("change", chkParam, false);

var bNode = document.getElementById("b");
bNode.addEventListener("change", chkParam, false);

var cNode = document.getElementById("c");
cNode.addEventListener("change", chkParam, false);

var volNode = document.getElementById("calcVolumeBtn");
volNode.addEventListener("click", calcVolume, false);
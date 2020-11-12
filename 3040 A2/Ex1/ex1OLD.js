// validator.js
//   An example of input validation using the change and submit 
//   events
// The event handler function for the name text box
var min= 0;
var max= 100000;

//var myParam_a= document.getElementById("myForm");
//document.write(myParam_a.param[0].value);

function chkParam(){

//var myParam_a = document.getCurrentTarget();  //ERROR //DOESN'T WORK



//var form = documentc
// Determine which button was pressed

/*
  for (var index = 0; index < 3; index++){
    if (form.param[index].value<= min || form.param[index].value>=max) 
    {
      alert("The parameter a you entered (" + myParam_a.value + ") is invalid. \n" +
            "The variable a should be non-zero and positive");
      return false;
    } else
      return true;
*/

var myParam= document.getElementById("a");

if (myParam.value<= min || myParam.value>=max) 
    {
      alert("The parameter a you entered (" + myParam.value + ") is invalid. \n" +
            "The variable a should be non-zero and positive");
      return false;
    } else
      return true;


}




function calcVolume() {
  var a= document.getElementById("a").value;
  var b = document.getElementById("b").value;
  var c = document.getElementById("c").value;
// Compute the cost
  document.getElementById("volume").value = (4/3)* Math.PI* a*b*c;
}  //* end of computeCost




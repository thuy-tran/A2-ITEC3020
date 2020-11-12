// validator.js
//   An example of input validation using the change and submit 
//   events
// The event handler function for the name text box

//var myParam_a= document.getElementById("myForm");
//document.write(myParam_a.param[0].value);

function convertGrade() {
  var retVal= "";
  // var g = event.currentTarget; //x is the element  //Cannot use this since this is DOM@ and we need to get elementByID below (document.getElementById("letter").value =retVal;) which is DOM0) Cannot use both DOMS in same function!
  // var x= parseFloat(g);

  var y = document.getElementById("num_grade").value;
  var x= parseFloat(y);

  switch(true)
  {
    case (x>=90 && x<=100): 
      retVal="A+";
      break;
    case (x>=80 && x<=89): 
      retVal="A";
      break;
    case (x>=75 && x<=79): 
      retVal="B+";
      break;
    case (x>=70 && x<=74): 
      retVal="B";
      break;
    case (x>=65 && x<=69): 
      retVal="C+";
      break;
    case (x>=60 && x<=64): 
      retVal="C";
      break;
    case (x>=55 && x<=59): 
      retVal="D+";
      break;
    case (x>=50 && x<=54): 
      retVal="D";
      break;
    case (x>=40 && x<=49): 
      retVal="E";
      break;
    case (x>=0 && x<=39): 
      retVal="F";
      break;

  }

  document.getElementById("letter").value =retVal;

}


// var g= document.getElementById("num_grade").value;
// document.write(g);

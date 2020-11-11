//Q5.js
//An example to display the triangle using user's input
//The onsubmit event handler

function form_triangle(){
    var input=document.getElementById("numericInput").value;
    var x="XX ";
    if (input<1){
      alert ("The input entered is invalid. Please enter positive integer number");
    return false;
    }
    else{
      for (var i = 1; i<= input; i++){
        document.write(x.repeat(i),"<br/>");
      }
    }  
  }





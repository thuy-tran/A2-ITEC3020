// insert_names.js
//   This script has an array of names, name_list,
//   whose values are in alphabetical order. New
//   names are input through a prompt. Each new
//   name is inserted into the name_list array,
//   after which the new list is displayed.



var num_list = new Array();

var new_num= prompt("Please type a new number", "");
num_list[num_list.length]= new_num;


while (new_num!=0)
{
  new_num= prompt("Please type a new number", "");
  num_list[num_list.length]= new_num;

}


// let negative=0;
// let positive=0;
// var list_len= num_list.length;

var negative=0;
var positive=0;


for (i=0;i<num_list.length;i++)
{
  
  if(num_list[i]<0){
    negative++;
  }
  

  else if (num_list[i]>0){
     positive++;
  }

}


document.write("The number of positive numbers enetered is: " + positive + "</p>");
document.write("The number of negative numbers enetered is: " + negative + "</p>");


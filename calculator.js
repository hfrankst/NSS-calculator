/*I need to grab the user inputs and set input1 to 'x' and input2 to 'y'.
Then I need to give a place for the result of the math funcitons to be published on the html page*/



//create variables to connect to the buttons

var multi =document.getElementById("multiply");
var add = document.getElementById("add");
var subtract = document.getElementById("subtract");
var divide = document.getElementById("divide");
var final = document.getElementById("result");



//Multiplication Function
//event listener making the connection to the button, triggering the following function
multi.addEventListener("click", Multiply);
function Multiply(input1, input2){
	//get the number values from the input fields
	var input1 = parseFloat(document.getElementById("num1").value);
	var input2 = parseFloat(document.getElementById("num2").value);
	
	final.innerHTML = (input1 * input2);
	console.log(final.innerHTML);

};

//Addition Function
add.addEventListener("click", Add);
function Add(input1, input2){
	//get the number values from the input fields
	var input1 = parseFloat(document.getElementById("num1").value);
	var input2 = parseFloat(document.getElementById("num2").value);
	
	final.innerHTML = (input1 + input2);
	console.log(final.innerHTML);

};

//Subtraction Function
subtract.addEventListener("click", Subtract);
function Subtract(input1, input2){
	//get the number values from the input fields
	var input1 = parseFloat(document.getElementById("num1").value);
	var input2 = parseFloat(document.getElementById("num2").value);

	final.innerHTML = (input1 - input2);
	console.log(final.innerHTML);

};

//Division Function
divide.addEventListener("click", Divide);	
function Divide(input1, input2){
	//get the number values from the input fields
	var input1 = parseFloat(document.getElementById("num1").value);
	var input2 = parseFloat(document.getElementById("num2").value);

	final.innerHTML = (input1 / input2);
	console.log(final.innerHTML);

};
 


/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */
special.addEventListener("click", Special);
 function Special(input1, input2, mathOperation){
 	var x = input1;
 	var y = input2;
 	var mathOperation = (input1 + input2);
 	var answer = Multiply(mathOperation, 5);
 	final.innerHTML = answer;
 }
 



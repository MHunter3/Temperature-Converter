"use strict";
var $ = function(id) { return document.getElementById(id); };
var convertTemp;
var degrees_entered;
var degreeLabel2 = $("degree_label_2");
var cTemp;

//var ftemp = Fahrenheit;

var clearTextBoxes = function() {
    $("degrees_entered").value = "";
    $("degrees_computed").value = "";
};

//convertTemp function to calculate temperatures
var convertTemp = function () {
	var cTemp = 100 * 5;
	var cTemp = document.getElementById("degree_label_1").value;
	var fTemp = document.getElementById("degree_label_2").value;
	
	//ctemp = ctemp.value;
	
	//var toFahTemp = (C*9/5) + 32;
	//var toCelTemp = 

	/*if ($("degree_label_1").checked) {
		var num1 = 2;
		var num3 = 4;
		var myNum = (num1 + num2);
		return myNum;
	}*/

}

			

// Fahrenheit function executed when user clicks on the second radio button in the HTML doc
var toFahrenheit = function() {

	
	//var fTemp = parseFloat($("degrees_entered")).value; //get user value
	//var labelOne = document.getElementById("degree_label_1");
	//var labelTwo = document.getElementById("degree_label_2");
	//labelTwo.inner.HTML = "Enter H Degrees";
	$("degree_label_1").innerHTML = "Enter C degrees";  //switch radio buttons and calculations upon user clicks
	$("degree_label_2").innerHTML = "Degrees Fahrenheit"; 
	clearTextBoxes();
	//$("toCelsius").checked = false;
	
}


// Celsius function to execute when user clicks on the first radio button in the HTML doc

var toCelsius = function() {
	clearTextBoxes();
	$("degree_label_1").innerHTML = "Enter F degrees"; 
	$("degree_label_2").innerHTML = "Degrees Celsius"; 
	//$("toCelsius").focus();
	//convertTemp();

}

window.onload = function() {
    $("convert").onclick = convertTemp;
    $("to_celsius").onclick = toCelsius;
    $("to_fahrenheit").onclick = toFahrenheit;
    $("degrees_entered").focus();
};

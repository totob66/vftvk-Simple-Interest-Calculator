// Code by Torfinn Tobiassen
// Function to compute interest
function compute()
{
    var principal = document.getElementById("principal").value;
	if (parseInt(principal) < 1) {      //Validate input
		alert("Enter a positive number");
 		document.getElementById("principal").focus();
		return;
	}
    var rate = document.getElementById("rate").value;       // Get rate value
 	var years = document.getElementById("years").value;     // Get no. years
	var interest = principal * years * rate /100;           // Get no. years
	var year = new Date().getFullYear()+parseInt(years);    // Calculate year
	document.getElementById("result").innerHTML =           // Update result <span> tag
		"If you deposit <mark>" + principal + "</mark>,<br>" +
		" at an interest rate of <mark>" + rate + "</mark>.<br>" +
        " You will receive an amount of <mark>" + interest + "</mark><br>" +
        " in the year <mark>" + year +"</mark>.<br>";
}

// Function to update rate value when changed
function updateRate() 
{
    var rateval = document.getElementById("rate").value;    // Get value from slider move
    document.getElementById("rate_val").innerText=rateval;  // Update rate_val <span> tag
}
        
        
        
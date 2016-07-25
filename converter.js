// 68 degrees fah is 20 cel
// (68°F - 32) × 5/9 = 20 °C

// 20 degrees celsius is 68 fah
// 20°C × 9/5 + 32 = 68 °F


function toCelsius (t) {
    t = (t - 32) * 5/9;
    degreeStyling(t, "°C");
    return t + "°C";
}

function toFahrenheit (t) {
    t = (t * 9/5) + 32;
    degreeStyling(t, "°F");
    return t + "°F";
}
// Task 7 - 9
function degreeStyling(t, degree) {
    if (t > 32 && degree === "°F" || t > 90 && degree === "°C")
        document.getElementById("answer").style.color = "red";
    else if (t < 0 && degree === "°F" || t < 32 && degree === "°C")
        document.getElementById("answer").style.color = "blue";
    else
        document.getElementById("answer").style.color = "green";
}

// Task 6
// If the user hits enter
document.getElementById("temperature").onkeypress = function(e){
    if (!e) e = window.event;
    var keyCode = e.keyCode || e.which;
    if (keyCode == '13'){
      // Enter pressed
      determineConverter();
    }
  }

// Task 5
// Clears the input field when clicked
document.getElementById("clearForm").addEventListener("click", function() {
document.getElementById("temperature").value = "";
document.getElementById("answer").value = "";
});

// Get a reference to the button element in the DOM
var button = document.getElementById("converter");

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter (clickEvent) {
      // console.log("event", clickEvent);

    // Value of the input field
    var temp = document.getElementById("temperature").value;
    temp = parseFloat(temp);


    // Check which radio button is checked
    if(document.getElementById("celsius").checked) {
        document.getElementById("answer").value = toCelsius(temp);
    } else if (document.getElementById("fahrenheit").checked) {
        document.getElementById("answer").value = toFahrenheit(temp);
    } else {
        alert("Please check Fahrenheit or Celsisus");
        return false;
    }

}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);

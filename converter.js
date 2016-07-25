function toCelsius (t) {
    return (t - 32) * 1.8;
}

function toFahrenheit (t) {
    return (t * 1.8) + 32;
}

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
        console.log(toCelsius(temp));
    } else if (document.getElementById("fahrenheit").checked) {
        console.log(toFahrenheit(temp));
    } else {
        alert("Please check Fahrenheit or Celsisus");
    }

}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);




// 68 degrees fah is 20 cel
// (68°F - 32) × 5/9 = 20 °C

// 20 degrees celsius is 68 fah
// 20°C × 9/5 + 32 = 68 °F
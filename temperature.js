var Temperature = {
    toFahrenheit:   function toFahrenheit(celsius){
                    var Fahrenheit = celsius * (9/5) + 32;
                    return Fahrenheit;
    },
    toCelsius:      function toCelsius(fahrenheit){
                    var Celsius = (fahrenheit - 32) * (5/9);
                    return Celsius;
    } 
};

var tempToday = 82;
var tempInCelsius = Math.round(Temperature.toCelsius(tempToday));
console.log(tempInCelsius);

var message = "Today’s temperature is "+ tempToday +" °F, which is " + tempInCelsius +"°C";

console.log(message);
function convert() {
var temperature = document.getElementById("temperature").value;
var fromUnit = document.getElementById("from-unit").value;
var toUnit = document.getElementById("to-unit").value;

var convertedTemperature;

if (fromUnit == "Celsius" && toUnit == "Fahrenheit") {
convertedTemperature = temperature * 9 / 5 + 32;
} else if (fromUnit == "Celsius" && toUnit == "Kelvin") {
convertedTemperature = temperature + 273.15;
} else if (fromUnit == "Fahrenheit" && toUnit == "Celsius") {
convertedTemperature = (temperature - 32) * 5 / 9;
} else if (fromUnit == "Fahrenheit" && toUnit == "Kelvin") {
convertedTemperature = (temperature - 32) * 5 / 9 + 273.15;
} else if (fromUnit == "Kelvin" && toUnit == "Celsius") {
convertedTemperature = temperature - 273.15;
} else if (fromUnit == "Kelvin" && toUnit == "Fahrenheit") {
convertedTemperature = (temperature - 273.15) * 9 / 5 + 32;
}

document.getElementById("result").innerHTML = convertedTemperature;
}

document.getElementById("convert").onclick = convert;

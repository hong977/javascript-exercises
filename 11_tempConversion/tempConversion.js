const convertToCelsius = function(fahrenheit) {
  let celcius = Number(((fahrenheit - 32) * (5/9)).toFixed(1)); 
  return celcius == 0? 0:celcius;
};

const convertToFahrenheit = function(celcius) {
  let fahrenheit = Number(((celcius * (9/5)) + 32).toFixed(1));
  return fahrenheit == 0? 0 : fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

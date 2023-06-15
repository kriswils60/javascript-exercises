const convertToCelsius = function(farenheitTemp) {
  let output;
  output = ((farenheitTemp - 32) * 5/9);
  
  if(output % 1 !== 0) {
    output = parseFloat(output.toFixed(1));
  }
  
  return output;

};

const convertToFahrenheit = function(celsiusTemp) {
  let output;

  output =  ((celsiusTemp * 9/5) + 32);
  
  if(output % 1 !== 0) {
    output = parseFloat(output.toFixed(1));
  }

  return output;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

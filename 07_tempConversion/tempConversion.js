const convertToCelsius = function(inputFah) {
  outputCel = Math.round((5*(inputFah - 32)/9) * 10) / 10;
  return outputCel;
};

const convertToFahrenheit = function(inputCel) {
  outputFah = Math.round((inputCel*(9/5) + 32) * 10) / 10;
  return outputFah;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15; //A0 = 15 dpm
const HALF_LIFE_PERIOD = 5730; //years

module.exports = function dateSample(sampleActivity) {

//function dateSample(sampleActivity) {

  if (+sampleActivity > 0 && +sampleActivity <= 15 && (typeof sampleActivity) === 'string'){
    let k = 0.693 / HALF_LIFE_PERIOD;
    let t = Math.log(15 / sampleActivity) / k;
    return Math.ceil(t);
  }
  return false;
};
//console.log( dateSample(['3']) ); //A = 8.0 dpm

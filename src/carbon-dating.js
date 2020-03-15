const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(str) {
  if (typeof str != 'string') return false;
  if (/[^0-9\.]/.test(str)) return false;
  let sampleActivity = parseFloat(str);  
  if (sampleActivity <= 0 || sampleActivity > MODERN_ACTIVITY) return false; 
  let t = Math.log(MODERN_ACTIVITY / sampleActivity) * HALF_LIFE_PERIOD / 0.693;    
  return Math.ceil(t);
};

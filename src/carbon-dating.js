import { NotImplementedError } from '../extensions/index.js';

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
export default function dateSample(sampleActivity) {
  console.log(sampleActivity);
  if (typeof sampleActivity != 'string' || sampleActivity.replace(/ |\n|\t|\r/g, '').length == 0 || isNaN(sampleActivity)) return false;
  if (+sampleActivity <= 0 || sampleActivity > MODERN_ACTIVITY) return false;
  return Math.abs(Math.floor(Math.log(sampleActivity / MODERN_ACTIVITY) / (0.693 / HALF_LIFE_PERIOD)));
}

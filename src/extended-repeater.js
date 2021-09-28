import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 * 	`options` это **объект** опций, который содержит следующие свойства:
  -	`repeatTimes` устанавливает число повторений `str`
  - `separator` это строка, разделяющая повторения `str`
  - `addition` это дополнительная строка, которая будет добавлена после каждого повторения `str`
  - `additionRepeatTimes` устанавливает число повторений `addition`
  - `additionSeparator` это строка, разделяющая повторения `addition`
 * Например: `repeater('STRING', { repeatTimes: 3, separator: '**', addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })` 
  => `'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'`
 */

export default function repeater(str, options) {
  let answer = '';
  let strL = str !== undefined ? (str !== null ? String(str) : 'null') : '';
  let repeatTimes = options.repeatTimes || 0;
  let separator = options.separator || '+';
  let addition = options.addition !== undefined ? (options.addition !== null ? String(options.addition) : 'null') : '';
  let additionRepeatTimes = options.additionRepeatTimes || 0;
  let additionSeparator = options.additionSeparator || '|';
  if (repeatTimes == 0) return strL + (additionRepeatTimes == 0 ? addition : '');
  for (let i = 0; i < repeatTimes; i++) {
    if (i != 0) answer += separator;
    answer += strL;
    let sep = '';
    for (let t = 0; t < additionRepeatTimes; t++) {
      if (t != 0) sep += additionSeparator;
      sep += addition;
    }
    if (additionRepeatTimes == 0) {
      sep += addition;
    }
    answer += sep;
  }
  return answer;
}

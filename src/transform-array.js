import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("\'arr\' parameter must be an instance of the Array!");
  let answer = [];
  let i = 0;
  while (i < arr.length) {
    switch (arr[i]) {
      case '--discard-next':
        i++;
        if (i + 1 < arr.length && (arr[i + 1] == '--discard-prev' || arr[i + 1] == '--double-prev')) i++;
        break;

      case '--discard-prev': if (answer.length > 0) answer.pop(); break;
      case '--double-next': if (i + 1 < arr.length) answer.push(arr[i + 1]); break;
      case '--double-prev': if (i - 1 >= 0) answer.push(arr[i - 1]); break;
      default: answer.push(arr[i]); break;
    }
    i++;
  }
  return answer;
}

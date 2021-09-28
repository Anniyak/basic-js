import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  calculateDepth(arr) {
    let newarr = [];
    for (let t = 0; t < arr.length; t++) {
      if (Array.isArray(arr[t])) {
        if (arr[t].length == 0) newarr.push(null);
        for (let i = 0; i < arr[t].length; i++) {
          newarr.push(arr[t][i]);
        }
      }
    }
    if (newarr.length == 0) return 1;
    return this.calculateDepth(newarr) + 1;
  }
}

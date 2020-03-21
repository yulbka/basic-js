module.exports = class DepthCalculator {
    calculateDepth(arr) {
      let depth = 0;
        for (let i = 0; i < arr.length; i++) {
          if (Array.isArray(arr[i])) {
            depth = Math.max(this.calculateDepth(arr[i]), depth);
          }
        }
      return depth + 1;     
    }
};
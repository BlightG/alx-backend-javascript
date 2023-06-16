const Utils = {
  calculateNumber: (type, a, b) => {
    const arg1 = Math.round(a);
    const arg2 = Math.round(b);
    if (type === 'SUM') {
      return arg1 + arg2;
    } else if (type === 'SUBTRACT') {
      return arg1 - arg2;
    } else if (type === 'DIVIDE') {
      if (arg2 === 0) {
        return 'Error';
      } else {
        return arg1 / arg2;
      }
    }
  }
}

module.exports = Utils;

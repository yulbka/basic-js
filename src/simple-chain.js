const chainMaker = {
  getLength() {
    return arr.length;
  },
  addLink(value) {
    arr.push(`(${value})`);
  },
  removeLink(position) {
    arr.splice(position, 1);
  },
  reverseChain() {
    arr.reverse;
  },
  finishChain() {
    return arr.join('~~');
  }
};

module.exports = chainMaker;

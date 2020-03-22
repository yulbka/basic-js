const chainMaker = {  
  arr: [],  
  getLength() {
    this.arr.length;
    return this;
  },
  addLink(value) { 
    (value === undefined) ? value = '( )': value = ('( ' + value + ' )');   
    this.arr.push(value); 
    return this;   
  },
  removeLink(position) {
    if (position <= 0 || position > this.arr.length || typeof position != 'number') {
      this.arr = [];
      throw new Error('removing wrong link');
    }
     this.arr.splice(position - 1, 1);
     return this;
     
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    chain = this.arr.join('~~');
    this.arr = [];
    return chain;
    
  }
};

module.exports = chainMaker;

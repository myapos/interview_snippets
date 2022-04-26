// blueprint of Cost object
// it will keep information about the cost value
// and where the replacement took place
class Cost {
  constructor(value, i, j) {
    this.value = value;
    this.i = i;
    this.j = j;
  }
}

export default Cost;

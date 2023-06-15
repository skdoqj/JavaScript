class factory {
  constructor(f, s) {
    this.first = f;
    this.second = s;
  }
  sum() {
    return this.first + this.second;
  }
}

const A = new factory(10, 20);
const B = new factory(20, 20);
console.log("A", A.sum());
console.log("B", B.sum());

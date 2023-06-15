function factory(f, s) {
  (this.first = f), (this.second = s);
}
factory.prototype.sum = function () {
  return this.first + this.second;
};

let A = new factory(10, 20);
let B = new factory(20, 20);
console.log(A.sum(), B.sum());

const A = {
  first: 10,
  second: 20,
  //   sum: function (f, s) {
  //     return f + s;
  //   },
  sum: function () {
    return this.first + this.second;
  },
};
// console.log("sum", A.sum(A.first, A.second));
console.log("sum", A.sum());

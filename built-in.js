const MyMath = {
  PI: Math.PI,
  random: function () {
    return Math.random();
  },
  floor: function (val) {
    return Math.floor(val);
  },
};

console.log(MyMath.PI);
console.log(MyMath.random());
console.log(MyMath.floor(3.9));

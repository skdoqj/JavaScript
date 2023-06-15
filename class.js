class factory {
  constructor(f, s) {
    this.first = f;
    this.second = s;
  }
  sum() {
    return this.first + this.second;
  }
}
//상속
class factoryPlus extends factory {
  constructor(f, s, t) {
    //부모인자 호출
    super(f, s);
    this.third = t;
  }
  sum() {
    //부모 메서드 값 호출
    return super.sum() + this.third;
  }
  avg() {
    return (this.first + this.second + this.third) / 3;
  }
}

const A = new factoryPlus(10, 20, 30);
const B = new factoryPlus(20, 20);
console.log("A", A.sum(), A.avg());
console.log("B", B.sum(), B.avg());

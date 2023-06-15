function factory() {
  (this.first = 10),
    (this.second = 20),
    (this.sum = function () {
      return this.first + this.second;
    });
}

let A = new factory();

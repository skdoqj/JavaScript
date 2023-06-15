let array = ["a", "b", "c"];

// console.group("array loop");
// let i = 0;
// while (i < array.length) {
//   console.log(1, array[i]);
//   i = i + 1;
// }
// console.groupEnd("array loop");

const object = {
  a: "aa",
  b: "bb",
  c: "cc",
};
console.group("object loop");
for (let name in object) {
  console.log(name, object[name]);
}

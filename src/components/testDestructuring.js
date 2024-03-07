// let obj1 = {
//   name: "hai",
//   age: 12,
//   address: "hn",
// };
// const obj2 = Object.assign({}, obj);

// let obj2 = obj1;

// let obj2 = Object.assign({}, obj1);
// let obj2 = JSON.parse(JSON.stringify(obj1));
// obj2["name"] = "Tuan";

// console.log(obj2);
// console.log(obj1);

let a = { key: "000" };
let b = a;
b["key"] = 111;
console.log(a);
console.log(b);

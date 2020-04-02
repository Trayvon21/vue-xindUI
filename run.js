function Person(name, age) {
  this.name = name;
  this.age = age;
}
let person = new Person("tan", 19);
console.dir(person._proto_);
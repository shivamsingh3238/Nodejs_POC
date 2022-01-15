const person = {
  name: "shivam",
  age: 22,
  gender: "M",
  self() {
    console.log("Hi, i am " + this.name);
    //return "Hi, i am " + this.name;
  }
};

console.log(person.self());
console.log(person.name);

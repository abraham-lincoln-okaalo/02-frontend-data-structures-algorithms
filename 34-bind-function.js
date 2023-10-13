function bind(fn, thisValue, ...args) {
  return function (...moreArgs) {
    return fn.apply(thisValue, [...args, ...moreArgs]);
  };
}

const person = {
  firstName: "John",
  lastName: "Doe",
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};

const boundFunction = bind(person.getFullName, person);
console.log(boundFunction());

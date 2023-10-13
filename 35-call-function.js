function call(fn, thisValue, ...args) {
  return fn.apply(thisValue, args);
}

const person = {
  firstName: "John",
  lastName: "Doe",
  getFullName() {
    return `${this.firstName} ${this.lastName} `;
  },
};

const fullName = call(person.getFullName, person);
console.log(fullName);

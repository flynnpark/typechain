class Human {
  public name: string;
  public age: number;
  public gender: string;

  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const flynn = new Human('Flynn', 27, 'male');

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${
    person.gender
  }!`;
};

console.log(sayHi(flynn));

export {};

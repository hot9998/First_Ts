let count: number = 0;
count += 1;
// count = "문자열";

const message: string = "hello world";

const done: boolean = true;

const numbers: number[] = [1, 2, 3];
const messages: string[] = ["hello", "world"];

// messages.push(1);

let mightBeUndefined: string | undefined = undefined; // string or undefined
let nullableNumber: number | null = null; // number or null

// let color: "red" | "orange" | "yellow" = "red";
// color = "yellow";
// color = "green";

function sum(x: number, y: number): number {
  return x + y;
  // return null;
}
sum(1, 2);

interface Shape {
  getArea(): number;
}

class Circle implements Shape {
  constructor(public radius: number) {
    this.radius = radius;
  }

  getArea() {
    return this.radius * this.radius * Math.PI;
  }
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    return this.width * this.height;
  }
}

const circle = new Circle(5);
const rectangle = new Rectangle(10, 5);

console.log(circle.radius);
// console.log(rectangle.width);

const shapes: Shape[] = [new Circle(5), new Rectangle(10, 5)];

shapes.forEach((shape) => {
  console.log(shape.getArea());
});

// interface 작성
// interface Person {
//   name: string;
//   age?: number;
// }

// interface Developer extends Person {
//   skills: string[];
// }

// interface Developer {
//   name: string;
//   age?: number;
//   skills: string[];
// }

// const person: Person = {
//   name: "김사람",
//   age: 20,
// };

// const expert: Developer = {
//   name: "김개발",
//   skills: ["javascript", "react"],
// };

// const people: Person[] = [person, expert];

// type 작성
type Person = {
  name: string;
  age?: number;
};

type Developer = Person & {
  skills: string[];
};

const person: Person = {
  name: "김사람",
};

const expert: Developer = {
  name: "김개발",
  skills: ["javascript", "react"],
};

type People = Person[];
const people: People = [person, expert];

type Color = "red" | "orange" | "yellow";
const color: Color = "red";
const colors: Color[] = ["red", "orange"];

function merge<A, B>(a: A, b: B): A & B {
  return {
    ...a,
    ...b,
  };
}
const merged = merge({ foo: 1 }, { bar: 1 });

function wrap<T>(param: T) {
  return {
    param,
  };
}

const wrapped_number = wrap(10);
const wrapped_string = wrap("a");

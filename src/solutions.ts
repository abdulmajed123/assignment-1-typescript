// Problem No : 1
function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((num) => num % 2 === 0);
}

const result1 = filterEvenNumbers([1, 2, 3, 4, 5, 6]);
console.log(result1);

// Problem No : 2
function reverseString(text: string): string {
  return text.split("").reverse().join("");
}

const text = reverseString("typescript");
console.log(text);

// Problem No : 3

type StringOrNumber = string | number;
function checkType(value: StringOrNumber): string {
  if (typeof value === "string") {
    return "String";
  } else {
    return "Number";
  }
}

const value = checkType(12);
console.log(value);

// Problem No: 4

type User = {
  id: number;
  name: string;
  age: number;
};

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}
const user: User = { id: 1, name: "John Doe", age: 21 };
const result = getProperty(user, "name");
console.log(result);

// Problem No: 5

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

function toggleReadStatus(book: Book): Book & { isRead: boolean } {
  return { ...book, isRead: true };
}

const myBook: Book = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};

const result3 = toggleReadStatus(myBook);
console.log(result3);

// Problem No: 6

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails(): string {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

const student = new Student("Alice", 20, "A");
const output = student.getDetails();
console.log(output);

// Problem No: 7

function getIntersection(arr1: number[], arr2: number[]): number[] {
  return arr1.filter((num) => arr2.includes(num));
}

const result4 = getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);
console.log(result4);

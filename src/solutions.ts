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

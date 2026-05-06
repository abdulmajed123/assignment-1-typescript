// Problem No : 1
function filterEvenNumbers(numbers: number[]): number[] {
  return numbers.filter((num) => num % 2 === 0);
}

const result = filterEvenNumbers([1, 2, 3, 4, 5, 6]);
console.log(result);

// Problem No : 2
function reverseString(text: string): string {
  return text.split("").reverse().join("");
}

const text = reverseString("typescript");
console.log(text);

// Problem No : 3

type StringOrNumber = "string" | "number";
function checkType(value: StringOrNumber): string {
  if (typeof value === "string") {
    return "String";
  } else {
    return "Number";
  }
}

const value = checkType(12);
console.log(value);

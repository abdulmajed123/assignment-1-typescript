# How do Generics allow you to build reusable components and functions that stay strictly typed regardless of the data structures passed in?

## Introduction

TypeScript এ Generics হলো এমন একটি powerful feature যা আমাদের reusable এবং type-safe code লিখতে সাহায্য করে। এটি এমন functions বা components তৈরি করতে দেয় যা বিভিন্ন ধরনের data structure এর সাথে কাজ করতে পারে, কিন্তু type safety একটুও নষ্ট করে না।

---

## Why Generics are needed

Normally আমরা নির্দিষ্ট type (যেমন string বা number) ব্যবহার করি। কিন্তু যদি আমরা চাই এমন একটি function তৈরি করতে যা যেকোনো type এর সাথে কাজ করবে, তখন আমরা `any` ব্যবহার করার কথা ভাবি।

কিন্তু `any` ব্যবহার করলে TypeScript আর type check করতে পারে না, যা bug তৈরি করতে পারে। এই সমস্যা সমাধান করার জন্যই Generics ব্যবহার করা হয়।

---

## Core Concept of Generics

Generics একটি type variable ব্যবহার করে, সাধারণত `<T>` দিয়ে লেখা হয়। এটি একটি placeholder হিসেবে কাজ করে, যা function call করার সময় actual type দিয়ে replace হয়।

```ts
function getIdentity<T>(value: T): T {
  return value;
}

এখানে T যেকোনো type হতে পারে। যখন আমরা function call করি, TypeScript নিজে থেকেই type বুঝে নেয়।

Real Example

নিচে একটি generic function দেওয়া হলো যা যেকোনো array থেকে প্রথম element return করে:

function getFirstItem<T>(arr: T[]): T {
  return arr[0];
}

// number array
const numbers = [100, 200, 300];
const firstNumber = getFirstItem(numbers);

// string array
const fruits = ["Apple", "Banana", "Mango"];
const firstFruit = getFirstItem(fruits);
Benefits of Generics
Strict Typing: input এবং output type safe থাকে
Code Reusability: একই function বিভিন্ন data type এ ব্যবহার করা যায়
No need for any: type safety নষ্ট হয় না
Type Inference: TypeScript নিজে থেকেই type বুঝে নেয়

`Conclusion
Generics হলো TypeScript এর একটি শক্তিশালী feature যা আমাদের code কে আরও flexible, reusable এবং type-safe করে তোলে। এটি ব্যবহার করলে বড় project এ data handling অনেক সহজ এবং safe হয়।
```

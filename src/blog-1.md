## Why is any labeled a "type safety hole," and why is unknown the safer choice for handling unpredictable data? Explain the concept of type narrowing.

ভূমিকা (Introduction)

````TypeScript ব্যবহার করার প্রধান উদ্দেশ্য হলো টাইপ সেফটি নিশ্চিত করা। কিন্তু অনেক সময় আমরা এমন ডেটা নিয়ে কাজ করি যার টাইপ আমরা আগে থেকে জানি না (যেমন: API থেকে আসা ডেটা)। এই অবস্থায় অনেকেই দ্রুত কাজ শেষ করার জন্য any ব্যবহার করেন। কিন্তু এই any ব্যবহার করা কেন বিপজ্জনক এবং তার বদলে কেন unknown ব্যবহার করা উচিত, তা নিয়ে আজকের এই ব্লগ।

## any কে কেন "Type Safety Hole" বলা হয়?

যখন আমরা কোনো ভেরিয়েবলের টাইপ any দিই, তখন আমরা আসলে TypeScript-কে বলছি যে— "তুমি এই ভেরিয়েবলের ওপর কোনো চেকিং করো না।" এটি টাইপ সেফটির মধ্যে একটি গর্ত বা ছিদ্র (Hole) তৈরি করে।

সমস্যাটি দেখুন:

TypeScript
let myData: any = "Hello World";

// ভুলবশত এমন একটি মেথড কল করা যা স্ট্রিং-এ নেই
myData.map((item: any) => console.log(item));
// কোড লেখার সময় কোনো এরর দেখাবে না, কিন্তু রানটাইমে ক্রাশ করবে!
এখানে myData আসলে একটি স্ট্রিং, কিন্তু আমরা তাকে অ্যারের মতো map করতে চেয়েছি। any ব্যবহারের কারণে TypeScript আমাদের আটকায়নি, যার ফলে অ্যাপ্লিকেশনে বাগ (Bug) তৈরি হয়েছে।

`
কেন unknown একটি নিরাপদ পছন্দ?
unknown টাইপটিও any এর মতোই যেকোনো ভ্যালু গ্রহণ করতে পারে, কিন্তু এটি অনেক বেশি সতর্ক। unknown টাইপের ভেরিয়েবল নিয়ে কোনো কাজ করার আগে TypeScript আপনাকে অবশ্যই তার টাইপ চেক করতে বাধ্য করবে।

TypeScript
let userInput: unknown = "TypeScript is awesome";

// সরাসরি ব্যবহার করতে গেলে এরর দিবে
// userInput.toUpperCase(); // Error: 'userInput' is of type 'unknown'.
টাইপ ন্যারোইং (Type Narrowing) কী?
unknown ডেটাকে ব্যবহারযোগ্য করার জন্য আমরা যে প্রক্রিয়াটি ব্যবহার করি, তাকেই বলা হয় Type Narrowing। সহজ কথায়, একটি অনিশ্চিত টাইপকে লজিক দিয়ে নিশ্চিত করাই হলো টাইপ ন্যারোইং।

উদাহরণ:

TypeScript
let someValue: unknown = "I love coding";

if (typeof someValue === "string") {
// এখানে TypeScript নিশ্চিত যে someValue একটি স্ট্রিং
console.log(someValue.toUpperCase()); // এখন এটি সেফ!
}

if (typeof someValue === "number") {
console.log(someValue.toFixed(2));
}
এখানে typeof চেক করার মাধ্যমে আমরা টাইপটিকে "Narrow" বা সংকীর্ণ করে একটি নির্দিষ্ট টাইপে নিয়ে এসেছি।
`
উপসংহার (Conclusion)
কোডিং করার সময় any ব্যবহার করা অনেকটা হেলমেট ছাড়া বাইক চালানোর মতো। সাময়িকভাবে আরামদায়ক মনে হলেও এটি যেকোনো সময় বড় বিপদ বা এরর ডেকে আনতে পারে। তাই প্রোফেশনাল ডেভেলপমেন্টে সবসময় unknown ব্যবহার করা এবং প্রপারলি টাইপ ন্যারোইং করাই বুদ্ধিমানের কাজ।```
````

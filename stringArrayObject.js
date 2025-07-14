// 🔸 Spread Operator - STRING
const name = "Noor";
const nameChars = [...name];
console.log("Spread String:", nameChars); // [ 'N', 'o', 'o', 'r' ]

// 🔸 Spread Operator - ARRAY
const fruits = ["apple", "banana"];
const moreFruits = [...fruits, "mango"];
console.log("Spread Array:", moreFruits); // [ 'apple', 'banana', 'mango' ]

// 🔸 Spread Operator - OBJECT
const student = { name: "Ali", age: 20 };
const updatedStudent = { ...student, grade: "A+" };
console.log("Spread Object:", updatedStudent); // { name: 'Ali', age: 20, grade: 'A+' }
// importer.js

import { studentName, numbers, studentInfo, greet } from './exporter.js';

console.log("Imported Name:", studentName);           // Fatima
console.log("Imported Numbers:", [...numbers, 40]);   // [10, 20, 30, 40]
console.log("Imported Student Info:", { ...studentInfo, grade: "B" });
console.log(greet("Zara")); // Hello, Zara!
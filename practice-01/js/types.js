"use strict";

const result1 = "8" + 2;  // 82
console.log("Результат1: ",result1)
console.log("Тип результата:", typeof result1);

const result2 = "8" - 2; //6
console.log("Результат2: ", result2)
console.log("Тип результата:", typeof result2);

const result3 = Number("8") + 2; //10
console.log("Результат3: ", result3)
console.log("Тип результата:", typeof result3);

const result4 = "12" > "3"; //false
console.log("Результат4: ", result4)
console.log("Тип результата:", typeof result4);

const result5 = 12 === "12"; //false
console.log("Результат5: ", result5)
console.log("Тип результата:", typeof result5);

const result6 = Number(""); // 0
console.log("Результат6: ", result6)
console.log("Тип результата:", typeof result6);

const result7 = Number("text");  //NaN
console.log("Результат7: ", result7)
console.log("Тип результата:", typeof result7);

const result8 = Boolean("false"); //true
console.log("Результат8: ", result8)
console.log("Тип результата:", typeof result8);

const result9 = typeof null;     //object
console.log("Результат9: ", result9)
console.log("Тип результата:", typeof result9);

const result10 = typeof NaN;    //number
console.log("Результат10: ", result10)
console.log("Тип результата:", typeof result10);
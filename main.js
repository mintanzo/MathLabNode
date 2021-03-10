const { MathNode } = require('math');

const arr = [1, 3, -9, 0, 2, 5, 12, -3, 6];
const minNumber = MathNode.min(arr);
console.log(`Минимальное число: ${minNumber}\n`);

const sumResult = MathNode.sum(1, 7);
console.log(`Сумма: ${sumResult}\n`);

const numberAbs = MathNode.abs(-8);
console.log(`Модуль числа: ${numberAbs}`);
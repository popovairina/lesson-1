'use strict';
let num = 33721,
    digits = [],
    sNum = num.toString(),
    mult = 1;
for (let i = 0, len = sNum.length; i < len; i++) {
    digits.push(+sNum.charAt(i));
    mult *= digits[i];
}
let pow = mult;
for (let i = 0; i < 2; i++) {
    pow *= mult;
}
console.log(digits);
console.log('Произведение цифр = ' + mult);
console.log(mult + '^3 = ' + pow);

let sPow = pow.toString();
for (let i = 0; i < 2; i++) {
    let digit = sPow.charAt(i);
    document.write(digit);
}

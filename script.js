// Завдання 1



// let fib = (num) => {
//     let b = 1;
//     let c = 1;
//     let str = "1 1 ";
//     for (let i = 3; i <= num; i++) {
//         let k = b + c;
//         b = c;
//         c = k;
//         str += c + " ";
//     }
//     return 'Result = ' + str;
// }

// let result = fib(5);
// console.log(result);





//  Завдвння 2(1)

// let sn = function (n, g) {
//     let b1 = 1;
//     let res = 0;
//     for (let i = 1; i <= n; i++) {
//         res = res + b1;
//         b1 = b1 * g;
//     }
//     return res;
// };

// console.log(sn(5, 2));

//  Завдвння 2(2)

// let sn = function (n, g) {
//     return res = (1 * (1 - (g ** n))) / (1 - g)
// }

// console.log(sn(5, 2));


// Завлвння 3

let a = +prompt('Ввндіть перше число');
let b = +prompt('Введіть друге число ');

let primeAr = function (first, second) {
    let str = "";
    for (let i = first; i <= second; i++) {
        for (let j = 2; j <= i; j++) {
            if (i % j === 0 && j < i) {
                break;
            } else if (j === i) {
                str += i + ", ";
            }
        }
    }
    return str;
}
console.log(primeAr(a, b));
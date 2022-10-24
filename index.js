//Завдання 1
// //Варіант 1 - перевірка за допомогою цикла
// let emptyObj = {};

// let notEmptyObj = {
//     name: 'John',
//     surname: 'Smith'
// };

// function isEmpty(obj) {
//     for (let key in obj) {
//         return false;
//     }
//     return true;
// }

// alert(`Об'єкт не має властивостей? ${isEmpty(emptyObj)}`); //перевірка об'єкта без властивостей
// alert(`Об'єкт не має властивостей? ${isEmpty(notEmptyObj)}`); //перевірка об'єкта з властивостями

// //Варіант 2 - перевірка за допомогою метода keys
// function isEmpty2(obj) {
//     if (Object.keys(obj).length === 0) return true;
//     return false;
// }

// alert(`Об'єкт не має властивостей? ${isEmpty2(emptyObj)}`); //перевірка об'єкта без властивостей
// alert(`Об'єкт не має властивостей? ${isEmpty2(notEmptyObj)}`); //перевірка об'єкта з властивостями


//Завдання 2
// let obj = {
//     id: 456,
//     name: 'John',
//     surname: 'Smith',
//     age: 23,
//     salary: 213
// }

// function multiplyNumeric(obj) {
//     for (let key in obj) {
//         if (typeof(obj[key]) === 'number') obj[key] *= 2;
//     }

//     console.log('Об\'єкт після виконання функції:');
//     console.log(obj);
// }

// multiplyNumeric(obj);


//Завдання 3
// function readNumber() {
//     let number;
//     do {
//         number = prompt('Уведіть числове значення:');
//     } while (number !== "" && number !== null && isNaN(+number) && typeof(+number) === 'number');
//     if (number === "" || number === null) {
//         alert('Введення скасовано, функція поверне null!');
//         return null;
//     }
//     return alert(`Введене числове значення: ${+number}`);
// }

// readNumber();


//Завдання 4
// function random(min, max) { 
//     return Math.random() * (max - min) + min; //оскільки Math.random() не повертає 1 - max не буде включено в діапазон, отже можливий діапазон значень [min; max)
// }

// alert(random(1, 5));
// alert(random(1, 5));
// alert(random(1, 5));


//Завдання 5
// function randomInteger(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min; //при Math.random() = 0 буде отримано значення min, при 0.5 - (max + min)/2, а при 0.(9) - max
// }

// alert(randomInteger(1, 5));
// alert(randomInteger(1, 5));
// alert(randomInteger(1, 5));


//Завдання 6
// function ucFirst(str) { 
//     return str.charAt(0).toUpperCase() + str.slice(1);
// }

// alert(ucFirst('example'));
// alert(ucFirst('another example'));
// alert(ucFirst('and another example'));


//Завдання 7
// function checkSpam(str) {
//     str = str.toLowerCase();
//     let blockedWords = ['viagra', 'xxx'];
//     for (let blockedWord of blockedWords) {
//         if (str.includes(blockedWord)) return true;
//     }
//     return false;
// }

// alert(checkSpam('buy ViAgRA now') == true);
// alert(checkSpam('free xxxxx') == true);
// alert(checkSpam('innocent rabbit') == false);
// alert(checkSpam('some text') == false);


//Завдання 8
// function truncate(str, maxlength) {
//     if (str.length > maxlength) return str.slice(0, maxlength - 3) + '...';
//     return str;
// }

// alert(truncate('Ось що мені хотілося б сказати на цю тему:', 20) == 'Ось що мені хотіл...');
// alert(truncate('Ось що мені хотілося б сказати на цю тему:', 20).length == 20);
// alert(truncate('Усім привіт!', 20) == 'Усім привіт!');


//Завдання 9
// function extractCurrencyValue(str) {
//     return +str.slice(1);
// }

// alert(extractCurrencyValue('$120') === 120);
// alert(extractCurrencyValue('$120.25') === 120.25);


//Завдання 10
// function sumInput() {
//     let array = [];
//     let input;
//     let sum = 0;
//     do {
//         input = prompt('Уведіть значення:');
//         if (input !== "" && input !== null && !isNaN(+input)) array.push(+input);
//     } while (input !== "" && input !== null && !isNaN(+input));
//     if (array.length !== 0) {
//         alert(`Отриманий масив: ${array}`);
//     } else {
//         alert('Отриманий масив: []');
//     }
//     for (let i = 0; i < array.length; i++) {
//         sum += array[i];
//     }
//     return sum;
// }

// alert(`Сума елементів масива: ${sumInput()}`);


//Завдання 11
// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     } else {
//         return confirm(' Батьки дозволили ?');
//     }
// }

// checkAge(17);

// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     }
//     return confirm(' Батьки дозволили ?');
// }

// checkAge(17); //Різниці в поведінці не буде, оскільки return confirm(' Батьки дозволили ?') 
// //спрацює як при наявності else, так і без нього, якщо не виконається умова в if


//Завдання 12
// //З використанням "?"
// function checkAge(age) {
//     return (age > 18) ? true : confirm(' Батьки дозволили ?');
// }

// checkAge(18);

// //З використанням "||"
// function checkAge(age) {
//     return age > 18 || confirm(' Батьки дозволили ?');
// }

// checkAge(18);


//Завдання 13
// function min(a, b) {
//     return (a > b) ? b : a;
// }

// alert(min(2, 5) == 2);
// alert(min(3, -1) == -1);
// alert(min(1, 1) == 1);
// alert(min(5, 2) == 2);


//Завдання 14
// function pow(x, n) {
//     let result = 1;
//     for (let i = 0; i < n; i++) {
//         result *= x;
//     }
//     return result;
// }

// let x = prompt('Уведіть основу x:');
// let n = prompt('Уведіть степінь n:');

// if (x > 0 && n > 0) {
//     alert(`${x} в степені ${n} дорівнює ${pow(x, n)}`);
// } else {
//     alert('Потрібно задати натуральні числа!');
// }


//Завдання 15
// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
// }

// ask(
//     "Ви згодні?",
//     function () { alert("Ви погодилися."); },
//     function () { alert("Ви скасували виконання."); }
// );

// //Стрілочна функція
// let askArrow = (question, yes, no) => {
//     if (confirm(question)) yes()
//     else no();
// }

// askArrow(
//     "Ви згодні?",
//     function () { alert("Ви погодилися."); },
//     function () { alert("Ви скасували виконання."); }
// );



//Завдання 16
// let price = 8000; //ціна пальми
// let salary = 3333; //щомісячні витрати зарплата
// let spending = 1750; //щомісячні витрати
// let savingsPerMonth = salary - spending; //щомісячні заощадження = зарплата - щомісячні витрати
// let accumulation = 0; //загальні накопичення на початку
// let months = 0; //кылькість місяців, які потрібно робити накопичення

// for (months; accumulation <= price; months++) {
//     accumulation += 3333 - 1750;
// }

// alert(`Робiнзон Крузо назбирає на пальму за ${months} місяців`);


//Завдання 17
// let negativeNumbersSum = 0; //сума негативних чисел за замовчуванням рівна 0

// for (let i = 0; i < 10; i++) {
//     let userNumber = +prompt(`Уведіть число №${i + 1}:`);
//     if (userNumber < 0) negativeNumbersSum += userNumber; //якщо число негативне - додаємо його до суми негативних чисел
// }

// alert(`Сума негативних чисел, введених користувачем: ${negativeNumbersSum}`);
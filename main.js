// 1 переменную можно обьявить через var let contst
// 2 prompt модальное окно с возможностью ввести данные(информацию), а confirm - дает два варианта Ok и Cancel, где первый дает тру, а второй фолс.
// 3 Преобразование типов, это например мы хотим чтоб число 5 стало строчным элементом, для этого делаем "5" - все, наше число теперь строчный элемент.

'use strict'
let name = prompt("name?")
let admin = name
console.log(admin);

let days = prompt("1 - 10?");{
    if (days >= 10 || days <= 1){
        console.log("число не в диапазоне от 1 до 10");
    }
    console.log(`${days*86400} секунд`);
}

let questionAge = +prompt("Сколько вам лет?")
console.log(questionAge);
console.log(`${name} ваших дней в секундах ${days*86400} и ваш возраст ${questionAge}, вот мы спросили и вывели это в консоль`);
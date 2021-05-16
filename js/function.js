// Function Declaration
function sum(a, b) {
    return a + b;
}

// Function Expression
const sum2 = function(a, b) {
    return a + b;
}

// Function Expression Arrow function
const sum3 = (a, b) => {
    return a + b
}


// Основное отличие между ними: функции, объявленные
// как Function Declaration, создаются интерпретатором до выполнения кода.
// Поэтому их можно вызвать до объявления, например:


// sayHi("Вася"); // Привет, Вася
//
// function sayHi(name) {
//     alert( "Привет, " + name );
// }


// sayHi("Вася"); // ошибка!

// const sayHi = function(name) {
//     alert( "Привет, " + name );
// }

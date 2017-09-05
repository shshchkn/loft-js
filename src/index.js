/* ДЗ 1 - Функции */

/*
 Задание 1:

 Функция должна принимать один аргумент и возвращать его
 */
function returnFirstArgument(arg) {
    return arg;
}

/*
 Задание 2:

 Функция должна принимать два аргумента и возвращать сумму переданных значений
 Значение по умолчанию второго аргумента должно быть 100
 */
function defaultParameterValue(a, b) {
    if (b === undefined) {
        b = 100;
    }
    let sum = a + b;
    return sum;
}

/*
 Задание 3:

 Функция должна возвращать все переданные в нее аргументы в виде массива
 Количество переданных аргументов заранее неизвестно
 */
function returnArgumentsArray() {
    let isArray = [];
    for (let i = 0; i < arguments.length; i++) {
        isArray.push(arguments[i]);
    }
    return isArray;
}

/*
 Задание 4:

 Функция должна принимать другую функцию и возвращать результат вызова переданной функции
 */
function returnFnResult(fn) {
    return fn();
}

/*
 Задание 5:

 Функция должна принимать число (значение по умолчанию - 0) и возвращать функцию (F)
 При вызове F, переданное число должно быть увеличено на единицу и возвращено из F
 */
function returnCounter(number) {
    if (number === undefined) {
        number = 0;
    }
    let F = () => {
        number++;
        return number;
    }
    return F;
}

/*
 Задание 6 *:

 Функция должна принимать другую функцию (F) и некоторое количество дополнительных аргументов
 Функция должна привязать переданные аргументы к функции F и вернуть получившуюся функцию
 */
function bindFunction(fn, ...args) {
    fn = fn.bind(null, ...args);
    return fn;

}

/*function bindFunction(fn, ...args) {
    let args = [];
    for (let i = 1; i < arguments.length; i++) {
        args[i] = arguments[i];
    }
    for (let k = 0; k < args.length; k++) {
        fn = fn.bind(this, args[k]);
    }
    return fn;

}*/

/* Этот вариант я сделал уже после pull request
function bindFunction(fn) {
    for (let i = 1; i < arguments.length; i++) {
        fn = fn.bind(this, arguments[i]);
    }
    return fn;
}*/

export {
    returnFirstArgument,
    defaultParameterValue,
    returnArgumentsArray,
    returnFnResult,
    returnCounter,
    bindFunction
}

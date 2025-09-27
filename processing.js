'use strict';

let pickColumnElements = document.querySelectorAll("pickColumn");
let firstBothEls = Set([pickColumnElements[0], pickColumnElements[1]]);

function spawnOptions(setOfSelects, arrayOfColumns, setOfExceptions) {
    const errors = [];

    try {
        if (!(setOfSelects instanceof Set)) {
            errors.push("setOfSelects должен быть объектом Set");}
        if (!(arrayOfColumns instanceof Array)) {
            errors.push("arrayOfColumns должен быть объектом Array");}

        // Даны исключения
        if (setOfExceptions instanceof Set) {

        }
        // Исключений нет: работаем штатно
        if (setOfExceptions === null || setOfExceptions === false || setOfExceptions === undefined) {

        }

        //Логика


        // обработка ошибок
        if (errors.length>0) {
            throw new TypeError(errors.join("; "));}
    } catch (error) {
        console.error("Ошибка валидации: "+error);
    }
}

function spawnPickers(setOfElements) {
    if (setOfElements instanceof Set && (setOfElements.size == 1 || setOfElements == 2)) {
        for (let i = 0; i < setOfElements.size; i++) {

        }
    }
}

spawnPickers(firstBothEls, getFirstStrokeFromCSV(""), false);

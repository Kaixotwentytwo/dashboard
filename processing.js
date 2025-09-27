'use strict';

let pickColumnElements = document.querySelectorAll(".pickColumn");
let firstBothEls = new Set([pickColumnElements[0], pickColumnElements[1]]);
let exceptions = new Set([]);

// Выбираются колонки для выбора на основе исключений
function pickOptions(setOfSelects, arrayOfColumns, setOfExceptions) {
    const errors = [];

    try {
        if (!(setOfSelects instanceof Set)) {
            errors.push("setOfSelects должен быть объектом Set");}
        if (!(arrayOfColumns instanceof Array)) {
            errors.push("arrayOfColumns должен быть объектом Array");}
        if (setOfExceptions.size > 2) {
            errors.push("Превышено количество доступных исключений");}
        if (setOfSelects.size > 2) {
            errors.push("Превышено количество доступных <select>");}

        // обработка ошибок
        if (errors.length>0) {
            throw new TypeError(errors);}

        // Даны исключения
        if (setOfExceptions instanceof Set) {
            setOfSelects.forEach(select=>{

                while (select.children.length > 1) {
                    select.removeChild(select.lastChild);}

                let optionsList = new Set(
                    Array.from(arrayOfColumns).filter(item => !setOfExceptions.has(item)));

                optionsList.forEach(function(item){
                    let createOption = document.createElement("option");
                    createOption.setAttribute("value", item);
                    createOption.textContent = item;

                    select.appendChild(createOption);
                });
            });
        }
        // Исключений нет: работаем штатно
        if (setOfExceptions.size == 0 || setOfExceptions === null || setOfExceptions === false || setOfExceptions === undefined) {
            setOfSelects.forEach(select=>{

                while (select.children.length > 1) {
                    select.removeChild(select.lastChild);}

                for (let j = 0; j < arrayOfColumns.length; j++) {
                    let createOption = document.createElement("option");
                    createOption.setAttribute("value", arrayOfColumns[j]);
                    createOption.textContent = arrayOfColumns[j];

                    select.appendChild(createOption);
                }
            });
        }
    } catch (error) {
        errors.forEach(function(error){
            console.error("Ошибка валидации: "+error);
        });
    }
}



function changeValues(SelectElement1, SelectElement2, selectedElements) {
    let selectsSet = new Set([SelectElement1, SelectElement2]);

    //pickOptions()
}




window.onload = function(){
    try {
        if (pickColumnElements.length % 2 != 0) {
            for (let k = 0; k < pickColumnElements.length; k+=2) {
                //pickColumnElements[k].addEventListener("change", "");
                //pickColumnElements[k+1].addEventListener("change", "");
            }
        } else {
            throw new TypeError(`Количество <select class="pickColumn"> : ${pickColumnElements.length}`);
        }
    } catch(error) {
        console.error("Ошибка: "+error);
    }
};

pickOptions(firstBothEls, getFirstStrokeFromCSV(""), exceptions);

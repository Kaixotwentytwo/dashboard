'use strict';

//variables

let select = document.querySelectorAll("select");
let buttonsPanel = document.querySelectorAll(".buttonsPanel");
let amountOfColumns = getFirstStrokeFromCSV("").length;
let isExceptionHere = false;
let exceptColumn;

//function createSelectElements(amountOfColumns) {
//	let count = amountOfColumns;
//
//	for (let i = 0; i < amountOfColumns; i++) {
//		let
//		CreateSelect = document.createElement("select"),
//		CreatePickdiv = document.createElement("div"),
//		CreateSpan = document.createElement("span"),
//		CreateCustomSelect = document.createElement("div"),
//		CreateOption = document.createElement("option");
//
//		CreatePickdiv.classList.add('pickTableBlock');
//		CreateSpan.classList.add("white hfontA pp");
//		CreateCustomSelect.classList.add("customSelect flex pp hfontB");
//		CreateSelect.setAttribute("id", `SelectColumnNumber_${i}`);
//
//		buttonsPanel[0].appendChild("CreatePickdiv");
//
//		//let pickDivEL = document.querySelectorAll("");
//	}
//}
//
//function managePicker(columns, exceptColumnvar, selectElement, selectedValue) {
//	// Сохраняем первый элемент (Выберите вариант)
//	const firstOption = selectElement.querySelector('option[value="-1"]');
//
//	// Удаляем все элементы кроме первого
//	while (selectElement.children.length > 1) {
//		selectElement.removeChild(selectElement.lastChild);
//	}
//
//	if (exceptColumnvar !== false || exceptColumnvar !== null || exceptColumnvar !== undefined) {
//		isExceptionHere = true;
//	}
//
//	// Проходим по всем колонкам
//	for (let i = 0; i < columns.length; i++) {
//		let val = columns[i];
//
//		// Если есть исключение и текущее значение равно исключению - пропускаем
//		if (isExceptionHere && val == exceptColumnvar) {
//			continue;
//		}
//
//		// Создаем option элемент
//		let createOption = document.createElement("option");
//		createOption.setAttribute("value", val);
//		createOption.textContent = val;
//
//		// Добавляем в select после первого элемента
//		selectElement.appendChild(createOption);
//	}
//
//	if (selectedValue !== null || selectedValue !== undefined || selectedValue !== false) {
//		selectElement.value = selectedValue;
//	}
//}

// "Добавить пресеты в начальный блок"
select[0].children[1].text = presets[0].shortname;
select[0].children[2].text = presets[1].shortname;
// select[1].children[1].text =



document.querySelectorAll('select').forEach(select => {
  select.addEventListener('mousedown', (e) => {
    e.stopPropagation(); // Предотвращаем всплытие
  });

  select.addEventListener('mouseup', (e) => {
    e.stopPropagation(); // Предотвращаем всплытие
  });

  select.addEventListener('click', (e) => {
    e.stopPropagation(); // Предотвращаем всплытие
  });
});


//window.onload = function(){
//
//	select = document.querySelectorAll("select");
//
//	managePicker(getFirstStrokeFromCSV(""), false, select[1]);
//	managePicker(getFirstStrokeFromCSV(""), false, select[2]);
//
//	select[1].addEventListener('change', function()
//	{
//		let sel = this.value;
//
//		if (sel === "-1") {
//			managePicker(getFirstStrokeFromCSV(""), false, this, sel);
//			managePicker(getFirstStrokeFromCSV(""), false, select[2], sel);
//			return;
//		}
//		managePicker(getFirstStrokeFromCSV(""), sel, this, sel);
//		managePicker(getFirstStrokeFromCSV(""), sel, select[2], sel);
//	});
//
//	select[2].addEventListener('change', function()
//	{
//	    let sel = this.value;
//
//		if (sel === "-1") {
//			managePicker(getFirstStrokeFromCSV(""), false, this, sel);
//			managePicker(getFirstStrokeFromCSV(""), false, select[1], sel);
//			return;
//		}
//		managePicker(getFirstStrokeFromCSV(""), sel, this, sel);
//		managePicker(getFirstStrokeFromCSV(""), sel, select[1], sel);
//	});
//}

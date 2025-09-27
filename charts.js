'use strict';

let presets = [
    {
        keycodename: "hpi_master",
        url: "tables/hpi_master.csv",
        strokes: 131521,
        name: "Аналитика изменения цен на недвижимость (США)",
        shortname: "Цены на недвижимость"
    }, 
    {
        keycodename: "temperature_test",
        url: "tables/temp.csv",
        strokes: 721,
        name: "Изменение температуры за каждый час в течении января",
        shortname: "График температуры"
    }
];

let listOfAllColumns = [];
let currentCollumn = [];

function getFirstStrokeFromCSV(csvText) {
	return FirstStrokeTEST;
}

let FirstStrokeTEST = ["time", "date", "temperature"];
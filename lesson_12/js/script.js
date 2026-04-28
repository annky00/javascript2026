"use strict";
function getRandomArray(quantity, min, max) {
    let numbers = Array.from({ length: quantity }, () => min + Math.floor(Math.random() * (max - min + 1)));
    return numbers;
}
// ? Задача 1. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування бульбашкою
document.write("<h1>Task 1</h1>");
let firstArray = getRandomArray(30, 1, 50);
document.write(`<h3>Your array: ${firstArray.join(", ")}</h3>`);
function bobbleSort(array) {
    let changed;
    let counter = 0;
    do {
        changed = false;
        for (let i = 1; i < array.length; i++) {
            if (array[i - 1] > array[i]) {
                let a = array[i - 1];
                array[i - 1] = array[i];
                array[i] = a;
                changed = true;
                counter++;
            }
        }
    } while (changed);
    return [array, counter];
}
let sortedFirstArray = bobbleSort(firstArray);
document.write(`<h3>Your sorted array: ${sortedFirstArray.join("<br> Changed:")}</h3>`);
// ? Задача 2. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування змішуванням.
document.write("<h1>Task 2</h1>");
let secondArray = getRandomArray(30, 1, 50);
document.write(`<h3>Your array: ${secondArray.join(", ")}</h3>`);
function cocktailSort(array) {
    let counter = 0;
    let leftIndex = 0;
    let rightIndex = array.length - 1;
    while (leftIndex < rightIndex) {
        for (let i = leftIndex; i < rightIndex; i++) {
            if (array[i] > array[i + 1]) {
                let a = array[i + 1];
                array[i + 1] = array[i];
                array[i] = a;
                counter++;
            }
        }
        rightIndex--;
        for (let i = rightIndex; i > leftIndex; i--) {
            if (array[i] < array[i - 1]) {
                let a = array[i - 1];
                array[i - 1] = array[i];
                array[i] = a;
                counter++;
            }
        }
        leftIndex++;
    }
    return [array, counter];
}
let sortedSecondArray = cocktailSort(secondArray);
document.write(`<h3>Your sorted array: ${sortedSecondArray.join("<br> Changed:")}</h3>`);
// ? Задача 3. Дано масив 30 випадкових цілих чисел. Підрахувати скільки було обмінів під час сортування включеннями.
document.write("<h1>Task 3</h1>");
let thirdArray = getRandomArray(30, 1, 50);
document.write(`<h3>Your array: ${thirdArray.join(", ")}</h3>`);
function insertionSort(array) {
    let counter = 0;
    let key;
    let i;
    for (let k = 1; k < array.length; k++) {
        key = array[k];
        i = k - 1;
        while (i >= 0 && array[i] > key) {
            array[i + 1] = array[i];
            i = i - 1;
            counter++;
        }
        array[i + 1] = key;
    }
    return [array, counter];
}
let sortedThirdArray = insertionSort(thirdArray);
document.write(`<h3>Your sorted array: ${sortedThirdArray.join("<br> Changed:")}</h3>`);
// ? Задача 4. Для розглянутих методів сортування спробувати вивести етапи сортування шляхом виведення відповідних таблиць за зразком.
// ? Тобто кожного разу після обміну елементів вивести поточний стан масиву на екран.
document.write("<h1>Task 4</h1>");
let fourthArray = getRandomArray(5, 1, 10);
document.write(`<h3>Your array: ${fourthArray.join(", ")}</h3>`);
document.write("<h2>Bobble Sort:</h2>");
let bobbleSortArray = [...fourthArray];
let changed;
do {
    changed = false;
    for (let i = 1; i < bobbleSortArray.length; i++) {
        if (bobbleSortArray[i - 1] > bobbleSortArray[i]) {
            let a = bobbleSortArray[i - 1];
            bobbleSortArray[i - 1] = bobbleSortArray[i];
            bobbleSortArray[i] = a;
            changed = true;
            document.write(`<h3>${bobbleSortArray.join(", ")}</h3>`);
        }
    }
} while (changed);
document.write("<h2>Cocktail Sort:</h2>");
let cocktailSortArray = [...fourthArray];
let leftIndex = 0;
let rightIndex = cocktailSortArray.length - 1;
while (leftIndex < rightIndex) {
    for (let i = leftIndex; i < rightIndex; i++) {
        if (cocktailSortArray[i] > cocktailSortArray[i + 1]) {
            let a = cocktailSortArray[i + 1];
            cocktailSortArray[i + 1] = cocktailSortArray[i];
            cocktailSortArray[i] = a;
            document.write(`<h3>${cocktailSortArray.join(", ")}</h3>`);
        }
    }
    rightIndex--;
    for (let i = rightIndex; i > leftIndex; i--) {
        if (cocktailSortArray[i] < cocktailSortArray[i - 1]) {
            let a = cocktailSortArray[i - 1];
            cocktailSortArray[i - 1] = cocktailSortArray[i];
            cocktailSortArray[i] = a;
            document.write(`<h3>${cocktailSortArray.join(", ")}</h3>`);
        }
    }
    leftIndex++;
}
document.write("<h2>Insertion Sort:</h2>");
let insertionSortArray = [...fourthArray];
let key;
let i;
for (let k = 1; k < insertionSortArray.length; k++) {
    key = insertionSortArray[k];
    i = k - 1;
    while (i >= 0 && insertionSortArray[i] > key) {
        insertionSortArray[i + 1] = insertionSortArray[i];
        i = i - 1;
        document.write(`<h3>${insertionSortArray.join(", ")}</h3>`);
    }
    insertionSortArray[i + 1] = key;
}
// * ======================================================================
let names = ["Alexander", "Mary", "John", "Sophia", "James", "Anna", "Michael", "Olga", "Andrew", "Julia"];
// ? Задача 5. Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я «Olga» і під яким індексом.
document.write("<h1>Task 5</h1>");
document.write(`<h3>Your array: ${names.join(", ")}</h3>`);
function alphabetInsertionSort(array) {
    let key;
    let i;
    for (let k = 1; k < array.length; k++) {
        key = array[k];
        i = k - 1;
        while (i >= 0 && array[i] > key) {
            array[i + 1] = array[i];
            i = i - 1;
        }
        array[i + 1] = key;
    }
    return array;
}
let sortedFifthArray = alphabetInsertionSort([...names]);
document.write(`<h3>Sorted array: ${sortedFifthArray.join(", ")}</h3>`);
function includesNameBinarySearch(array, searchElement) {
    let index;
    let start = 0;
    let end = array.length - 1;
    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        if (array[middle] === searchElement) {
            index = middle;
            return index;
        }
        if (array[middle] < searchElement)
            start = middle + 1;
        if (array[middle] > searchElement)
            end = middle - 1;
    }
    return -1;
}
let foundNameIndex = includesNameBinarySearch(sortedFifthArray, "Olga");
if (foundNameIndex !== -1)
    document.write(`<h3>Ім'я "Olga" під індексом ${foundNameIndex}</h3>`);
else
    document.write("<h3>Такого імені немає у масиві</h3>");
// ? Задача 6. Дано масив імен. Застосовуючи відповідне сортування та бінарний пошук визначити, чи є у масиві ім’я довжиною 5 символів і під яким індексом.
document.write("<h1>Task 6</h1>");
document.write(`<h3>Your array: ${names.join(", ")}</h3>`);
function lengthInsertionSort(array) {
    let key;
    let i;
    for (let k = 1; k < array.length; k++) {
        key = array[k];
        i = k - 1;
        while (i >= 0 && array[i].length > key.length) {
            array[i + 1] = array[i];
            i = i - 1;
        }
        array[i + 1] = key;
    }
    return array;
}
let sortedSixthArray = lengthInsertionSort([...names]);
document.write(`<h3>Sorted array: ${sortedSixthArray.join(", ")}</h3>`);
function includesLengthBinarySearch(array, searchElementLength) {
    let index;
    let start = 0;
    let end = array.length - 1;
    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        if (array[middle].length === searchElementLength) {
            index = middle;
            return index;
        }
        if (array[middle].length < searchElementLength)
            start = middle + 1;
        if (array[middle].length > searchElementLength)
            end = middle - 1;
    }
    return -1;
}
let foundLengthIndex = includesLengthBinarySearch(sortedFifthArray, 5);
if (foundLengthIndex !== -1)
    document.write(`<h3>Ім'я довжиною більше 5 символів під індексом ${foundLengthIndex}</h3>`);
else
    document.write("<h3>Такого імені немає у масиві</h3>");
// ? Задача 7. Сформувати двовимірний масив (4*8) з номерами днів (описати окремий тип для днів). Заповнити його випадковим чином. Підрахувати для кожного рядка кількість неділь.
document.write("<h1>Task 7</h1>");
function getRandomRow(colCount, min, max) {
    let array = Array.from({ length: colCount }, () => min + Math.floor(Math.random() * (max - min + 1)));
    return array;
}
function getRandomMatrix(rowCount, colCount, min, max) {
    let array = Array.from({ length: rowCount }, () => getRandomRow(colCount, min, max));
    return array;
}
const daysMatrix = getRandomMatrix(4, 8, 1, 7);
document.write(`<h2>Your array:<br> ${daysMatrix.join("<br>")}</h2>`);
for (let row = 0; row < daysMatrix.length; row++) {
    let sundayQty = daysMatrix[row].reduce((prevVal, curVal) => curVal === 7 ? prevVal += 1 : prevVal, 0);
    document.write(`<h3>В рядку №${row + 1} неділь: ${sundayQty}<br></h3>`);
}
//# sourceMappingURL=script.js.map
"use strict"

// ! Задача. Дано історію цін на цінні папери за деякий період (згенерувати від 1 до 10000)

function makePricesArray(number) {
    let prices = []
    for (let i = 0; i < number; i++) {
        prices.push(Math.floor(Math.random() * 10000) + 1)
    }
    return prices
}

let quantity = parseInt(prompt("Enter the quantity of prices", "8"))

const allPrices = makePricesArray(quantity)


document.write(`Your history of prices: ${allPrices.join(", ")}<br><br>`)


//  ? 1)Сформувати новий масив, у якому є тільки ті, що більші за 1000 грн.


let pricesHigherThanThous = allPrices.filter((price) => price > 1000)

document.write(`1) Prices that higher than thousand: ${pricesHigherThanThous.join(', ')}<br><br>`)



//  ? 2)Сформувати новий масив, у якому є номери тільки тих, що більші за 1000 грн.

let numberHigherThanThous = allPrices.map((price, index, baseArrRef) => price > 1000 ? index + 1 : -1).filter(index => index !== -1)

document.write(`2) Index of prices that higher than thousand: ${numberHigherThanThous.join(', ')}<br><br>`)

//  ? 3)Сформувати список з тих цін, які більші за попереднє значення

let pricesHigherThanPrev = allPrices.filter((price, index, baseArrRef) => price > baseArrRef[index - 1])

document.write(`3) Prices that higher than previous price: ${pricesHigherThanPrev.join(', ')}<br><br>`)

//  ? 4)Сформувати новий масив, що міститиме значення цін у відсотках стосовно максимального


let maxPrice = allPrices.reduce((prev, current) => Math.max(prev, current))
let pricesInPercent = allPrices.map(price => price / maxPrice * 100)

document.write(`4) Prices in percent regarding max price : ${pricesInPercent.join(', ')}<br><br>`)

//  ? 5)Підрахувати кількість змін цін

let changingOfPrices = allPrices.reduce((counter, current, index, baseArrRef) => index > 0 && current !== baseArrRef[index - 1] ? ++counter : counter, 0)


document.write(`5) Prices changed: ${changingOfPrices} times<br><br>`)

//  ? 6)Визначити, чи є ціна, що менше 1000

let isPriceLowerThanThous = allPrices.some(price => price < 1000) ? "There is" : "There isn't"

document.write(`6) Is there price lower than thousand? ${isPriceLowerThanThous}<br><br>`)

//  ? 7)Визначати, чи усі ціни більше за 1000

let isAllPricesHigherThanThous = allPrices.every(price => price > 1000) ? "There are" : "There aren't"

document.write(`7) Are there all prices higher than thousand? ${isAllPricesHigherThanThous}<br><br>`)

//  ? 8)Підрахувати кількість цін, що більше за 1000

let quantityPricesHigherThanThous = allPrices.reduce((counter, current, index, baseArrRef) => baseArrRef[index] > 1000 ? ++counter : counter, 0)

document.write(`8) Quantity of prices that higher than thousand: ${quantityPricesHigherThanThous}<br><br>`)
//  ? 9)Підрахувати суму цін, що більше за 1000

let sumPricesHigherThanThous = allPrices.reduce((sum, current, index, baseArrRef) => baseArrRef[index] > 1000 ? sum + baseArrRef[index] : current, 0)

document.write(`9) Sum of prices that higher than thousand: ${sumPricesHigherThanThous}<br><br>`)

//  ? 10)Знайти першу ціну, що більше за 1000

let findFirstHigher = allPrices.find(price => price > 1000)

document.write(`10) The first price that higher than thousand is ${findFirstHigher}<br><br>`)

//  ? 11)Знайти індекс першої ціни, що більше за 1000

let findIndexOfFirstHigher = allPrices.findIndex(price => price > 1000)

document.write(`11) Index of the first price that higher than thousand is ${findIndexOfFirstHigher}<br><br>`)

//  ? 12)Знайти останню ціну, що більше за 1000

let findLastHigher = allPrices.findLast(price => price > 1000)

document.write(`12) The last price that higher than thousand is ${findLastHigher}<br><br>`)

//  ? 13)Знайти індекс останньої ціни, що більше за 1000

let findIndexOfLastHigher = allPrices.findLastIndex(price => price > 1000)

document.write(`13) Index of the last price that higher than thousand is ${findIndexOfLastHigher}<br><br>`)
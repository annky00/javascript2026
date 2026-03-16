"use strict"

// ?  Задача 0

// ! S1
// let a = parseFloat(prompt("Введіть значення a"))
// let b = parseFloat(prompt("Введіть значення b"))

// let sum1
// sum1 = a + 12 + b
// alert(`Сума 1 = ${sum1}`)


// ! S2
// let a = parseFloat(prompt("Введіть значення a"))
// let b = parseFloat(prompt("Введіть значення b"))

// let sum2
// sum2 = Math.sqrt((a + b) / (2 * a))
// alert(`Сума 2 = ${sum2}`)


// ! S3
// let a = parseFloat(prompt("Введіть значення a"))
// let b = parseFloat(prompt("Введіть значення b"))
// let c = parseFloat(prompt("Введіть значення c"))

// let sum3
// sum3 = Math.cbrt((a + b) * c)
// alert(`Сума 3 = ${sum3}`)


// ! S4
// let a = parseFloat(prompt("Введіть значення a"))
// let b = parseFloat(prompt("Введіть значення b"))

// let sum4
// sum4 = Math.sin(a / -b)
// alert(`Сума 4 = ${sum4}`)

// ? Задача 1. Знайти суму, добуток та частку двох дійсних чисел. Результат вивести у формі таблиці.

// let a = parseFloat(prompt("Введіть перше число"))
// let b = parseFloat(prompt("Введіть друге число"))

// let sum = a + b
// let product = a * b
// let quotient = a / b

// document.write(`<pre> Сума:\t\t${sum}\nДобуток:\t${product}\nЧастка:\t\t${quotient}</pre>`)


// ? Задача 2. Дано рік народження(дата: 1 січня)  та поточний рік. Знайти кількість років.

// let bornYear = parseFloat(prompt("Введіть свій рік народження"))
// let currentYear = 2026

// let age = currentYear - bornYear
// document.write(`Вам ${age}`)

// ? Задача 3. Дано вартість одиниці товару і кількість. Знайти загальну вартість та ПДВ (5% від загальної вартості).
// let price = parseFloat(prompt("Введіть ціну одиниці"))
// let qty = parseFloat(prompt("Введіть кількість товару"))

// let sum = price * qty
// let pdv = sum * 0.05

// document.write(`<pre>Загальна вартість = ${sum}\nПДВ становить: ${pdv}</pre>`)


// ? Задача 4. Дано довжину у сантиметрах. Визначати скільки це метрів і кілометрів.
// let sm = parseFloat(prompt("Введіть довжину у сантиметрах"))
// let metres = sm / 100
// let km = sm / 100000

// document.write(`${sm}см - це ${metres}м та ${km}км.`)


// ? Задача 5. Дано кількість секунд, що пройшла від початку доби. Визначити скільки це годин і хвилин.
// let sec = parseFloat(prompt("Введіть кількість секунд, що пройшла від початку доби"))
// let hrs = sec / 3600
// let min = sec / 60

// document.write(`Від початку доби пройшло ${hrs}год. або ${min}хв.`)


// ? Задача 6. З клавіатури вводяться вартість товару та кількість одиниць 3 товарів. Обчислити варітсть кожного товару окремо та загальну вартість. Вивести чек (як у супермаркеті) використовуючи елементи розмітки.

// let goods1 = parseFloat(prompt("Введіть кількість першого товару"))
// let price1 = parseFloat(prompt("Введіть ціну першого товару"))

// let goods2 = parseFloat(prompt("Введіть кількість другого товару"))
// let price2 = parseFloat(prompt("Введіть ціну другого товару"))

// let goods3 = parseFloat(prompt("Введіть кількість третього товару"))
// let price3 = parseFloat(prompt("Введіть ціну третього товару"))

// let sum1 = goods1 * price1
// let sum2 = goods2 * price2
// let sum3 = goods3 * price3
// let totalPrice = sum1 + sum2 + sum3

// document.write(`
//     <ul>
//         <li>Продукт перший, кількість: ${goods1}; ціна: ${sum1}</li>
//         <li>Продукт другий, кількість: ${goods2}; ціна: ${sum2}</li>
//         <li>Продукт третій, кількість: ${goods3}; ціна: ${sum3}</li>
//     </ul>
//     <h3>Сума:${totalPrice}</h3>
//     `)


// ? Задача 7 Знайти суму випадкового номера місяця (від 1 до 12) та випадкового номера дня (від 0 до 6).

// let month = Math.floor(Math.random() * 12) + 1
// let day = Math.floor(Math.random() * 7)

// let sum = month + day
// document.write(`Сума: ${sum}`)
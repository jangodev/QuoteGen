const display = document.getElementById("quotes")
const generate = document.getElementById("quogen")
const add = document.getElementById("add")
const quotes = [
    '"Live Love laugh" - Me',
    '"Always be happy" - Me',
    '"An Apple a Day keeps the Doctor away" - Me'
]

function random() {

    display.innerHTML = quotes[Math.floor(Math.random() * quotes.length)]
}

function addquote() {
    const ask = prompt("Enter in your quote")
    quotes.push('"' + ask + '"' + ' - You')
}
var date = new Date(),
    day = date.getDate(),
    month = date.getMonth() + 1,
    year = date.getFullYear();

document.getElementById("time").innerHTML = (day + '.' + month + '.' + year);

let btn = document.getElementById('btn');

// тарифы
// let coldWater = document.getElementById('coldWater').value,
//     hotWater = 108,
//     outgoing = 14.24,
//     electro = 2.6;
    // coldWater = 18.56

// показатели расхода
// let coldExpense = document.getElementById('coldExp').value;

// результаты расчета
// let coldRes = document.getElementById('coldRes').value;

function cold() {
    let coldWater = document.getElementById('coldWater').value,
        coldExpense = document.getElementById('coldExp').value;

    let cold = document.getElementById('coldRes').value = (coldWater * coldExpense).toFixed(2);
}

function hot() {
    let hotWater = document.getElementById('hotWater').value,
        hotExpense = document.getElementById('hotExp').value;

    document.getElementById('hotRes').value = (hotWater * hotExpense).toFixed(2);
}

function outgoing() {
    let outgoing = document.getElementById('outgoing').value,
        outgoingExpense = document.getElementById('outgoingExp').value;

    document.getElementById('outgoingRes').value = (outgoing * outgoingExpense).toFixed(2);
}

function electro() {
    let electroWater = document.getElementById('electro').value,
        electroExpense = document.getElementById('electroExp').value;

    document.getElementById('electroRes').value = (electroWater * electroExpense).toFixed(2);
}

function total() {
    let coldWater = document.getElementById('coldWater').value,
        coldExpense = document.getElementById('coldExp').value;
    let hotWater = document.getElementById('hotWater').value,
        hotExpense = document.getElementById('hotExp').value;
    let outgoing = document.getElementById('coldWater').value,
        outgoingExpense = document.getElementById('coldExp').value;
    let electroWater = document.getElementById('electro').value,
        electroExpense = document.getElementById('electroExp').value;
        

    document.getElementById('totalRes').value = 
        (coldWater * coldExpense + 
        hotWater * hotExpense + 
        outgoing * outgoingExpense + 
        electroWater * electroExpense).toFixed(2);
}

function calc() {
    btn.addEventListener('click', () => {
        cold();
        hot();
        outgoing();
        electro();
        total();
    });
}
calc();


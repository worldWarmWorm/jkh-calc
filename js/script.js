
// let date = new Date();

// document.getElementById("time").innerHTML = (date.getFullYear() + ":" + date.getMonth() + ":" + date.getDate());


var date = new Date(),
    day=date.getDate(),
    month=date.getMonth() + 1,
    year=date.getFullYear();


document.getElementById("time").innerHTML = (day + '.' + month + '.' + year);
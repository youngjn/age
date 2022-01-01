// var seconds = 0;
// var el = document.getElementById('seconds-counter');

// function incrementSeconds() {
//     seconds += 1;
//     el.innerText = "You have been here for " + seconds + " seconds.";
// }

// var cancel = setInterval(incrementSeconds, 1000);

var now = new Date();


var dateNow = document.getElementById('practice');

// function renewDate() {
//     now = new Date();
//     dateNow.innerText = now;
// }


// setInterval(renewDate, 1000);

var born;

var diff;

var dateValue = document.querySelector('.date');
var date = now.getFullYear()+'-'+(now.getMonth()+1)+'-'+now.getDate();
dateValue.value = date;



function secondDate() {
    console.log(dateValue.value);
    born = new Date(dateValue.value);
    now  = new Date();
    diff = Math.abs(now - born) / (1000);

    dateNow.innerText = parseInt(diff) + ' seconds old';
    dateNow.style.visibility = "visible";

    setInterval(secondDate, 1000);
}

function minuteDate() {

    console.log(dateValue.value);
    born = new Date(dateValue.value);
    now  = new Date();
    diff = Math.abs(now - born) / (1000 * 60);

    dateNow.innerText = parseInt(diff) + ' minutes old';
    dateNow.style.visibility = "visible";

    setInterval(minuteDate, 1000);
}

function hourDate() {

    console.log(dateValue.value);
    born = new Date(dateValue.value);
    now  = new Date();
    diff = Math.abs(now - born) / (1000 * 60 * 60);

    dateNow.innerText = parseInt(diff) + ' hours old';
    dateNow.style.visibility = "visible";

    setInterval(hourDate, 1000);
}

function dayDate() {

    console.log(dateValue.value);
    born = new Date(dateValue.value);
    now  = new Date();
    diff = Math.abs(now - born) / (1000 * 60 * 60 * 24);

    dateNow.innerText = parseInt(diff) + ' days old';
    dateNow.style.visibility = "visible";

    setInterval(dayDate, 1000);
}



// function renewTime() {
//     now  = new Date();
//     diff = Math.abs(now - born) / (1000 * 60 * 60);

//     dateNow.innerText = parseInt(diff);
// }

// setInterval(renewTime, 1000);
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

var interval;

var dateValue = document.querySelector('.date');
var date = now.getFullYear()+'-'+now.getMonth()+1+'-'+now.getDate().toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping:true});
dateValue.value = date;

console.log(dateValue.value);
console.log(parseInt(dateValue.value));

var num = dateValue.value.match(/\d+/g);

console.log(num[1]);

var gune = new Date(num[0], num[1]-1, num[2]);
console.log(gune);



function secondDate() {
    console.log(dateValue.value);

    num = dateValue.value.match(/\d+/g);
    
    born = new Date(num[0], num[1]-1, num[2]);
    

    interval = setInterval(function() {
        now  = new Date();
        diff = Math.abs(now - born) / (1000);

        dateNow.innerText = parseInt(diff) + ' seconds old';
        dateNow.style.visibility = "visible";
    }, 1000);
}

function second() {
    clearInterval(interval);
    secondDate();
}

function minuteDate() {
    console.log(dateValue.value);
    num = dateValue.value.match(/\d+/g);
    
    born = new Date(num[0], num[1]-1, num[2]);
    

    interval = setInterval(function() {
        now  = new Date();
        diff = Math.abs(now - born) / (1000 * 60);

        dateNow.innerText = parseInt(diff) + ' minutes old';
        dateNow.style.visibility = "visible";
    }, 1000);
}

function minute() {
    clearInterval(interval);
    minuteDate();
}

function hourDate() {
    console.log(dateValue.value);
    num = dateValue.value.match(/\d+/g);
    
    born = new Date(num[0], num[1]-1, num[2]);
    

    interval = setInterval(function() {
        now  = new Date();
        diff = Math.abs(now - born) / (1000 * 60 * 60);
        console.log(now);
        console.log(born);

        dateNow.innerText = parseInt(diff) + ' hours old';
        dateNow.style.visibility = "visible";
    }, 1000);
}

function hour() {
    clearInterval(interval);
    hourDate();
}

function dayDate() {
    console.log(dateValue.value);
    num = dateValue.value.match(/\d+/g);
    
    born = new Date(num[0], num[1]-1, num[2]);
    

    interval = setInterval(function() {
        now  = new Date();
        diff = Math.abs(now - born) / (1000 * 60 * 60 * 24);

        dateNow.innerText = parseInt(diff) + ' days old';
        dateNow.style.visibility = "visible";
    }, 1000);
}

function day() {
    clearInterval(interval);
    dayDate();
}



// function renewTime() {
//     now  = new Date();
//     diff = Math.abs(now - born) / (1000 * 60 * 60);

//     dateNow.innerText = parseInt(diff);
// }

// setInterval(renewTime, 1000);
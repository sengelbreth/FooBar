let dataArray;
let time = new Date();
let h = time.getHours();
let m = time.getMinutes();
let s = time.getSeconds();
let hToSec = h * 3600;
let mToSec = m * 60;
let closingHour = 22 * 3600;
let currentHour = hToSec + mToSec;
let timeLeft = closingHour - currentHour;
let counter = 0;
let randomNumber;
document.querySelector("DOMContentLoaded", init());

function init() {
  console.log("we´re live");

  fetchData();
  openingStatus();
  bestSeller();
}

function fetchData() {
  let fooData = FooBar.getData();
  dataArray = JSON.parse(fooData);

  // console.log(dataArray);

  setTimeout(fetchData, 3000);
} // check

function openingStatus() {
  checkOpening();
}

// check
function checkOpening() {
  // console.log(closingTime);
  var start = new Date();
  start.setHours(22, 00, 0); // 11pm

  function pad(num) {
    return ("0" + parseInt(num)).substr(-2);
  }

  function tick() {
    var now = new Date();
    if (now > start) {
      // too late, go to tomorrow
      start.setDate(start.getDate() + 1);
    }
    let remain = (start - now) / 1000;
    let hh = pad((remain / 60 / 60) % 60);
    let mm = pad((remain / 60) % 60);
    let ss = pad(remain % 60);
    document.querySelector(".time").innerHTML = hh + ":" + mm + ":" + ss;
    setTimeout(tick, 1000);

    if (hh > 11) {
      document.querySelector(".time").innerHTML = "Closed";
    }
  }

  tick();
}
// check

function bestSeller() {
  checkBestSeller();
  console.log(randomNumber);

  console.log(dataArray.storage[randomNumber].name);

  document.querySelector(".bestseller").textContent =
    dataArray.storage[randomNumber].name;

  setTimeout(bestSeller, 5000);
}

function checkBestSeller() {
  randomNumber = Math.floor(Math.random() * 9) + 0;
}
function beerStatus() {}
function checkBeerStatus() {}
function colorAnimation() {}
function queueStatus() {}
function checkQueueStatus() {}
function servingStatus() {}
function checkServingStatus() {}
function beerAnimation() {}

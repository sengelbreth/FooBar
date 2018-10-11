let dataArray;
let counter = 0;
let randomNumber;
let beers;
let taps;
let myTaps = [];
let tapsCounter = 0;
let queue;
let serving;
let temp = document.querySelector("#beers");
let display = document.querySelector(".beers");

document.querySelector("DOMContentLoaded", init());

function init() {
  fetchData();
  openingStatus();
  dailyOffer();
  beerStatus();
  queueStatus();
  servingStatus();
  test();
}

function fetchData() {
  let fooData = FooBar.getData();
  dataArray = JSON.parse(fooData);

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
    document.querySelector(".time").innerHTML =
      "Closing in " + hh + ":" + mm + ":" + ss;
    setTimeout(tick, 1000);

    if (hh > 11) {
      document.querySelector(".time").innerHTML = "Closed";
    }
  }

  tick();
}
// check

function dailyOffer() {
  checkDailyOffer();

  document.querySelector(".dailyOffer").textContent =
    dataArray.storage[randomNumber].name;

  setTimeout(dailyOffer, 180000);
}
// check
function checkDailyOffer() {
  randomNumber = Math.floor(Math.random() * 9) + 0;
}
// check

function beerStatus() {
  beers = dataArray.beertypes;

  beers.forEach(checkBeerStatus);
}
function checkBeerStatus() {
  let beer = beers[counter];
  let clone = temp.cloneNode(true).content;

  clone.querySelector("span:nth-child(1)").innerHTML = beer.name;
  clone.querySelector("span:nth-child(2)").innerHTML = beer.category;
  clone.querySelector(
    "span:nth-child(3)"
  ).innerHTML = `<img src=images/${counter}.png>`;
  clone.querySelector("span:nth-child(4)").innerHTML = "00,-";
  display.appendChild(clone);

  counter++;
}

function queueStatus() {
  checkQueueStatus();

  document.querySelector(".queue").textContent = "People in queue " + queue;
}

// check
function checkQueueStatus() {
  queue = dataArray.queue.length;

  setTimeout(queueStatus, 2000);
}
// check

function servingStatus() {
  serving = dataArray.serving.length;

  // ---------- serverer 1 person ------------------- //
  if (serving == 1) {
    document.querySelector(
      ".beer1"
    ).innerHTML = `<img src="dashbord/fuldol1-01.svg">`;

    document.querySelector(
      ".beer2"
    ).innerHTML = `<img src="dashbord/tomol2-01.svg">`;
    document.querySelector(
      ".beer3"
    ).innerHTML = `<img src="dashbord/tomol3-01.svg">`;
  }

  // --------------- serverer 2 personer --------------- //
  else if (serving == 2) {
    document.querySelector(
      ".beer1"
    ).innerHTML = `<img src="dashbord/fuldol1-01.svg">`;

    document.querySelector(
      ".beer2"
    ).innerHTML = `<img src="dashbord/fuldol2-01.svg">`;

    document.querySelector(
      ".beer3"
    ).innerHTML = `<img src="dashbord/tomol3-01.svg">`;
  }

  // ---------------- servere 3 personer -------------- //
  else if (serving == 3) {
    document.querySelector(
      ".beer1"
    ).innerHTML = `<img src="dashbord/fuldol1-01.svg">`;

    document.querySelector(
      ".beer2"
    ).innerHTML = `<img src="dashbord/fuldol2-01.svg">`;

    document.querySelector(
      ".beer3"
    ).innerHTML = `<img src="dashbord/fuldol3-01.svg">`;
  }

  // ------------------- servere ikke nogen personer ------------ //
  else {
    document.querySelector(
      ".beer1"
    ).innerHTML = `<img src="dashbord/tomol1-01.svg">`;

    document.querySelector(
      ".beer2"
    ).innerHTML = `<img src="dashbord/tomol2-01.svg">`;

    document.querySelector(
      ".beer3"
    ).innerHTML = `<img src="dashbord/tomol3-01.svg">`;
  }

  setTimeout(servingStatus, 2000);
}
// check

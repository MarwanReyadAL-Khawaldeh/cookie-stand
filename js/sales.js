'use strict';
let hour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];
let myObject = [];
//The constructor
let SalmonCookies = function (name, Min, Max, Avg) {
  this.name = name;
  this.Min = Min;
  this.Max = Max;
  this.Avg = Avg;
  this.avgCookies = [];
  this.Total = 0;
  myObject.push(this);
};
// helper function
SalmonCookies.prototype.getCookies = function () {

  for (let i = 0; i < hour.length; i++) {
    let rund = Math.floor(Math.random() * (this.Max - this.Min + 1) * this.Avg);
    this.avgCookies.push(rund);
    this.Total += rund;

  }
};
// calling the header function
let parentElement = document.getElementById('sales');
let tabelElement = document.createElement('tabel');
SalmonCookies.prototype.showHeader = function () {

  parentElement.appendChild(tabelElement);
  const tr1Element = document.createElement('tr');
  tabelElement.appendChild(tr1Element);
  const thElement = document.createElement('th');
  tr1Element.appendChild(thElement);
  thElement.textContent = 'City/Hours';
  for (let i = 0; i < hour.length; i++) {
    const thElement = document.createElement('th');
    tr1Element.appendChild(thElement);
    thElement.textContent = hour[i];
  }
  const th2Element = document.createElement('th');
  tr1Element.appendChild(th2Element);
  th2Element.textContent = 'Total';
};
// Footer function
SalmonCookies.prototype.footer = function () {

  let sumTotal = 0;
  parentElement.appendChild(tabelElement);
  let tr1Element = document.createElement('tr');
  tabelElement.appendChild(tr1Element);
  let thElement = document.createElement('th');
  tr1Element.appendChild(thElement);
  thElement.textContent = 'Total Of Total';
  for (let i = 0; i < hour.length; i++) {
    let sum = 0;
    for (let j = 0; j < myObject.length; j++) {
      sum += myObject[j].avgCookies[i];
    }

    let thElement = document.createElement('th');
    tr1Element.appendChild(thElement);
    thElement.textContent = sum;
  }
  for (let j = 0; j < myObject.length; j++) {
    sumTotal += myObject[j].Total;
  }
  thElement = document.createElement('th');
  tr1Element.appendChild(thElement);
  thElement.textContent = sumTotal;
};

// render Function
SalmonCookies.prototype.render = function () {

  parentElement.appendChild(tabelElement);
  const tr2Element = document.createElement('tr');
  tabelElement.appendChild(tr2Element);
  const tdElement = document.createElement('td');
  tr2Element.appendChild(tdElement);
  tdElement.textContent = this.name;

  for (let i = 0; i < hour.length; i++) {
    const tdElement = document.createElement('td');
    tr2Element.appendChild(tdElement);
    tdElement.textContent = this.avgCookies[i];
  }
  const td11Element = document.createElement('td');
  tr2Element.appendChild(td11Element);
  td11Element.textContent = this.Total;
};
// Adding new values to the Tabel
const formElement = document.getElementById('AddNewCity');
formElement.addEventListener('submit',function(event){
  event.preventDefault();
  console.log(event);
  const Location= event.target.Location.value;
  const Min=event.target.Min.value;
  const Max=event.target.Max.value;
  const Avg = event.target.Avg.value;
  const city = new SalmonCookies(Location,Min,Max,Avg);
  document.querySelector( 'tr:last-child' ).remove();
  city.getCookies();
  city.render();
  city.footer();
});


const Seattle = new SalmonCookies('Seattel', 23, 65, 6.3);
const Tokyo = new SalmonCookies('Tokyo', 3, 24, 1.2);
const Dubai = new SalmonCookies('Dubai', 11, 38, 3.7);
const Paris = new SalmonCookies('Paris', 20, 38, 2.3);
const Lima = new SalmonCookies('Lima', 2, 16, 4.6);

Seattle.showHeader();
Seattle.getCookies();
Seattle.render();
Tokyo.getCookies();
Tokyo.render();
Dubai.getCookies();
Dubai.render();
Paris.getCookies();
Paris.render();
Lima.getCookies();
Lima.render();
Lima.footer();








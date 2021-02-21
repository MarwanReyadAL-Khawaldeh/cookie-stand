'use strict';
console.log('hi');
const Seattle = {
  name: 'Seattle',
  hour: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  Min: 23,
  Max: 65,
  Avg: 6.3,
  arr: [],
  num: [],
  avgCookies: 0,
  getAvg: function (avg) {
    this.avgCookies = this.Avg * Math.floor(getRandom(this.Min, this.Max));

  },
  render: function () {
    const parentElement = document.getElementById('sales');
    const h1Element = document.createElement('h1');
    parentElement.appendChild(h1Element);
    h1Element.textContent = this.name;
    const ulElement = document.createElement('ul');
    parentElement.appendChild(ulElement);
    for (let i = 0; i < this.hour.length; i++) {
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = (`${this.hour[i]}   : ${this.avgCookies} Cookies`);
    }
    for (let i = 0; i < this.hour; i++) {
      this.arr.push(Math.floor (this.avgCookies));
    }
    const liElement = document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent = (`Totel  ${this.arr} Cookies`);
  

  }
};

const Tokyo = {
  name: 'Tokyo',
  hour: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  Min: 3,
  Max: 24,
  Avg: 1.2,
  avgCookies: 0,
  getAvg: function (avg) {
    this.avgCookies = this.Avg * Math.floor(getRandom(this.Min, this.Max));
  },
  render: function () {
    const parentElement = document.getElementById('sales');
    const h1Element = document.createElement('h1');
    parentElement.appendChild(h1Element);
    h1Element.textContent = this.name;
    const ulElement = document.createElement('ul');
    parentElement.appendChild(ulElement);
    for (let i = 0; i < this.hour.length; i++) {
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = (`${this.hour[i]}   : ${this.avgCookies} Cookies`);
    }
  }
};


const Dubai = {
  name: 'Dubai',
  hour: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  Min: 11,
  Max: 38,
  Avg: 3.7,
  avgCookies: 0,
  getAvg: function (avg) {
    this.avgCookies = this.Avg * Math.floor(getRandom(this.Min, this.Max));
  },
  render: function () {
    const parentElement = document.getElementById('sales');
    const h1Element = document.createElement('h1');
    parentElement.appendChild(h1Element);
    h1Element.textContent = this.name;
    const ulElement = document.createElement('ul');
    parentElement.appendChild(ulElement);
    for (let i = 0; i < this.hour.length; i++) {
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = (`${this.hour[i]}   :   ${this.avgCookies} Cookies`);
    }
  }
};

const Paris = {
  name: 'Paris',
  hour: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  Min: 20,
  Max: 38,
  Avg: 2.3,
  avgCookies: 0,
  getAvg: function (avg) {
    this.avgCookies = this.Avg * Math.floor(getRandom(this.Min, this.Max));
  },

  render: function () {
    const parentElement = document.getElementById('sales');
    const h1Element = document.createElement('h1');
    parentElement.appendChild(h1Element);
    h1Element.textContent = this.name;
    const ulElement = document.createElement('ul');
    parentElement.appendChild(ulElement);
    for (let i = 0; i < this.hour.length; i++) {
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = (`${this.hour[i]}   :   ${this.avgCookies} Cookies`);
    }
  }
};

const Lima = {
  name: 'Lima',
  hour: ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'],
  Min: 2,
  Max: 16,
  Avg: 4.6,
  avgCookies: 0,
  getAvg: function (avg) {
    this.avgCookies = this.Avg * Math.floor(getRandom(this.Min, this.Max));
  },
  render: function () {
    const parentElement = document.getElementById('sales');
    const h1Element = document.createElement('h1');
    parentElement.appendChild(h1Element);
    h1Element.textContent = this.name;
    const ulElement = document.createElement('ul');
    parentElement.appendChild(ulElement);
    for (let i = 0; i < this.hour.length; i++) {
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      liElement.textContent = (`${this.hour[i]}   :   ${this.avgCookies} Cookies`);
    }
  }
};



function getRandom(min, max) {

  return (Math.floor(Math.random() * (max - min + 1) + min));
}
function getavg(avg) {

  return (Math.floor(avg * getRandom()));
}

Seattle.getAvg();
Seattle.render();
Tokyo.getAvg();
Tokyo.render();
Dubai.getAvg();
Dubai.render();
Paris.getAvg();
Paris.render();
Lima.getAvg();
Lima.render();







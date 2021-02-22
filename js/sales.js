'use strict';
let hour = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
console.log('hi');
const Seattle = {
  name: 'Seattle',

  Min: 23,
  Max: 65,
  Avg: 6.3,
  arr: [],
  Total: 0,
  avgCookies: 0,
  getAvg: function () {
    this.avgCookies = this.Avg * Math.floor(getRandom(this.Min, this.Max));

  },
  render: function () {
    const parentElement = document.getElementById('sales');
    const h1Element = document.createElement('h1');
    parentElement.appendChild(h1Element);
    h1Element.textContent = this.name;
    const ulElement = document.createElement('ul');
    parentElement.appendChild(ulElement);
    for (let i = 0; i < hour.length; i++) {
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      this.avgCookies = (Math.ceil(getRandom(this.Min, this.Max) * this.Avg));
      this.arr.push(this.avgCookies);
      this.Total += this.arr[i];

      liElement.textContent = (`${hour[i]}   : ${this.avgCookies} Cookies`);
    }
    console.log(this.arr);
    const liElement = document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent = (`Total  ${this.Total}  Cookies`);


  }
};

const Tokyo = {
  name: 'Tokyo',
  Min: 3,
  Max: 24,
  Avg: 1.2,
  arr: [],
  Total: 0,

  avgCookies: 0,
  getAvg: function () {
    this.avgCookies = this.Avg * Math.floor(getRandom(this.Min, this.Max));
  },
  render: function () {
    const parentElement = document.getElementById('sales');
    const h1Element = document.createElement('h1');
    parentElement.appendChild(h1Element);
    h1Element.textContent = this.name;
    const ulElement = document.createElement('ul');
    parentElement.appendChild(ulElement);
    for (let i = 0; i < hour.length; i++) {
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      this.avgCookies = (Math.ceil(getRandom(this.Min, this.Max) * this.Avg));
      this.arr.push(this.avgCookies);
      this.Total += this.arr[i];

      liElement.textContent = (`${hour[i]}   : ${this.avgCookies} Cookies`);
    }
    console.log(this.arr);
    const liElement = document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent = (`Total  ${this.Total}  Cookies`);


  }
};


const Dubai = {
  name: 'Dubai',
  Min: 11,
  Max: 38,
  Avg: 3.7,
  arr: [],
  Total: 0,

  avgCookies: 0,
  getAvg: function () {
    this.avgCookies = this.Avg * Math.floor(getRandom(this.Min, this.Max));
  },
  render: function () {
    const parentElement = document.getElementById('sales');
    const h1Element = document.createElement('h1');
    parentElement.appendChild(h1Element);
    h1Element.textContent = this.name;
    const ulElement = document.createElement('ul');
    parentElement.appendChild(ulElement);
    for (let i = 0; i < hour.length; i++) {
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      this.avgCookies = (Math.ceil(getRandom(this.Min, this.Max) * this.Avg));
      this.arr.push(this.avgCookies);
      this.Total += this.arr[i];

      liElement.textContent = (`${hour[i]}   : ${this.avgCookies} Cookies`);
    }
    console.log(this.arr);
    const liElement = document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent = (`Total  ${this.Total}  Cookies`);


  }
};

const Paris = {
  name: 'Paris',
  Min: 20,
  Max: 38,
  Avg: 2.3,
  arr: [],
  Total: 0,
  avgCookies: 0,
  getAvg: function () {
    this.avgCookies = this.Avg * Math.floor(getRandom(this.Min, this.Max));
  },

  render: function () {
    const parentElement = document.getElementById('sales');
    const h1Element = document.createElement('h1');
    parentElement.appendChild(h1Element);
    h1Element.textContent = this.name;
    const ulElement = document.createElement('ul');
    parentElement.appendChild(ulElement);
    for (let i = 0; i < hour.length; i++) {
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      this.avgCookies = (Math.ceil(getRandom(this.Min, this.Max) * this.Avg));
      this.arr.push(this.avgCookies);
      this.Total += this.arr[i];
      liElement.textContent = (`${hour[i]}   : ${this.avgCookies} Cookies`);
    }
    console.log(this.arr);
    const liElement = document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent = (`Total  ${this.Total}  Cookies`);


  }
};

const Lima = {
  name: 'Lima',
  Min: 2,
  Max: 16,
  Avg: 4.6,
  avgCookies: 0,
  Total: 0,
  arr: [],
  getAvg: function () {
    this.avgCookies = this.Avg * Math.floor(getRandom(this.Min, this.Max));
  },
  render: function () {
    const parentElement = document.getElementById('sales');
    const h1Element = document.createElement('h1');
    parentElement.appendChild(h1Element);
    h1Element.textContent = this.name;
    const ulElement = document.createElement('ul');
    parentElement.appendChild(ulElement);
    for (let i = 0; i < hour.length; i++) {
      const liElement = document.createElement('li');
      ulElement.appendChild(liElement);
      this.avgCookies = (Math.ceil(getRandom(this.Min, this.Max) * this.Avg));
      this.arr.push(this.avgCookies);
      this.Total += this.arr[i];

      liElement.textContent = (`${hour[i]}   : ${this.avgCookies} Cookies`);
    }
    console.log(this.arr);
    const liElement = document.createElement('li');
    ulElement.appendChild(liElement);
    liElement.textContent = (`Total  ${this.Total}  Cookies`);


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







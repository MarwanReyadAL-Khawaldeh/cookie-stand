'use strict';

const pat = {
  name: 'Welcome to Pat Salmon Cookies',
  img: ' ../img/salmon.PNG',
  render: function () {
    const parentElement = document.getElementById('Pat Salmon Cookies');


    const h1Element = document.createElement('h1');
    parentElement.appendChild(h1Element);
    h1Element.textContent = this.name;





  }


};

pat.render();



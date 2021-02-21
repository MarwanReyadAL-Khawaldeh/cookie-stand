'use strict';



// Create Element
// append element to parent element
// set text content to the element

const pat = {
  name: 'Welcome to Pat Calmon Cookies',
  img: ' ../img/salmon.PNG',
  render: function () {
    const parentElement = document.getElementById('Pat Salmon Cookies');


    const h1Element = document.createElement('h1');
    parentElement.appendChild(h1Element);
    h1Element.textContent =this.name;

    const imgElement = document.createElement('img');
    parentElement.appendChild(imgElement);
    imgElement.setAttribute('src', this.img);

    

  }


};

pat.render();



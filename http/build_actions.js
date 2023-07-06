const fs = require('fs');
const path = require('path');

const data = [
    {
      "id": 1,
      "nombre": "Venecia",
      "precio": 6500,
      "img": "img1.jpg"
    },
    {
      "id": 2,
      "nombre": "Roma",
      "precio": 7900,
      "img": "img2.jpg"
    },
    {
      "id": 3,
      "nombre": "Berlin",
      "precio": 5800,
      "img": "img3.jpg"
    },
    {
      "id": 4,
      "nombre": "Amsterdam",
      "precio": 6570,
      "img": "img4.jpg"
    },
    {
      "id": 5,
      "nombre": "Milan",
      "precio": 6800,
      "img": "img5.jpg"
    },
    {
      "id": 6,
      "nombre": "Montevideo",
      "precio": 5500,
      "img": "img6.jpg"
    },
    {
      "id": 7,
      "nombre": "Budapest",
      "precio": 8500,
      "img": "img7.jpg"
    },
    {
      "id": 8,
      "nombre": "Londres",
      "precio": 9500,
      "img": "img8.jpg"
    },
    {
      "id": 9,
      "nombre": "Singapur",
      "precio": 6900,
      "img": "img9.jpg"
    },
    {
      "id": 10,
      "nombre": "Miami",
      "precio": 8700,
      "img": "img10.jpg"
    },
    {
      "id": 11,
      "nombre": "California",
      "precio": 11200,
      "img": "img11.jpg"
    },
    {
      "id": 12,
      "nombre": "Lisboa",
      "precio": 10200,
      "img": "img12.jpg"
    },
    {
      "id": 13,
      "nombre": "Washington",
      "precio": 9700,
      "img": "img13.jpg"
    },
    {
      "id": 14,
      "nombre": "Munich",
      "precio": 8500,
      "img": "img14.jpg"
    },
    {
      "id": 15,
      "nombre": "Buenos Aires",
      "precio": 5700,
      "img": "img15.jpg"
    }
];

module.exports = async function () {
    const getZapatos = async function () {
        return data;
    };

    return {
        '/api/get_zapatos': getZapatos
    };
}

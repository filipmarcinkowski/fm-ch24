'use strict';

const adviceNum = document.querySelector('.id');
const advice = document.querySelector('.advice');
const btn = document.querySelector('.btn');

const URL = 'https://api.adviceslip.com/advice';

const showAdvice = function () {
  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      advice.textContent = data.slip.advice;
      adviceNum.textContent = data.slip.id;
    })
    .catch((err) => console.error(err));
};

btn.addEventListener('click', showAdvice);

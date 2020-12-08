const body = document.body;
const btn = document.querySelectorAll('button');
let bul = false;
const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

btn[0].addEventListener('click', onChangeColor);

function onChangeColor() {
  changeDisabled();
  btn[0].removeEventListener('click', onChangeColor);
  window.colorBody = setInterval(colorOfBody, 1000);
  btn[1].addEventListener('click', offChangeColor);
}

function colorOfBody() {
  body.style.backgroundColor =
    colors[randomIntegerFromInterval(0, colors.length)];
}
function offChangeColor() {
  clearInterval(window.colorBody);
  changeDisabled();
  btn[0].addEventListener('click', onChangeColor);
  btn[1].removeEventListener('click', offChangeColor);
}

function changeDisabled() {
  btn[1].disabled = bul;
  btn[0].disabled = !bul;
  bul = !bul;
}

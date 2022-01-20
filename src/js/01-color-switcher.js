// Для генерации случайного цвета используй функцию getRandomHexColor.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
// после нажатия кнопки «Start», раз в секунду меняет цвет фона <body> на случайное значение используя инлайн стиль.

const btnStart = document.querySelector('button[data-start]');
console.log('~ file: 01-color-switcher.js ~ line 2 ~ btnStart', btnStart);

// При нажатии на кнопку «Stop», изменение цвета фона должно останавливаться.
const btnStop = document.querySelector('button[data-stop]');
timerId = null;
btnStart.addEventListener('click', handlerColor);

function handlerColor(event) {
  timerId = setInterval(() => {
    document.body.style.backgroundColor = getRandomHexColor();
  }, 1000);
  btnStart.disabled = true;
}

btnStop.addEventListener('click', handlerStop);

function handlerStop(event) {
  if (timerId) {
    clearInterval(timerId);
    btnStart.disabled = false;
  }
}

let colour = '#';
let hex = '123456789ABCDEF';
let interval;

const changecolor = function () {
  colour = '#';
  for (let i = 0; i < 6; i++) {
    let val = Math.floor(Math.random() * 16);
    colour += hex[val];
  }
  console.log(colour);
  document.body.style.backgroundColor = colour;
  document.querySelector("h1").style.color = "white";
}

document.querySelector('#start').addEventListener('click', () => {
  if (!interval)
    interval = setInterval(changecolor, 1000);
})

document.querySelector('#stop').addEventListener('click', () => {
  clearInterval(interval)
  interval = null;
})
const descreaseBtn = document.getElementById('decreaseBtn');
const resetBtn = document.getElementById('resetBtn');
const increaseBtn = document.getElementById('increaseBtn');
const counterLabel = document.getElementById('counterLabel');


let counter = 0;

increaseBtn.onclick = () => {
  counter++;
  counterLabel.textContent = counter;
}

descreaseBtn.onclick = () => {
  counter--;
  counterLabel.textContent= counter;
}

resetBtn.onclick = () => {
  counter = 0;
  counterLabel.textContent = counter;
}
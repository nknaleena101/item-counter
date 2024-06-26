const counterAdd = document.getElementById('counterAdd');
const counterSub = document.getElementById('counterSub');
const counterDisplay = document.getElementById('counterDisplay');

let total = 0;
const limit = 20;

function updateCounterDisplay(){
  if(total > limit){
    total = limit;
  };

  if(total < 0){
    total = 0;
  }
  if(total===0){
    counterSub.disabled = true;
  }
  if(total===limit){
    counterAdd.disabled = true;
  }

  counterDisplay.textContent = total;
  document.body.style.setProperty
  ('background-color', `rgb(${(total / limit)* 255}, 64, 0 )`)
}


counterAdd.addEventListener('click', () => {
  total += 1;

  counterSub.disabled = false;
  
  updateCounterDisplay();
});

counterSub.addEventListener('click', () => {
  total -= 1;
  
  counterAdd.disabled = false;

  updateCounterDisplay();
});

updateCounterDisplay();

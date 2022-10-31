// try catch валидация input
const loadBtn = document.querySelector(".js-load");
const resultsContainer = document.querySelector(".js-results");
const searchInput = document.querySelector(".js-input");


 
loadBtn.addEventListener('click', function(e){

  e.preventDefault();
  const value = searchInput.value;
  try {
    if ((!+value)) {
      throw new Error('Введенное не является числом!')
    }
    else if (value < 5) {
      throw new Error('Введенное число меньше 5!')
    }
    else if (value > 10) {
      throw new Error('Введенное число больше 10!')
    }

  } catch (err) {
    console.log(err);
    resultsContainer.innerHTML = `<div class="results-container-block"> ${err} </div>`
    
  }

}) 
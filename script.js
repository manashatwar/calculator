

document.addEventListener("DOMContentLoaded", function () {
 
  const valueButtons = document.querySelectorAll(".val");
  const equalButton = document.querySelector(".equal");
  const clearButton = document.querySelector(".clear");
  const minimizeButton = document.querySelector(".min");
  const closeButton = document.querySelector(".close");
  const screen = document.querySelector(".screen");
  const outcome = document.querySelector(".outcome");
  const calculator = document.querySelector(".cal");

  
  valueButtons.forEach(button => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      const value = this.getAttribute("href");
      screen.innerHTML += value; 
      outcome.value += value; 
    });
  });

  
  equalButton.addEventListener("click", function () {
    try {
      
      const result =eval(outcome.value);
      outcome.value = result; 
      screen.innerHTML = result;
    } catch (err) {
      screen.innerHTML = "Error"; t
      outcome.value = "";
    }
  });

  
  clearButton.addEventListener("click", function () {
    outcome.value = "";
    screen.innerHTML = "";
  });

  
 
  closeButton.addEventListener("click", function () {
    calculator.style.display = "none";
  });
});

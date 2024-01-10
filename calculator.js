const inputBox = document.getElementById("inputBox");

document.addEventListener("click", function (event) {
  const buttonValue = event.target.innerText;

  if (event.target.classList.contains("button")) {
    if (buttonValue === "AC") {
      //Clear the inputBox
      inputBox.value = "";
    } else if (buttonValue === "DEL") {
      //remove the last char grom the right side of inputBox
      inputBox.value = inputBox.value.slice(0, -1);
    } else if (buttonValue === "=") {
      //evaluate the expression in the inputBox
      try {
        const result = eval(inputBox.value);
        inputBox.value = result;
      } catch (error) {
        inputBox.value = "Syntax Error";
      }
    } else {
      inputBox.value += buttonValue;
    }
  }
});

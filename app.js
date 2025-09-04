let result = document.getElementById("result");

function appendChar(char) {
  result.value += char;
}

function clearDisplay() {
  result.value = "";
}

function delChar() {
  result.value = result.value.slice(0, -1);
}

function calculate() {
  try {
    result.value = eval(result.value);
  } catch (e) {
    result.value = "Error";
  }
}
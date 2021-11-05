const display = document.querySelector('#display');
const digits = document.querySelector('#digits');

let str1 = null;
let str2 = null;
let opstr = null; 

function add(num1, num2) {
  return num1 + num2;
}

function sub(num1, num2) {
  return num1 - num2;
}

function mul(num1, num2) {
  return num1 * num2;
}

function div(num1, num2) {
  return num1 / num2;
}

function operate(op, num1, num2) {
  switch (op) {
    case '+': return add(num1, num2); break;
    case '-': return sub(num1, num2); break;
    case '*': return mul(num1, num2); break;
    case '/': return div(num1, num2); break;
  }
}

function updateDisplay() {
  display.textContent = 'bing bong';
} 

function clearDisplay() {
  display.textContent = '';
}

function clearAll() {
  str1 = null;
  str2 = null;
  opstr  = null;
  clearDisplay();
}

digits.addEventListener('click', function(event) {
  display.textContent += event.target.value;
});

operators.addEventListener('click', function(event) {
  str1 = display.textContent;
  clearDisplay();
  opstr = event.target.textContent;
});

equals.addEventListener('click', function(event) {
  str2 = display.textContent;

  const result = operate(opstr, parseInt(str1), parseInt(str2));
  display.textContent = parseInt(result);
});

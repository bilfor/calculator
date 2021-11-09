const display = document.querySelector('#display');
const digits = document.querySelector('#digits');

let inputStr = '';
let totalStr = '';
let opstr = ''; 

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
    case '-': return sub(num2, num1); break;
    case '*': return mul(num1, num2); break;
    case '/': return div(num2, num1); break;

    default: return num1; break; 
  }
}

function myParseInt(str) {
  if ( str == '') {
    return 0;
  } 
  else {
    return parseInt(str);
  } 
}

function clearAll() {
  inputStr = '';
  totalStr = '';
  opstr = '';
  display.textContent = '';
  console.clear();
}

// DIGIT BUTTON PRESS
digits.addEventListener('click', function(event) {
  inputStr += event.target.value;
  display.textContent = inputStr; 
});

// OPERATOR BUTTON PRESS
operators.addEventListener('click', function(event) {
  totalStr = operate(opstr, myParseInt(inputStr), myParseInt(totalStr));
  opstr = event.target.textContent;
  display.textContent = totalStr;
  inputStr = '';
});

// EQUALS BUTTON PRESS
equals.addEventListener('click', function(event) {
  totalStr = operate(opstr, myParseInt(inputStr), myParseInt(totalStr));
  display.textContent = totalStr;
  inputStr = ''; 
});

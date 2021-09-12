'use strict';
const calcDisplay = document.querySelector('.calculation');
const resDisplay = document.querySelector('.result');
const keys = document.querySelector('.keyboard');

let firstVar = '';
let secondVar = '';
let operationSign = '';

function keysHandler(event) {
  let btnClass = event.target.classList;
  let btnType;

  if (btnClass.contains('btn_clear')) {
    btnType = 'Clear';
  }
  if (btnClass.contains('btn_num')) {
    btnType = 'Num';
  }
  if (btnClass.contains('btn_percent')) {
    btnType = 'Persent';
  }
  if (btnClass.contains('btn_operat')) {
    btnType = 'Operat';
  }
  if (btnClass.contains('btn_culc')) {
    btnType = 'Culc';
  }

  switch (btnType) {
    case 'Clear':
      calcDisplay.textContent = 'задаваемая операция';
      resDisplay.textContent = '0.00';
      firstVar = '';
      secondVar = '';
      operationSign = '';
      break;

    case 'Num':
      if (!operationSign) {
        firstVar += event.target.textContent;
        calcDisplay.textContent = firstVar;
        resDisplay.textContent = '';
      } else {
        secondVar += event.target.textContent;
        calcDisplay.textContent = firstVar + operationSign + secondVar;
        resDisplay.textContent = '';
      }
      break;

    case 'Persent':
      if (operationSign && secondVar) {
        secondVar = String(+secondVar / 100);
        calcDisplay.textContent = firstVar + operationSign + secondVar;
        resDisplay.textContent = '';
      } else {
        if (!operationSign && firstVar) {
          firstVar = String(+firstVar / 100);
          calcDisplay.textContent = firstVar;
          resDisplay.textContent = '';
        }
      }
      break;

    case 'Operat':
      if (!operationSign) {
        operationSign += event.target.textContent;
        calcDisplay.textContent = firstVar + operationSign;
      }
      resDisplay.textContent = '';
      break;

    case 'Culc':
      switch (operationSign) {
        case '+':
          if (+firstVar + +secondVar > 9999999999) {
            calcDisplay.textContent = 'экран переполнен';
          } else {
            resDisplay.textContent = String(+firstVar + +secondVar);
            calcDisplay.textContent = String(
              firstVar + operationSign + secondVar
            );
          }

          firstVar = '';
          secondVar = '';
          operationSign = '';
          break;

        case '-':
          if (+firstVar - +secondVar > 9999999999) {
            calcDisplay.textContent = 'экран переполнен';
          } else {
            resDisplay.textContent = String(+firstVar - +secondVar);
            calcDisplay.textContent = String(
              firstVar + operationSign + secondVar
            );
          }

          firstVar = '';
          secondVar = '';
          operationSign = '';
          break;

        case '*':
          if (+firstVar * +secondVar > 9999999999) {
            calcDisplay.textContent = 'экран переполнен';
          } else {
            resDisplay.textContent = String(+firstVar * +secondVar);
            calcDisplay.textContent = String(
              firstVar + operationSign + secondVar
            );
          }

          firstVar = '';
          secondVar = '';
          operationSign = '';
          break;

        case '/':
          if (+firstVar / +secondVar > 9999999999) {
            calcDisplay.textContent = 'экран переполнен';
          } else {
            resDisplay.textContent = String(+firstVar / +secondVar);
            calcDisplay.textContent = String(
              firstVar + operationSign + secondVar
            );
          }

          firstVar = '';
          secondVar = '';
          operationSign = '';
          break;
      }
      break;
  }
}

keys.addEventListener('click', keysHandler);

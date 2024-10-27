export function capitalize(str) {
  const firstLetter = str.slice(0, 1);
  const restLetter = str.slice(1);
  return firstLetter.toUpperCase() + restLetter;
}

export function reverseString(str) {
  const arr = str.split('');
  return arr.reverse().join('');
}

export const calculator = (function () {
  const add = (num1, num2) => num1 + num2;
  const subtract = (num1, num2) => num1 - num2;
  const divide = (num1, num2) => num1 / num2;
  const multiply = (num1, num2) => num1 * num2;
  return {
    add,
    subtract,
    divide,
    multiply,
  };
})();

function checkIsLetter(num) {
  const upperCase = num >= 65 && num <= 90
  const lowerCaseCase = num >= 97 && num <= 122
  return upperCase || lowerCaseCase
}

export function caesarCipher(str, key) {
  const charCodeArr = str.split('').map(char => char.charCodeAt(0))
  
  function isUpperCase(num) {
    return num >= 65 && num <= 90
  }
  
  function isLowerCase(num) {
    return num >= 97 && num <= 122
  }

  const caesarArr = charCodeArr.map(num => {
    if(isUpperCase(num)) {
      num += key
      if(num > 90) return num - 26
      return num
    }
    if(isLowerCase(num)) {
      num += key
      if(num > 122) return num - 26
      return num
    }
    return num
  });

  return String.fromCharCode(...caesarArr);
}

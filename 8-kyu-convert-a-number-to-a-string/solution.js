// We need a function that can transform a number into a string.

// What ways of achieving this do you know?

function numberToString(num) {
  let stringed = num.toString();
  return stringed;
}

//Alternate way

function numberToString(num) {
  return String(num);
}

function numberToString(num) {
  numberToString = String;
}

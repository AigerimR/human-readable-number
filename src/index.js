module.exports = function toReadable (number) {
const digits = [
    "zero",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
  ];
  const beforeTwenty = [
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  const tens = [
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];
  const mil = ["hundred", "thousand", "million", "milliard", "billion"];
  stringNumber = number.toString();

  if (stringNumber.length < 2) {
    return digits[number];
  } // 10<=number<100
  else if (stringNumber.length === 2 && number < 20) {
    return beforeTwenty[number - 10];
  } else if (stringNumber.length === 2 && stringNumber[1] === "0") {
    return `${tens[+stringNumber[0] - 2]}`;
  } else if (stringNumber.length === 2) {
    return `${tens[+stringNumber[0] - 2]} ${digits[+stringNumber[1]]}`;
  } // 100=<=number<1000
  else if (
    stringNumber.length === 3 &&
    stringNumber[1] === "0" &&
    stringNumber[2] === "0"
  ) {
    return `${digits[+stringNumber[0]]} ${mil[0]}`;
  } else if (stringNumber.length === 3 && stringNumber[1] === "0") {
    return `${digits[+stringNumber[0]]} ${mil[0]} ${digits[+stringNumber[2]]}`;
  } else if (
    stringNumber.length === 3 &&
    stringNumber[2] === "0" &&
    stringNumber[1] === "1"
  ) {
    return `${digits[+stringNumber[0]]} ${mil[0]} ${beforeTwenty[0]}`;
  } else if (stringNumber.length === 3 && stringNumber[2] === "0") {
    return `${digits[+stringNumber[0]]} ${mil[0]} ${
      tens[+stringNumber[1] - 2]
    }`;
  } else if (
    stringNumber.length === 3 &&
    +(stringNumber[1] + stringNumber[2]) < 20
  ) {
    return `${digits[+stringNumber[0]]} ${mil[0]} ${
      beforeTwenty[+(stringNumber[1] + stringNumber[2]) - 10]
    }`;
  } else if (stringNumber.length === 3) {
    return `${digits[+stringNumber[0]]} ${mil[0]} ${
      tens[+stringNumber[1] - 2]
    } ${digits[+stringNumber[2]]}`;
  }  
}

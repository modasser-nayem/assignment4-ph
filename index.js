// 1 -> The mainGame function get a number input and then this number with multiply by 3 then multiply result with added 10 total result divided by 2 then this result minus by 5, then return the value.
function mindGame(number) {
   if (number < 0) {
      return "Please provide a Positive Value";
   } else {
      const multiplyValue = number * 3;
      const sumValue = multiplyValue + 10;
      const dividedValue = sumValue / 2;
      const result = dividedValue - 5;
      return result;
   }
}

// 2 -> This function get input a string. The string each character find out sum and the sum value even or odd. if sum value even then return even or sum value Odd return Odd.
function evenOdd(string) {
   if (typeof string !== "string") {
      return "Input must be a String";
   } else {
      if (string.length % 2 === 0) {
         return "Even";
      } else {
         return "Odd";
      }
   }
}

// 3 -> This function get input a any number. Then this number minus by 7. If subtraction less than 7 than return subtraction. if subtraction Greater than seven return double of the input number.
function isLGSeven(number) {
   if (typeof number !== "number") {
      return "Input must be a Number";
   } else {
      const decrementValue = number - 7;
      if (decrementValue < 7) {
         return decrementValue;
      } else {
         const doubleValue = number * 2;
         return doubleValue;
      }
   }
}

// 4 -> This function get input a array. In the array have many of numbers. In this array negative or positive value available. Then this array how many negative value find out, and return the total result.
function findingBadData(numbers) {
   if (!Array.isArray(numbers)) {
      return "Input must be a Numbers of Array";
   } else {
      let badData = [];
      for (let i = 0; i < numbers.length; i++) {
         if (numbers[i] <= 0) {
            badData.push(numbers[i]);
         }
      }
      return badData.length;
   }
}

// 5 -> This function get three input parameter. all parameter are number. first parameter power of 21, second parameter power of 32, third parameter power of 43. all parameter does sum with power. if sum result greater than 2000 then result minus by 2000. if result less than 2000 then return sum value.
function gemsToDiamond(friNum1, friNum2, friNum3) {
   if ((typeof friNum1 || typeof friNum2 || typeof friNum3) !== "number") {
      return "All input must be Number";
   } else {
      const friOneDiamond = friNum1 * 21;
      const friSecondDiamond = friNum2 * 32;
      const friThirdDiamond = friNum3 * 43;
      const totalDiamond = friOneDiamond + friSecondDiamond + friThirdDiamond;
      if (totalDiamond > 1000 * 2) {
         return totalDiamond - 2000;
      } else {
         return totalDiamond;
      }
   }
}

// User clicks the button to trigger the password generator function.
var triggerButton = document.getElementById("myButton");
triggerButton.addEventListener("click", function () {
  //Prompts the user to choose the number of characters in their password.
  var HowMany = prompt("How many characters do you want in your new password?");

  //Ensures user uses no less than 8 characters and no more than 128.
  if (HowMany < 8) {
    alert("Password must be a minimum of 8 characters");
    location.reload();
  } else if (HowMany > 128) {
    alert("Password must not exceed 128 characters");
    location.reload();
  } else {
    //Asks user to specify which characters to include in their password.
    var lowerCase = confirm("Do you want to include lowercase letters?");
    var upperCase = confirm("Do you want to include uppercase letters?");
    var special = confirm("Do you want to include special characters?");
    var numbers = confirm("Do you want to include numbers?");

    //Global array which will be sliced and concatenated accordingly depending on users choice of characters.
    var OptionsArray = [
      " ",
      "!",
      "#",
      "$",
      "%",
      "&",
      "'",
      '"',
      "(",
      ")",
      "*",
      "+",
      "-",
      ",",
      ".",
      "/",
      ":",
      ";",
      "<",
      ">",
      "=",
      "?",
      "@",
      "[",
      "]",
      "|",
      "_",
      "{",
      "}",
      "`",
      "~",
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
    ];

    //Declare empty array for all password characters to be pushed into
    var emptyArray = [];

    //Ensures the user chooses at least one kind of character to include.
    if (
      lowerCase === false &&
      upperCase === false &&
      special === false &&
      numbers === false
    ) {
      alert(
        "You must choose at least one type of character to be included in your new password"
      );
      location.reload();
    } else {
      //Loop includes every possible combination of character types and loops through as many times as the user chose.
      for (var i = 0; i < HowMany; i++) {
        if (
          lowerCase === true &&
          upperCase === true &&
          special === true &&
          numbers === true
        ) {
          var RandomNumber = Math.floor(Math.random() * 93);
          var ChoiceInArray = OptionsArray[RandomNumber];
          emptyArray.push(ChoiceInArray);
        } else if (
          lowerCase === true &&
          upperCase === true &&
          special === true &&
          numbers === false
        ) {
          var array_one = OptionsArray.slice(0, 83);
          var RandomNumber = Math.floor(Math.random() * 83);
          var ChoiceInArray = array_one[RandomNumber];
          emptyArray.push(ChoiceInArray);
        } else if (
          lowerCase === true &&
          upperCase === true &&
          special === false &&
          numbers === false
        ) {
          var array_two = OptionsArray.slice(31, 83);
          var RandomNumber = Math.floor(Math.random() * 52);
          var ChoiceInArray = array_two[RandomNumber];
          emptyArray.push(ChoiceInArray);
        } else if (
          lowerCase === true &&
          upperCase === true &&
          special === false &&
          numbers === true
        ) {
          var array_three = OptionsArray.slice(31, 93);
          var RandomNumber = Math.floor(Math.random() * 62);
          var ChoiceInArray = array_three[RandomNumber];
          emptyArray.push(ChoiceInArray);
        } else if (
          lowerCase === true &&
          upperCase === false &&
          special === true &&
          numbers === true
        ) {
          var array_fourA = OptionsArray.slice(0, 57);
          var array_fourB = OptionsArray.slice(83, 93);
          var array_four = array_fourA.concat(array_fourB);
          var RandomNumber = Math.floor(Math.random() * 67);
          var ChoiceInArray = array_four[RandomNumber];
          emptyArray.push(ChoiceInArray);
        } else if (
          lowerCase === true &&
          upperCase === false &&
          special === false &&
          numbers === false
        ) {
          var array_five = OptionsArray.slice(31, 57);
          var RandomNumber = Math.floor(Math.random() * 26);
          var ChoiceInArray = array_five[RandomNumber];
          emptyArray.push(ChoiceInArray);
        } else if (
          lowerCase === true &&
          upperCase === false &&
          special === false &&
          numbers === true
        ) {
          var array_sixA = OptionsArray.slice(31, 57);
          var array_sixB = OptionsArray.slice(83, 93);
          var array_six = array_sixA.concat(array_sixB);
          var RandomNumber = Math.floor(Math.random() * 36);
          var ChoiceInArray = array_six[RandomNumber];
          emptyArray.push(ChoiceInArray);
        } else if (
          lowerCase === true &&
          upperCase === false &&
          special === true &&
          numbers === false
        ) {
          var array_seven = OptionsArray.slice(0, 57);
          var RandomNumber = Math.floor(Math.random() * 57);
          var ChoiceInArray = array_seven[RandomNumber];
          emptyArray.push(ChoiceInArray);
        } else if (
          lowerCase === false &&
          upperCase === true &&
          special === true &&
          numbers === true
        ) {
          var array_eightA = OptionsArray.slice(0, 31);
          var array_eightB = OptionsArray.slice(57, 93);
          var array_eight = array_eightA.concat(array_eightB);
          var RandomNumber = Math.floor(Math.random() * 67);
          var ChoiceInArray = array_eight[RandomNumber];
          emptyArray.push(ChoiceInArray);
        } else if (
          lowerCase === false &&
          upperCase === true &&
          special === true &&
          numbers === false
        ) {
          var array_nineA = OptionsArray.slice(0, 31);
          var array_nineB = OptionsArray.slice(57, 83);
          var array_nine = array_nineA.concat(array_nineB);
          var RandomNumber = Math.floor(Math.random() * 57);
          var ChoiceInArray = array_nine[RandomNumber];
          emptyArray.push(ChoiceInArray);
        } else if (
          lowerCase === false &&
          upperCase === true &&
          special === false &&
          numbers === false
        ) {
          var array_ten = OptionsArray.slice(57, 83);
          var RandomNumber = Math.floor(Math.random() * 26);
          var ChoiceInArray = array_ten[RandomNumber];
          emptyArray.push(ChoiceInArray);
        } else if (
          lowerCase === false &&
          upperCase === true &&
          special === false &&
          numbers === true
        ) {
          var array_eleven = OptionsArray.slice(57, 93);
          var RandomNumber = Math.floor(Math.random() * 36);
          var ChoiceInArray = array_eleven[RandomNumber];
          emptyArray.push(ChoiceInArray);
        } else if (
          lowerCase === false &&
          upperCase === false &&
          special === true &&
          numbers === true
        ) {
          var array_twelveA = OptionsArray.slice(0, 31);
          var array_twelveB = OptionsArray.slice(83, 93);
          var array_twelve = array_twelveA.concat(array_twelveB);
          var RandomNumber = Math.floor(Math.random() * 41);
          var ChoiceInArray = array_twelve[RandomNumber];
          emptyArray.push(ChoiceInArray);
        } else if (
          lowerCase === false &&
          upperCase === false &&
          special === false &&
          numbers === true
        ) {
          var array_thirteen = OptionsArray.slice(83, 93);
          var RandomNumber = Math.floor(Math.random() * 10);
          var ChoiceInArray = array_thirteen[RandomNumber];
          emptyArray.push(ChoiceInArray);
        } else if (
          lowerCase === false &&
          upperCase === false &&
          special === true &&
          numbers === false
        ) {
          var array_fourteen = OptionsArray.slice(0, 31);
          var RandomNumber = Math.floor(Math.random() * 31);
          var ChoiceInArray = array_fourteen[RandomNumber];
          emptyArray.push(ChoiceInArray);
        }
      }
    }

    // Newly generated password inside of (formerly) empty array uses join method to get rid of commas.
    var complete_password = emptyArray.join("");

    //Takes the new array and outputs via the DOM to the webpage.
    var show = document.getElementById("password");
    show.textContent = complete_password;
  }
});

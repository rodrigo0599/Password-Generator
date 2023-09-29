// Assignment code here
var symbols = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
var numbers = "0123456789";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercase = "abcdefghijklmnopqrstuvwxyz";
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

var generatePassword = function () {
  var userChoice = prompt("Select your password length between 8 and 128 characters");

  if (userChoice === null || userChoice.trim() === '') {
    alert("You must enter a value");
    return "You didn't enter a value!";
  }
  
  userChoice = parseInt(userChoice);
  
  if (userChoice < 8 || userChoice > 128 || isNaN(userChoice)){
    alert("Make sure the number is greater than 8 and less than 128");
    return "Your password didn't meet the criteria!";
  }
  
  var newPassword = "";

  var capitalLetters = confirm("Would you like Uppercase Characters in your password?");
  if(capitalLetters) {
    newPassword = uppercase.concat(newPassword);
  }

  var lowerLetters = confirm("Would you like Lowercase Characters in your password?");
  if(lowerLetters) {
    newPassword = lowercase.concat(newPassword);
  }

  var addNumbers = confirm("Would you like Numbers in your password?");
  if(addNumbers) {
    newPassword = numbers.concat(newPassword);
  }

  var addSymbols = confirm("Would you like Symbols in your password?");
  if(addSymbols) {
    newPassword = symbols.concat(newPassword);
  }

  let password = "";

  for (var i = 0; i < userChoice; i++) {
    var createPassword = newPassword.charAt(Math.floor(Math.random() * newPassword.length));
    password = createPassword.concat(password);
  }
  
  return password;
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

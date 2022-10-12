// Assignment code here


function generatePassword() {
  var numbArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var upperArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowerArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var specialArray = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
  var possibleArray = [];

  charInput = prompt ("How many characters do you want your password to be? Enter a number between 8 and 128");
  if (charInput < 8 || carInput > 128){
    return "Invalid entry. Enter a number between 8 and 128.";
  }
  else if (isNaN(charInput)){
      charInput = promp("A number entry was not detected. Enter a number between 8 and 128");
    }
  else {
    alert("Your generated password will be "+charInput+" characters long.");
  }

}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


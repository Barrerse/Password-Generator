// Assignment code here


function generatePassword() {
  var numbArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var upperArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var lowerArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var specialArray = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
  var possibleArray = [];

  charInput = prompt ("How many characters do you want your password to be? Enter a number between 8 and 128");
  if (charInput < 8 || charInput > 128){
    return "Invalid entry. Enter a number between 8 and 128.";
  }
  else if (isNaN(charInput)){
      charInput = promp("A number entry was not detected. Enter a number between 8 and 128");
    }
  else {
    alert("Your generated password will be "+charInput+" characters long.");
  }

  hasLowercase = confirm("Do you want your password to include lowercase characters?");
  if (hasLowercase) {
    var turnToLowercase = alert("Your password will have lowercase characters.");
  }
  else {
    alert("Your password will NOT have lowercase characters.");
  }

  hasUppercase = confirm("Do you want your password to include uppercase characters?");
  if (hasUppercase) {
    alert("Your password will have uppercase characters.");
  }
  else {
    alert("Your password will NOT have uppercase characters.");
  }

  hasNumbers = confirm("Do you want your password to include numbers?");
  if (hasNumbers) {
    alert("Your password will have numbers.");
  }
  else {
    alert("Your password will NOT have numbers.");
  }

  hasSpecial = confirm("Do you want your password to include special characters?");
  if (hasSpecial) {
    alert("Your password will have special characters.");
  }
  else {
    alert("Your password will NOT have special characters.");
  }

  if (hasLowercase === false && hasUppercase === false && hasNumbers === false && hasSpecial === false) {
    return "Please select at least one character type.";
  };


  if (hasLowercase) {
    possibleArray = possibleArray.concat(lowerArray);
  }
  if (hasUppercase) {
    possibleArray = possibleArray.concat(upperArray);
  }
  if (hasNumbers) {
    possibleArray = possibleArray.concat(charInput);
  }
  if (hasSpecial) {
    possibleArray = possibleArray.concat(specialArray);
  }


  let finalPassword = ""
  for (let i = 0; i < charInput; i++) {
    let rng =[Math.floor(Math.random() * possibleArray.length)];
    
    finalPassword = finalPassword + possibleArray[rng];
  }
  return finalPassword;
};




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


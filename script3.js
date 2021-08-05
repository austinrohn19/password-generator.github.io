// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  function generatePassword() {
    var lengthPrompt = window.prompt("Please Choose between 8 and 128 charcters!");
    if (lengthPrompt >= 8 && lengthPrompt <=128) {
     var numberRequest = window.confirm("Should this Password include Numbers? OK= Yes Cancel=No");
    }else {
      window.alert("Not Valid Option, Please choose between 8 and 128 charcters!");
    }
    if(numberRequest === true || numberRequest == false){
      var uppercaserequest = window.confirm("Should this password have Uppercase letters? OK= Yes Cancel=No");
    }
    if(numberRequest === true || numberRequest == false){
      var lowercaserequest = window.confirm("Should this password have Lowercase letters? OK= Yes Cancel=No");
    }
    if(lowercaserequest === true || lowercaserequest == false){
      var characterRequest = window.confirm("Should this password have Special Characters? OK= Yes Cancel=No");
    }
 
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  // Add event listener to generate button
  function RandomLower() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97 );
  }
  
  function RandomUpper() {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65 );
  }
  
  function Randomnumber() {
    return String.fromCharCode(Math.floor(Math.random() * 10) + 48 );
  }
  
  function Randomcharacter() {
    const symbols = "!@#$%^&*(){}[]=<>/,."
    return symbols [Math.floor(Math.random() * symbols.length)];
  }
 
  var getrandom= {
    lowercaserequest: RandomLower,
    uppercaserequest: RandomUpper,
    numberRequest: Randomnumber,
    characterRequest: Randomcharacter
 };

  let generatePassword = "";

  var typescount = numberRequest + lowercaserequest + uppercaserequest + characterRequest;

  console.log (typescount)

  var generatedArr = [{ numberRequest }, { lowercaserequest}, {uppercaserequest}, {characterRequest}].filter(item => Object.values(item)[0]);

  if(typescount === 0) {
    return window.alert("you must select at least one character type")
  };

  for ( let i = 0; i < lengthPrompt; i += typescount) {
    generatedArr.forEach(type => {
      var selectedtypes = Object.keys(type)[0];

      console.log("selectedtypes: ", selectedtypes);

      generatePassword += getrandom[selectedtypes]();
    });
  } 
  console.log(generatePassword);
  
  return generatePassword;
};

var passwordText = document.querySelector ("#password")

passwordText.value = password;

};

generateBtn.addEventListener("click", writePassword);
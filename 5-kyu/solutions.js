// Challenge:
// Regex Password Validation
 
// You need to write regex that will validate a password to make sure it meets the following criteria:

// At least six characters long
// contains a lowercase letter
// contains an uppercase letter
// contains a number
// Valid passwords will only be alphanumeric characters.


// Solution:
function validate(password) {
  return /((?=.*[a-z]{1,})(?=.*[A-Z]{1,})(?=.*[0-9]{1,})(?!.*\s)(?!.*[_+-.,!@#$%^&*();\\/|<>"'])).{6,}/.test(password);
}


// Challenge:
// String incrementer

// Your job is to write a function which increments a string, to create a new string. If the string already ends with a number, the number should be incremented by 1. If the string does not end with a number the number 1 should be appended to the new string.

// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100



// Solution:
function incrementString (strng) {
  if(!strng.match(/[0-9]/g)){
    return strng + '1';
  }else if(strng.match(/[1-9]/g)){
    var numstr = strng.match(/\d/g)
    var pnum = strng.match(/[1-9]/g);
    var ind = strng.indexOf(pnum[0]);
    var num = Number(strng.split('').splice(ind).join('')) + 1;
    var str = strng.split('');
    if(str[ind] === '9' && str[ind-1] === '0'){
      str.splice((ind-1))
      return str.join('')+num
    }else{
      str.splice(ind)
      return str.join('')+ num;
    }
  }else{
    var str = strng.split('')
    str.splice(-1, 1, '1')
    return str.join('')
  }
}

// Challenge:
// Time-like string format

// Build up a method that takes an integer and formats it to a 'time - like' format. The method must raise an exception if its hour length is less than 3 digits and greater than 4.

// Solution:
function solution(hour) {
  var hourArr = String(hour).split("");
  if (hourArr.length < 3 || hourArr.length > 4){
    throw 'poo';
  }
  hourArr.splice(-2, 0,":")
  return hourArr.join("")
}

// Challenge:
// Valid Parentheses

// Write a function called validParentheses that takes a string of parentheses, and determines if the order of the parentheses is valid. validParentheses should return true if the string is valid, and false if it's invalid.

// Solution:
function validParentheses(parens){
  
  var p = parens.split("");
  var f = parens[0];
  var n = p.indexOf(')')
  
  if(p.length > 2){
    if(f === '(' && p.length%2 === 0 && n !== -1 ){
     p.splice(n, 1);
     p.splice(0 , 1);
     var c = p.join("")
     return validParentheses(c)
    }else{
     return false
    }  
  }else {
    return (p[1] === ")") ? true:false
  }
}


//Challenge:

// First non-repeating letter

// Write a function named firstNonRepeatingCharacter that takes a string input, and returns the first character that is not repeated anywhere in the string.

// For example, if given the input 'stress', the function should return 't', since the letter t only occurs once in the string, and occurs first in the string.

// As an added challenge, upper- and lowercase letters are considered the same character, but the function should return the correct case for the initial letter. For example, the input 'sTreSS' should return 'T'.

// If a string contains all repeating characters, it should return the empty string ("").

//Solution:
function firstNonRepeatingLetter(s) {
  // Add your code here
  let ans = [];
  let test = s.toLowerCase().split('');
  s.toLowerCase().split('').map((letter,i)=>{
  		let search = s.toLowerCase().indexOf(letter) + 1
  		if(s.toLowerCase().indexOf(letter, search) === -1){
  		  ans.push(s[i]);		
  		}else{
  			return
  		}
  });
  if(ans.length > 0){
    return ans[0];
  }else{
    return '';
  }
}


// Challenge:
// Convert string to camel case
// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized.

// Solution:
function toCamelCase(str){
  let re = str.indexOf('_') === -1 ? '-':'_'
  let words = str.split(re).map((word, i, arr)=>{
    return i !== 0 ? word.replace(word.substring(0,1),word.substring(0,1).toUpperCase()):word; 
  }).join('');
  return words;
}





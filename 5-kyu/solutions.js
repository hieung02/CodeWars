Title: Regex Password Validation

Question: 
You need to write regex that will validate a password to make sure it meets the following criteria:

At least six characters long
contains a lowercase letter
contains an uppercase letter
contains a number
Valid passwords will only be alphanumeric characters.


Solution:
function validate(password) {
  return /((?=.*[a-z]{1,})(?=.*[A-Z]{1,})(?=.*[0-9]{1,})(?!.*\s)(?!.*[_+-.,!@#$%^&*();\\/|<>"'])).{6,}/.test(password);
}

Title: String incrementer

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


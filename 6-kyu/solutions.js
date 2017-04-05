// Challenge:
// Build Tower

// Build Tower by the following given argument:
// number of floors (integer and always greater than 0).

// Tower block is represented as *

// or example, a tower of 3 floors looks like below

// [
//   '  *  ', 
//   ' *** ', 
//   '*****'
// ]


// Solution:
function towerBuilder(nFloors) {
  // build here
  var display = [];
  var star = '*'
  var stars = '';
  var space = '';
  var arr = '';
  
  for(var i = 1; i <= nFloors; i++){
    //row = 1
    if(nFloors === 1){
      stars += star;
      display.push(stars)
    }else{
      space = ' '.repeat(nFloors-i);
      stars = star.repeat(i-1);
      if(i === 1){
        arr = space + star +space;
        display.push(arr);
      }else{
        arr = space+stars+star+stars+space;
        display.push(arr);
      }
    }
  }
  return display;

}


// Challenge:
// Are they the "same"?

// Given two arrays a and b write a function comp(a, b) (compSame(a, b) in Clojure) that checks whether the two arrays have the "same" elements, with the same multiplicities. "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

// Solution:
function comp(array1, array2){
  //your code here
  return array1 === null || array2 === null || array1.length !== array2.length ? false:squareCheck(array1, array2);
  
  
  function squareCheck(arr1, arr2){
    let arr1Sort = arr1.sort();
    let sqArr = arr2.map((num)=>{
        return Number.isInteger(Math.sqrt(num)) ? Math.sqrt(num):'false';
      })
      .sort()
      .map((ele, i)=>{
        
        return ele === arr1Sort[i] ? 'true':'false';
      });
      
    return sqArr.indexOf('false') !== -1 ? false:true;  
  }
}
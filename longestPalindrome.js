// for each char
//   check next char, if it matches current char, keep checking
//     once not found match, then check max length & string
//   check surrounding 2 chars, if match, keep checking
//     once not found match, then check max length & string
//
// helper fn: checkChar
//   check char is within bounds
// Find Palidrome
//   starts at a central char idx, and then grows outwardly checking each side

function longestPalindrome (string) {

  let maxSize = 0;
  let foundString = '';

  for(let i=0; i<string.length-1; i++) {

    // Does cur char match the next char?
    if (checkChar(i, string) === checkChar(i+1,string) ) {
      foundString = findPalindrome(i, i+1, string, foundString);
    }

    // Do surrounding chars match?
    if (checkChar(i-1, string) === checkChar(i+1, string) ) {
      foundString = findPalindrome(i-1, i+1, string, foundString);
    }
  }

  return foundString;
  
  // return char within bounds
  function checkChar(idx, string) {
    if(idx < 0) return '';
    if(idx > string.length -1) return '';
    return string[idx];
  }

  function findPalindrome(left, right, string, curFoundString) {
    let foundMatch = true;
    let foundString = '';
    while(foundMatch) {
      if( checkChar(left, string) === checkChar(right, string)) {
        foundString = string.substring(left,right+1);
        left--;
        right++;
      }
      else
        foundMatch = false;
    }
    
    if (foundString.length > curFoundString.length) {
      return foundString;
    } else {
      return curFoundString;
    }
  }

}

console.log(longestPalindrome("My dad is a racecar athlete"));

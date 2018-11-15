// for each char
//   check next char, if it matches current char, keep checking
//     once errored, then check max length & string
//   check surrounding 2 chars, if match, keep checking
//     once errored, then check max length & string
//
// helper fn: checkChar
//   check char is within bounds

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
  
  // return char within bounds
  function checkChar(idx, string) {
    if(idx < 0) return '';
    if(idx > string.length -1) return '';
    return string[idx];
  }

  function findPalindrome(left, right, string, curFoundString) {
    let foundMatch = true;
    let searchString = '';
    while(foundMatch) {
      if( checkChar(left, string) === checkChar(right, string)) {
        left--;
        right++;
      }
      else
        foundMatch = false;
    }
    foundString = string.substring(left,right+1);
    if (foundString.length > maxLength) {
      return foundString;
    }
  }

}


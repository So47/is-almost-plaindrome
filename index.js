function splittingString(word) {
  let splittedString = word.split("");
  let reversedString = splittedString.reverse();
  reversedString = reversedString.join("");
  return reversedString;
}
function IsAlmostPlaindrome(word) {
  let trialsNo = 1;
  let reversedString = splittingString(word)
  console.log(reversedString)

  if (JSON.stringify(reversedString) === JSON.stringify(word)) {
    console.log(reversedString, 'lol')
    return true;
  } else if (trialsNo === 1) {
    trialsNo = 0
    let slicedWord = word.slice(1, -1);
    return IsAlmostPlaindrome(slicedWord)
  } else {
    return false;
  }
}
console.log(IsAlmostPlaindrome('abccxx'))


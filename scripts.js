/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Quora.

Given a string, find the palindrome that can be made by inserting the fewest number of characters as possible anywhere in the word. If there is more than one palindrome of minimum length that can be made, return the lexicographically earliest one (the first one alphabetically).

For example, given the string "race", you should return "ecarace", since we can add three letters to it (which is the smallest amount to make a palindrome). There are seven other palindromes that can be made from "race" by adding three letters, but "ecarace" comes first alphabetically.

As another example, given the string "google", you should return "elgoogle".
*/

//Note - the palindromes are not checked if they are legit English words.

const revString = (yourString) => {
  let output = '';
  if (yourString.length < 1) {
    return null
  } else if (yourString.length == 1) {
    return yourString;
  } else {
    for (let j = yourString.length-1; j>=0; j--) {
      output = output + yourString[j];
    }
  }
  return output;
}

const checkPally = (yourWord) => {
  let left = yourWord.substring(0,Math.floor(yourWord.length/2))
  let right = yourWord.substring(Math.ceil(yourWord.length/2))
  if (revString(left) === right) {return 1}
  return 0;
}

const makePally = (yourWord) => {
  let output = [];
  for (let i = 1; i < yourWord.length; i++) {
    let temp = yourWord.substring(i);
    let rev = revString(temp);
    if (checkPally(rev+yourWord)) {
      output.push(rev+yourWord);
    }
  }
  // for (i = 1; i < yourWord.length; i++) {
  //   temp = revString(yourWord)
  //   temp = temp.substring(i);
  //   rev = revString(temp);
  //   console.log(rev+yourWord) //bugs out here
  //
  // }
  //output.sort(); //final sorting
  return output;
}

let test1 = 'race'
console.log(makePally(test1))

$(document).ready(function() {
  $('#form1').submit(function(event) {
  event.preventDefault();
  let input1 = $('#input1').val();
  $('#output-section-1').text(makePally(input1));
  })
});

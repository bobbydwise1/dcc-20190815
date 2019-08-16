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
    for (i=yourString.length-1; i>=0; i--) {
      output = output + yourString[i];
    }
  }
  return output;
}

const makePally = (yourWord) => {
  let output = [];
  let revved = revString(yourWord)
  for (i=1; i < yourWord.length; i++) {
    let temp = yourWord.substring(i);
    console.log(temp)
//    let rev = revString(temp); //bugs out here infinitely
  }
  return output;
}

let test = 'race'
console.log(makePally(test))

$(document).ready(function() {
  $('#form1').submit(function(event) {
  event.preventDefault();
  let input1 = $('#input1').val();
  $('#output-section-1').text(JSON.stringify(1));
  })
});

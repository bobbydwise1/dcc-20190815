/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Snapchat.

Given an array of time intervals (start, end) for classroom lectures (possibly overlapping), find the minimum number of rooms required.

For example, given [(30, 75), (0, 50), (60, 150)], you should return 2.
*/

//check a time interval if the follows min to max;
const checkArray = (arrayOne) => {
  if (arrayOne[0] <= arrayOne[1]) {
    return 1;
  } else {
    return 0;
  }
}

//make a function that compares if two intervals overlap;
const checkOverlap = (arrayOne, arrayTwo) => {
  if (!(checkArray(arrayOne)) || !(checkArray(arrayTwo))) {
    //console.log('unlegal arrays')
    return 0;
  }
  if ( ((arrayOne[1] < arrayTwo[1]) && (arrayOne[1] > arrayTwo[0]))
    ||
    ((arrayTwo[1] < arrayOne[1]) && (arrayTwo[1] > arrayOne[0]))
  ) {
    //console.log('it does overlap');
    return 1;
  }
  //console.log('does not overlap')
  return 0;
}

//create a function that counts the amount of overlaps in all intervals;
const checkAll = (arrayOfarrays) => {
  let answer = 0;
  for (i=0; i<arrayOfarrays.length; i++) {
    let now = arrayOfarrays[i];
    for (j=i+1; j<arrayOfarrays.length; j++) {
      if (checkOverlap(now,arrayOfarrays[j])) {
        answer++;
      }
    }
  }
  return answer;
}

//create a function that determines the number of classes;
const noclasses = (integer) => {
  switch (integer) {
    case 0:
      return 1;
      break;
    default:
      return 0;
  }
}

$(document).ready(function() {
  let inter1 = [30,75];
  let inter2 = [0,50];
  let inter3 = [60,150];
  let inter4 = [0,180];
  let inter5 = [180,190];

  console.log('compare array3 and array5 = ', checkOverlap(inter1,inter3))
  console.log('checkall 1 = ', checkAll([inter1]))
  console.log('checkall 2 = ', checkAll([inter1,inter2]))
  console.log('checkall 3 = ', checkAll([inter1,inter2,inter3]))
  console.log('checkall 4 = ', checkAll([inter1,inter2,inter3,inter4]))
  console.log('checkall 5 = ', checkAll([inter1,inter2,inter3,inter4,inter5]))

  $('#output-section-1').text(inter1);
  $('#output-section-2').text(inter2);
  $('#output-section-3').text(inter3);
  $('#output-section-4').text(inter4);
  $('#output-section-5').text(inter5);
  $('#output-section-6').text(checkAll([inter1,inter2,inter3,inter4,inter5]));
});

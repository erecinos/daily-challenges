// # Leap
//
// Write a program that will take a year and report if it is a leap year.
//
// The tricky thing here is that a leap year in the Gregorian calendar occurs:
//
// ```plain
// on every year that is evenly divisible by 4
//   except every year that is evenly divisible by 100
//     unless the year is also evenly divisible by 400
// ```
//
// For example, 1997 is not a leap year, but 1996 is.  1900 is not a leap
// year, but 2000 is.
//
// If your language provides a method in the standard library that does
// this look-up, pretend it doesn't exist and implement it yourself.
//
//
// ## How to Submit
// 1. Create a daily-challenges github.com repo
// 2. Create a leap.js file in the repo.
// 3. Add a comment to this snippet (on Slack) with a link to your file.

var testYear = prompt("Enter a year") // prompts user to enter a year

function isLeapYear(yearGoesHere){ // declare function

  if (testYear % 4 == 0) {  // step 1. Is year evenly divisible by 4?

    if (testYear % 100 == 0) {  // step 2. If year is evenly divisible by 4
                              // then is year evenly divisible by 100?

      if (testYear % 400 == 0) {  // step 3. Is year evenly divisible by 400?

        window.alert(testYear + " is a leap year") // step 4. If year evenly divisible by 400
                                                  // then leap year
      }
      else {
        window.alert(testYear + " is not a leap year") // If year is not evenly divisible by 400
                                                      //then not a leap year
      }
    }
    else {
      window.alert(testYear + " is a leap year") // If year is not evenly divisible by 100
                                                    //then not a leap year
    }
  }
  else {
    window.alert(testYear + " is not a leap year") // If year is not evenly divisible by 4
                                                  //then not a leap year
  }
}

isLeapYear(testYear); // call function

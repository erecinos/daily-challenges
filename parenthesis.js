var DataStructures = require('algorithms').DataStructures;
var Stack = DataStructures.Stack;

function Parenthesis(string) {

  var sequence = new Stack();

  var match = { '(' : ')',
                '[' : ']',
                '{' : '}'
              };

  for (var i = 0; i < string.length; i++) {

    if ( (/[\(\[\{]/).test(string.charAt(i)) ) {

      sequence.push(string.charAt(i));

    } else if ( (/[\(\[\{]/).test(string.charAt(i)) &&
               match[string.charAt(i)] == sequence.top()) {

      sequence.pop();
    } else {

     return false;
   }

   return true;
 }
}

console.log(Parenthesis(string));

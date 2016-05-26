var newString = 'Mississippi';
var newObject = {};

var letterCount = function(word) {
    for (var i = 0; i < word.length; i++) {

          if (newObject[newString[i]]) {
            newObject[newString[i]] += 1;
          } else {
            newObject[newString[i]] = 1;
          }
    }console.log(newObject);
}




letterCount(newString);

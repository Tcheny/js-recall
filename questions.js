
var selectElementsStartingWithA = function(array) {
  function startingWithA(elements){
    return elements.charAt(0) === "a";
  }
  return array.filter(startingWithA);
}

var selectElementsStartingWithVowel = function(array) {
  var vowels = ["a","e","i","o","u","y"]
  function startingWithVowel(elements){
    var firstChar = elements.charAt(0);
    return vowels.indexOf(firstChar) !== -1;
  }
  return array.filter(startingWithVowel);
}

var removeNullElements = function(array) {
  function NullElements(elements){
    return elements !== null;
  }
  return array.filter(NullElements);
}

var removeNullAndFalseElements = function(array) {
  function NullAndFalseElements(elements){
    return elements !== null && elements !== false ;
  }
  return array.filter(NullAndFalseElements);
}

var reverseWordsInArray = function(array) {
    function WordsInArray(elements){
      return elements.split("").reverse().join("");
    }
    return array.map(WordsInArray )
}

var everyPossiblePair = function(array) {
    return 'Write your method here';
}

var allElementsExceptFirstThree = function(array) {
    return array.slice(3)
}

var addElementToBeginning = function(array, element) {
  array.unshift(1);
    return array
}

var sortByLastLetter = function(array) {
    return 'Write your method here';
}

var getFirstHalf = function(string) {
    return 'Write your method here';
}

var makeNegative = function(number) {
    return -Math.abs(number)
}

var numberOfPalindromes = function(array) {
    return 'Write your method here';
}

var shortestWord = function(array) {
    return 'Write your method here';
}

var longestWord = function(array) {
  // var result ="";
  // for (var i = 0; i < array.length; i++) {
  //   if (array[i].length > result.length) {
  //     result = array[i]
  //   }
  // }
  // return result
  function returnMax(previousMax,word){
    return previousMax.length > word.length ? previousMax : word
  }
  return array.reduce(returnMax);
}

var sumNumbers = function(array) {
  function sum(a,b){
    return a+b;
}
return array.reduce(sum)
}

var repeatElements = function(array) {
    return 'Write your method here';
}

var stringToNumber = function(string) {
    return 'Write your method here';
}

var calculateAverage = function(array) {
    return 'Write your method here';
}

var getElementsUntilGreaterThanFive = function(array) {
    return 'Write your method here';
}

var convertArrayToObject = function(array) {
    var newObject = {}
    if (array.length % 2) throw "error";
    for (var i = 0; i < array.length; i += 2) {
      newObject[array[i]] = array[i+1];
    }
    return newObject;
}

var getAllLetters = function(array) {
    function addIfUnique(letters, newLetter){
      if(letters.indexOf(newLetter) === -1) letters.push(newLetter)
      return letters;
    }
    return array.join('').split('').sort().reduce(addIfUnique, []);
}

var swapKeysAndValues = function(object) {
    return 'Write your method here';
}

var sumKeysAndValues = function(object) {
    return 'Write your method here';
}

var removeCapitals = function(string) {
    // function isNotCapital(character){
    //   var charCode = character.charCodeAt(0);
    //   return (charCode > 64 && charCode < 91) ? false : true;
    // }
    // return string.split('').filter(isNotCapital).join('')
    return string.replace(/[A-Z]/g,'')
}

var roundUp = function(number) {
    return 'Write your method here';
}

var formatDateNicely = function(date) {
    return 'Write your method here';
}

var getDomainName = function(string) {
    return 'Write your method here';
}

var titleize = function(string) {
  var exceptions = ['the','and'];
  function titleWord(word,exceptions) {
    if (exceptions.indexOf(word) !== -1) return word ;
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }
  var titleizeArray = [];
  var firstWordOfSentence = true;
  for (var word of string.split(' ') ) {
    if (firstWordOfSentence){
      titleizeArray.push(titleWord(word,[]))
      firstWordOfSentence = false;
    }
    else {
      titleizeArray.push(titleWord(word, exceptions))
    }
    if (word.slice(-1) ===  ".") firstWordOfSentence = true;
  }
  return titleizeArray.join(' ');
}

var checkForSpecialCharacters = function(string) {
  return string.match(/\W/g) ? true : false
}

var squareRoot = function(number) {
    return 'Write your method here';
}

var factorial = function(number) {
    return 'Write your method here';
}

var findAnagrams = function(string) {
  function permute (array) {
    if (array.length === 1) return [array];
    var fullPermutation = [];
    for (var i in array) {
      var subset = array.slice(0);
      subset.splice(i, 1);
      for (var permutation of permute(subset)) {
        permutation.unshift(array[i]);
        fullPermutation.push(permutation);
      }
    }
    return fullPermutation
  }
  function joinLetters (array) {
    return array.join('');
  }
  return permute(string.split('')).map(joinLetters);
}

var convertToCelsius = function(number) {
    return 'Write your method here';
}

var letterPosition = function(array) {
    return 'Write your method here';
}

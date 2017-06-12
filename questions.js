
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

}

var getFirstHalf = function(string) {
    return 'Write your method here';
}

var makeNegative = function(number) {
    return 'Write your method here';
}

var numberOfPalindromes = function(array) {
    return 'Write your method here';
}

var shortestWord = function(array) {
    return 'Write your method here';
}

var longestWord = function(array) {
    return 'Write your method here';
}

var sumNumbers = function(array) {
    return 'Write your method here';
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
    return 'Write your method here';
}

var getAllLetters = function(array) {
    return 'Write your method here';
}

var swapKeysAndValues = function(object) {
    return 'Write your method here';
}

var sumKeysAndValues = function(object) {
    return 'Write your method here';
}

var removeCapitals = function(string) {
    return 'Write your method here';
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
    return 'Write your method here';
}

var checkForSpecialCharacters = function(string) {
    return 'Write your method here';
}

var squareRoot = function(number) {
    return 'Write your method here';
}

var factorial = function(number) {
    return 'Write your method here';
}

var findAnagrams = function(string) {
    return 'Write your method here';
}

var convertToCelsius = function(number) {
    return 'Write your method here';
}

var letterPosition = function(array) {
    return 'Write your method here';
}

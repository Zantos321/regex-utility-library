// MATCH LITERAL STRINGS

function matchLiteralStrings(userString) {
   let matchTest = /Bob/; // /Bob/ is looking for lerally bob in the string
   return matchTest.test(userString); // .test only gives true or false
}

// MATCH A SINGLE CHARACTER WITH MULTIPLE POSSIBILITITES

function singleCharacterMultiPosibilities(userString) {
   let vowelTest = /[aeiou]/gi; // looking for any vowel in brackets i= not case sensitive g= the entire string
   return userString.match(vowelTest); // .match gives you the stuff in the string and is written in reverse order from .test
}

// MATCH SINGLE CHARCTERS NOT SPECIFIED

function notSpecifiedSingleCharacter(userString) {
   let notThese = /[^aeiou0-9]/gi; // the ^ means look for charcters that are not these you can also put a range of numbers/letters with a - too
   return userString.match(notThese);
}

// MATCH CHARCTERS THAT OCCUR ONE OR MORE TIMES

function charctersThatOccurMuli(userString) {
   let multiOccur = /l+/gi; // the + means to record the charcter in the same element of an array if there is more than one back to back
   return userString.match(multiOccur);
}

//  FIND ONE OR MORE CRIMINALS IN A HUNT

function criminalHunt(userString) {
   let criminalLook = /C+/; // just looking for C next to each other
   return userString.match(criminalLook);
}

// MATCH BEGINNING STRING PATTERNS

function beginningStringPatterns(userString) {
   let beginningPatterns = /^The/; // just looking to see if the string begins with the, the ^ outside of brackets is used to search for patterns
   return beginningPatterns.test(userString);
}

// MATCH ENDING STING PATTERNS

function endingStringPatterns(userString) {
   let endingPatterns = /cat$/; // the $ at the end is testing to see if the string end with the pattern at the end
   return endingPatterns.test(userString);
}

// MATCH ALL LETTERS AND NUMBERS

function matchAllLettersAndNumbers(userString) {
   let matchTest = /\w/g; // the /\w/ is the same as /[A-Za-z0-9_]/ so its a shorter way of writing it
   return userString.match(matchTest).length; // counting the alphanumeric characters of the string
}

// MATCH EVERYTHING BUT LETTERS AND NUMBERS

function matchAllButLettersAndNumbers(userString) {
   let matchTest = /\W/g; // the /\W/ is the same as /[^A-Za-z0-9_]/ so it will look for everything that isnt a character or number
   return userString.match(matchTest).length; // counting non-alphanumeric characters of a string
}

// MATCH ALL NUMBERS

function matchNumbers(userString) {
   let matchNumbers = /\d/g; // the /\d/ is the same as /[0-9]/
   return userString.match(matchNumbers).length; // counting the numeric characters in a string
}

// MATCH ALL NON-NUMBERS

function matchNonNumbers(userString) {
   let matchNonNumbers = /\D/g; // the /\D/ is the same as /[^0-9]/
   return userString.match(matchNonNumbers).length; // counting the non-numeric chracters in a string
}

// MATCH NON-WHITESPACE CHARACTERS IN A STRING

function matchNonWhitespace(userString) {
   let matchNonWhitespace = /\S/g; // the /\S/ looks for all characters that arent whitespace
   return userString.match(matchNonWhitespace).length; // counting all characters that arent whitespace
}

// POSITIVE AND NEGATIVE LOOKAHEAD

function positiveNegativeLookahead(userString) {
   let passwordCheck = /^\D(?=\w{5,})(?=\w*\d{2})/;
   /* the ^\D makes sure there is not number at the start of the string, 
   the (?=\w{5,}) makes sure the string is at least five characters long, 
   (?=\w*\d{2}) makes sure there are at least consecutive numbers at the end
   the * means there can be zero to unlimited times this can happen
   the negative lookhead != just makes sure something is not in the string. */
   return passwordCheck.test(userString);
}

// CHECK FOR MIXED GROUPING OF CHARACTERS

function mixedGroupingOfCharacters(userString) {
   let mixedGroupingCheck = /(Barack|Michelle).*Obama/;
   /* the (|) means the first name in the check can be one or the other, 
   the .* means any like middle name can be put in */
   return mixedGroupingCheck.test(userString);
}

// USE CAPTURE GROUPS TO SEARCH AND REPLACE

function searchAndReplace(userString) {
   let search = /(\w+)\s(\w+)\s(\w+)/; // looks for and separates each word by space
   return userString.replace(search, "$3 $2 $1");
   // replaces each word with the third term second term and thrid term from the search using the "$3 $2 $1"
}

// REMOVE WHITESPACE FROM START AND END

function removeWhiteSpace(userString) {
   let beinningAndEndWhitespaceSearch = /^\s+|\s+$/g;
   /* ^\s+ looks for whitespace at the beginning,
   | = or
   \s+$ looks for whitespace at the end 
   g = globally on the string */
   return userString.replace(beinningAndEndWhitespaceSearch, "");
   // replaces whitespace with nothing effectively removing it
}

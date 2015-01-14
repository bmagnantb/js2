/**
 *
 */

// ---------------------
// Define a function max() that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript.
// ---------------------

function max(a, b) {
    "use strict";
    if (a > b) {
        console.log(a + ">" + b);
    } else if (b > a) {
        console.log(b + ">" + a);
    } else {
        console.log(a + " = " + b);
    }
}

max(8, 9);
max(10, 5);
max(6, 6);

// ---------------------
// Define a function maxOfThree() that takes three numbers as arguments and returns the largest of them.
// ---------------------

function maxOfThree(a, b, c) {
    "use strict";
    if (a > b) {
        if (a > c) {
            if (c > b) {
                return a + " > " + c + " > " + b;
            } else if (b > c) {
                return a + " > " + b + " > " + c;
            } else {
                return a + " > " + b + " = " + c;
            }
        } else if (c > a) {
            return c + " > " + a + " > " + b;
        } else {
            return a + " = " + c + " > " + b;
        }
    } else if (b > a) {
        if (b > c) {
            if (a > c) {
                return b + " > " + a + " > " + c;
            } else if (c > a) {
                return b + " > " + c + " > " + a;
            } else {
                return b + " > " + a + " = " + c;
            }
        } else if (c > b) {
            return c + " > " + b + " > " + a;
        } else {
            return b + " = " + c + " > " + a;
        }
    } else if (c > a) {
        return c + " > " + a + " = " + b;
    } else if (a > c) {
        return a + " = " + b + " > " + c;
    } else {
        return a + " = " + b + " = " + c;
    }
}

console.log(maxOfThree(1, 2, 3));
console.log(maxOfThree(3, 1, 2));
console.log(maxOfThree(2, 3, 1));
console.log(maxOfThree(1, 1, 3));
console.log(maxOfThree(1, 3, 1));
console.log(maxOfThree(3, 1, 1));
console.log(maxOfThree(3, 3, 3));

// ---------------------
// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
// ---------------------

function isVowel(char) {
    "use strict";
    if (char === "a" || char === "A" || char === "e" || char === "E" || char === "i" || char === "I" || char === "o" || char === "O" || char === "u" || char === "U") {
        return true;
    } else {
        return false;
    }
}

console.log(isVowel("a"));
console.log(isVowel("j"));
console.log(isVowel("E"));
console.log(isVowel("x"));
console.log(isVowel("O"));
console.log(isVowel("z"));
console.log(isVowel("u"));

// ---------------------
// Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. For example, translate("this is fun") should return the string "tothohisos isos fofunon".
// ---------------------
console.log("----rovarspraket");

function rovarspraket(phrase) {
        "use strict";
        var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z", "B", "C", "D", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"]
        for (var i = 0, translate = ""; i < phrase.length; i++) {
            var letter = phrase[i]
            for (var x = 0; x < consonants.length; x++) {
                if (phrase[i] === consonants[x]) {
                    letter += "o" + phrase[i];
                }
            }
            translate += letter;
        }
        return translate;
    }
    //if (phrase[i] !== "b" && phrase[i] !== "B" && phrase[i] !== "e" && phrase[i] !== "E" && phrase[i] !== "i" && phrase[i] !== "I" && phrase[i] !== "o" && phrase[i] !== "O" && phrase[i] !== "u" && phrase[i] !== "U") {

/*}
}
}
return translate;
}*/
console.log(rovarspraket("abcdefgh"));
console.log(rovarspraket("this is fun"));

// ---------------------
// Define a function sum() and a function multiply() that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) should return 24.
// ---------------------

function sum(array) {
    "use strict";
    var sum = 0;
    array.forEach(function(value, index) {
        sum += value;
    })
    return sum;
}

function multiply(array) {
    "use strict";
    var total = 1;
    array.forEach(function(value, index) {
        total *= value;
    })
    return total;
}

console.log(sum([1, 2, 3, 4]));
console.log(multiply([1, 2, 3, 4]));

// ---------------------
// Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
// ---------------------

function reverse(string) {
    "use strict";
    // index changes, 0->x, 1->x-1, x-1->1, x->0
    var string2 = ""
    for (var i = 0, x = string.length - 1; i < string.length; i++, x--) {
        string2 += string[x];
    }
    return string2;
}

console.log(reverse("Hey"));
console.log(reverse("jag testar"));

// ---------------------
// Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
// ---------------------

function findLongestWord(words) {
    "use strict";
    var longest = "";
    words.forEach(function(value, index) {
        if (value.length > longest.length) {
            longest = value;
        }
    })
    return longest.length;
}

console.log(findLongestWord(["hard", "harder", "hardest", "otorhinolaryngology", "a"]));

// ---------------------
// Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
// ---------------------

function filterLongWords(words, i) {
    "use strict";
    var longest = new Array();
    var x = 0;
    words.forEach(function(value, index) {
        if (value.length > i) {
        	longest[x] = value;
        	x++;
        }
    })
    return longest;
}

console.log(filterLongWords(["anemone", "nemo", "fish", "jellyfish", "narwhal", "pelican"], 5));

// ---------------------
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").
// ---------------------

function charFreq(string) {
    "use strict";
    var freq = new Object();
    for (var i = 0; i < string.length; i++) {
    	if (freq[string[i]] === undefined) {
    		freq[string[i]] = 0;
    	}
    	freq[string[i]] += 1;
}
    return freq;
}

console.log(charFreq("Hahaha arararar kkkkk"));


console.log();

function writeToDom(input, challengeNum, id) {
    document.getElementById(id).innerHTML += "<h3>" + challengeNum + input + "</h3>";
}

/*------------------------------------------- Challenge #1 -------------------------------------------*/
var challengeOneInput = "jumbo shrimp";

//split each word
var singleWord = challengeOneInput.split(' ');
var jumbo = singleWord[0].split('');
var shrimp = singleWord[1].split('');

//split the alphabet
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var alphabetSplit = alphabet.split('');

//score the word 'jumbo'
var jumboScore = 0;
for (var i=0; i < jumbo.length; i++) {
    var score = alphabetSplit.indexOf(jumbo[i])+1;
    jumboScore += score;
};

//score the word 'shrimp'
var shrimpScore = 0;
for (var j=0; j < shrimp.length; j++) {
    var score = alphabetSplit.indexOf(shrimp[j])+1;
    shrimpScore += score;
};

//return which word scores higher
var answer;
if (shrimpScore >= jumboScore) {
    answer = shrimp.join('') + " = " + shrimpScore;
} else {
    answer = jumbo.join('') + " = " + jumboScore;
}

//push to html
var challenge1 = document.getElementById(challengeUno);
challengeUno.innerHTML = "<h3> Challenge 1: " + answer + "</h3>";


// /*------------------------------------------- Challenge #2 -------------------------------------------*/

var challengeTwoInputA = [1,2,3,4,5,6,7,8,9];  //[1,2,7,4,5,6,3,8,9];
var challengeTwoInputB = [12,13,14];  //[12,17,14];
var challengeTwoInputC = [9,2,4,7,3];  //[9,2,4,3,7];

//create function to replace the numbers
function replaceNumbaz(num) {
        //replace 3's with 7's
        var index = num.indexOf(3);
        if (index > -1) {
            num.splice(index, 1, 7);
        }

        //replace 7's with 3's
        var index = num.lastIndexOf(7);
        if (index > -1) {
            num.splice(index, 1, 3);
        }
}

replaceNumbaz(challengeTwoInputA);

var challenge2 = document.getElementById(challengeDos);
challengeDos.innerHTML = "<h3> Challenge 2: " + challengeTwoInputA + "</h3>";


/*------------------------------------------- Challenge #3 -------------------------------------------*/

var challengeThreeInputA = [ 1, 1, 1, 2, 1, 1 ];  // 2
var challengeThreeInputB = [ 0, 0, 0, 0, 0, 0, 0, 0.55, 0, 0 ];  // 0.55

function checkForDups(dupes) {
    var duplicates = [];
    var unique = [];
    for (var i = 0; i < dupes.length; i++) {
        if ( dupes[i] == dupes[i+1] || dupes[i] == dupes[i-1]) {
            duplicates.push(dupes[i])
        } else {
            unique.push(dupes[i])
        }
    }
    return unique;
}

console.log(checkForDups(challengeThreeInputA));

var challenge2 = document.getElementById(challengeTres);
challengeTres.innerHTML = "<h3> Challenge 3: " + challengeThreeInputA + "</h3>";


/*------------------------------------------- Challenge #4 -----------------------------------------*/

var challengeFourInputA = [ 1, 2, 3 ];  // [2, 4, 6]
var challengeFourInputB = [ 3, 8, 1, 2, 4, 12 ];  // [ 6, 16, 2, 4, 8, 24 ]

function doubleNum(dubnum) {
    var doubled = [];
    for (var k = 0; k < dubnum.length; k++) {
        doubled.push(dubnum[k] * 2);
    }
    return doubled;
}

var doubledArray = doubleNum(challengeFourInputB);
document.getElementById('challengeQuatro').innerHTML = "<h3> Challenge 4: " + doubledArray + "</h3>";


/*------------------------------------------- Challenge #5 ----------------------------------------*/

var array1 = [1,2];
var array2 = [1];
//display = [2]

function actuallyRemoveThem(a, b) {
    for (var x = 0; x < a.length; x++) {
        for (var y = 0; y < b.length; y++) {
            if (a[x] === b[y]) {
            a.splice(x, 1);
            }
        }
    }
    return a;
}

var answerr = actuallyRemoveThem(array1, array2);
writeToDom(answerr, "Challenge 5: ", "challengeCinco");

var array1 = [1,2, 4, 7, 5, 9];
var array2 = [5, 9, 2];
//display = [1, 4, 7]
console.log();

/*--- Challenge #1 ---*/
var challengeOneInput = "jumbo shrimp";

//split each word
var singleWord = challengeOneInput.split(' ');
var jumbo = singleWord[0].split('');
console.log(jumbo);
var shrimp = singleWord[1].split('');
console.log(shrimp);

//split the alphabet
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var alphabetSplit = alphabet.split('');
console.log(alphabetSplit);

//score the word 'jumbo'
var jumboScore = 0;
for (var i=0; i < jumbo.length; i++) {
    var score = alphabetSplit.indexOf(jumbo[i])+1;
    jumboScore += score;
};
console.log(jumboScore);

//score the word 'shrimp'
var shrimpScore = 0;
for (var j=0; j < shrimp.length; j++) {
    var score = alphabetSplit.indexOf(shrimp[j])+1;
    shrimpScore += score;
};
console.log(shrimpScore);

//return which word scores higher
var answer;
if (shrimpScore >= jumboScore) {
    answer = shrimp.join('') + " = " + shrimpScore;
} else {
    answer = jumbo.join('') + " = " + jumboScore;
}
console.log(answer);

//push to html
var challenge1 = document.getElementById(challengeUno);
challengeUno.innerHTML = "<h3>" + answer + "</h3>";

/*--- Challenge #2 ---*/

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
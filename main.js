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
if (shrimpScore > jumboScore) {
    console.log(shrimp.join(''));
} else {
    console.log(jumbo.join(''));
}
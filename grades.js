var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
var aGrades = 0;
var bGrades = 0;
var cGrades = 0;
var dGrades = 0;
var fGrades = 0;

for (var i = 0; i < scores.length; i++) {
  if (scores[i] >= 91) {
    aGrades++;
  }
  else if (scores[i] >= 81) {
    bGrades++;
  }
  else if (scores[i] >= 71) {
    cGrades++;
  }
  else if (scores[i] >= 61) {
    dGrades++;
  }
  else if (scores[i] >= 50) {
    fGrades++;
  }
}

console.log("A's:",aGrades,"B's:",bGrades,"C's:",cGrades,"D's:",dGrades,"F's:",fGrades);
console.log("Lowest grade:",Math.min.apply(Math, scores),"% out of a possible 100%.");
console.log("Highest grade:",Math.max.apply(Math, scores),"% out of a possible 100%.");

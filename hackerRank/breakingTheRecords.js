/*
Maria plays college basketball and wants to go pro.
Each season she maintains a record of her play.
She tabulates the number of times she breaks her season record for most points and least points in a game.
Points scored in the first game establish her record for the season, and she begins counting from there.
*/

function breakingRecords(scores) {
    var min = scores[0];
    var max = scores[0];
    var minRBCount = 0;
    var maxRBCount = 0;
    for (var i = 1; i < scores.length; i++) {
        var curScore = scores[i];
        if (curScore > max) {
            max = curScore;
            maxRBCount++;
        } else if (curScore < min) {
            min = curScore;
            minRBCount++;
        }
    }
    return [maxRBCount, minRBCount];
}
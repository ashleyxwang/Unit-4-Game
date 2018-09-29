var crystalSrcList = [
    "assets/images/Crystal1.jpg",
    "assets/images/Crystal2.jpg",
    "assets/images/Crystal3.jpg",
    "assets/images/Crystal4.jpg",
]
var userScore = 0;
var targetNumber = 0;
var crystalValues = genCrystalValues();
var totalWins = 0;
var totalLosses = 0;
var locked = false;

//function list
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function genCrystalValues() {
    var arr = []
    for (var i = 0; i < 4; i++) {
        var value = getRandom(1, 12);
        arr.push(value);
    }
    return arr;
}

//attach random numbers to crystals
function attachCrystals(cValues) {
    // get a reference to the crystal container div
    var container = $(".crystals");
    $(".crystals").empty();
    // iterate 4 times for 4 crystals
    for (let i = 0; i < 4; i++) {
        // create an image
        var img = "<img id=" + i + ">";
        var crystalImg = $(img);

        // assign it a value
        crystalImg.attr("value", cValues[i]);
        crystalImg.attr("src", crystalSrcList[i]);
        crystalImg.attr("height", "200px");

        container.append(crystalImg);
    }
    return container;
}

function youWin() {
    $("#userMessage").text("YOU WIN!!");
}

function youLose() {
    $("#userMessage").text("You went over, try again!");
}

function reset() {
    $("#userSum").text(userScore = 0);
    $("#userMessage");

    targetNumber = getRandom(19, 120);
    $("#randomNumber").text(targetNumber);
    genCrystalValues();
    locked = false;
    // attachCrystals(crystalValues);
    // $(".crystals").on("click", function (event) {

};

$(document).ready(function () {
    //pick random number between 19-120
    targetNumber = getRandom(19, 120);

    //add random numbers for crystals
    attachCrystals(crystalValues);

    //display user score = 0
    $("#userSum").text(userScore);

    //display targetNumber
    $("#randomNumber").text(targetNumber);

    //display total wins
    $("#Wins").text("Wins: " + totalWins);

    //display total losses
    $("#Losses").text("Losses: " + totalLosses);

    $(".crystals img").on("click", function (event) {
        if (locked) {
            return;
        }
        locked = true;
        var clickedNumber = parseInt($(this).attr("value"));
        
        userScore += clickedNumber;
        $("#userSum").text(userScore);

        if (userScore === targetNumber) {
            totalWins += 1;
            $("#Wins").text("Wins: " + totalWins);
            youWin();

            reset();
        };
        if (userScore > targetNumber) {
            totalLosses += 1;
            $("#Losses").text("Losses: " + totalLosses);
            youLose();

            reset();
        };
        locked = false;
    });
});

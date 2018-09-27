var crystalSrcList = [
    "assets/images/Crystal1.jpg",
    "assets/images/Crystal2.jpg",
    "assets/images/Crystal3.jpg",
    "assets/images/Crystal4.jpg",
]

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

    // iterate 4 times for 4 crystals
    for (let i = 0; i < 4; i++) {
        // create an image
        var crystalImg = $("<img>");

        // assign it a value
        crystalImg.attr("value", cValues[i]);
        crystalImg.attr("src", crystalSrcList[i]);
        crystalImg.attr("width", "150px");

        // attach it to the container
        container.append(crystalImg);
        console.log(crystalImg.attr("value"));
    }
    return container;
}

function newCrystalValues() {
    var newValues = genCrystalValues();
    parseInt($(event.target).attr("value"));

}

function youWin () {
    $("#userMessage").text("YOU WIN!!");
}

function youLose () {
     $("#userMessage").text("You went over, try again!");
}


$(document).ready(function () {
    //declare variables
    var userScore = 0;
    var targetNumber = 0;
    var crystalValues = genCrystalValues();
    var totalWins = 0;
    var totalLosses = 0;

    function reset() {
        $("#userSum").text(userScore = 0);
        $("#userMessage").delay(5000).empty();

        targetNumber= getRandom(19, 120);
        $("#randomNumber").text(targetNumber);
        // newCrystalValues();
        // $(".crystals").on("click", function (event) {

    };

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

    $(".crystals").on("click", function (event) {
        var clickedNumber = parseInt($(event.target).attr("value"));

        userScore += clickedNumber;
        $("#userSum").text(userScore);

        if (userScore === targetNumber) {
            $("#Wins").text("Wins: " + totalWins++);
            youWin();

            reset();           
        };
        if (userScore > targetNumber) {
            $("#Losses").text("Losses: " + totalLosses++);
            youLose();

            reset();
        };
    });

});

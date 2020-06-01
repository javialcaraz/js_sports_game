let resetButton = document.querySelector("#reset-button")
let numResets = document.querySelector("#num-resets")

let teamoneShootButton = document.querySelector("#teamone-shoot-button");
let teamoneShots = document.querySelector("#teamone-numshots")
let teamoneGoals = document.querySelector("#teamone-numgoals")

let teamtwoShootButton = document.querySelector("#teamtwo-shoot-button");
let teamtwoShots = document.querySelector("#teamtwo-numshots")
let teamtwoGoals = document.querySelector("#teamtwo-numgoals")


resetButton.addEventListener("click", function () {

    numResets.innerHTML = Number(numResets.innerHTML) + 1
    teamoneShots.innerHTML = 0
    teamoneGoals.innerHTML = 0
    teamtwoGoals.innerHTML = 0
    teamtwoShots.innerHTML = 0
});



teamoneShootButton.addEventListener("click", function () {


    teamoneShots.innerHTML = Number(teamoneShots.innerHTML) + 1
    //let newCounterValue = Number(counter.innerHTML) + 1; //
    console.log(teamoneShots.innerHTML)


    if (Math.random() * 100 < 40) {
        teamoneGoals.innerHTML = Number(teamoneGoals.innerHTML) + 1
    }

    console.log(teamoneGoals)
});







teamtwoShootButton.addEventListener("click", function () {

    teamtwoShots.innerHTML = Number(teamtwoShots.innerHTML) + 1
    console.log(teamtwoShots.innerHTML)

    if (Math.random() * 100 < 60) {
        teamtwoGoals.innerHTML = Number(teamtwoGoals.innerHTML) + 1
    }


    console.log(teamtwoGoals)
});
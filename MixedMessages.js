const button = document.querySelector("#button")

function randomStart(randomNumber) {
    const startArr = ["Good morning ","Hello ","Good night "];

    randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return startArr[0];
            break;
        case 1:
            return startArr[1];
            break;
        case 2:
            return startArr[2];
        default:
            console.log("Go away ");
    }
}

function randomMiddle(randomNumber) {
    const midArr = ["Mr. ","Mrs. ", "Ms. "];

    randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return midArr[0];
            break;
        case 1:
            return midArr[1];
            break;
        case 2:
            return midArr[2];
        default:
            console.log("you filthy ");
    }
}

function randomEnd(randomNumber) {
    const endArr = ["Quandt","Merkel","Bond"];

    randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return endArr[0];
            break;
        case 1:
            return endArr[1];
            break;
        case 2:
            return endArr[2];
        default:
            console.log("casual!");
    }
}

const randomSentence = {
    greeting: randomStart(),
    salutation: randomMiddle(),
    name: randomEnd(),
};

// function createSentence() {
//     document.getElementById("h1").innerHTML = (randomSentence.greeting + randomSentence.salutation + randomSentence.name)
// };

// button.addEventListener("click", createSentence);
document.getElementById("h1").innerHTML = (randomSentence.greeting + randomSentence.salutation + randomSentence.name);
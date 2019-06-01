const clicker = document.getElementById("clicker");
const counter = document.getElementById("counter");
const myList = document.getElementById("myList");
var audio = new Audio('Wassap.mp3');


counter.value = 0;


clicker.addEventListener("click", function() {
    event.preventDefault();

    const ogAudio = document.getElementById("Audio");
    const newAudio = ogAudio.cloneNode();
    audio.play();
    newAudio.play();

    console.log();
    counter.value = counter.value + 1;
    counter.innerHTML = "Total: " + counter.value;

});






var newListItemButton = document.createElement("button");
const clicker = document.getElementById("clicker");
const counter = document.getElementById("counter");
const myList = document.getElementById("myList");



counter.value = 0;


clicker.addEventListener("click", function() {
    event.preventDefault();

    console.log();
    counter.value = counter.value + 1;
    counter.innerHTML = "Total: " + counter.value;
    var audio = document.getElementById("Audio");
    audio.onclick;

});






var newListItemButton = document.createElement("button");
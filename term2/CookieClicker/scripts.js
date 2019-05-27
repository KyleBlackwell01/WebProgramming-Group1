var clicker = document.getElementById("clicker");
var counter = document.getElementById("counter");

counter.value = 0;
clicker.addEventListener("click", function(){
    console.log();
    counter.value = counter.value + 1;
    counter.innerHTML = counter.value;
});
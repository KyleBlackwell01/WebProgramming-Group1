var clicker = document.getElementById("clicker");
var counter = document.getElementById("counter");


counter.value = 0;


clicker.onsubmit = function(event){
    event.preventDefault();
};

clicker.addEventListener("click", function(){
    event.preventDefault();

    console.log();
    counter.value = counter.value + 1;
    counter.innerHTML = "Total: " + counter.value;
});

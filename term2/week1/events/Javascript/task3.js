var button = document.getElementById("buttonA");

button.onclick = Calculate;

function Calculate()
{
    var myAge = document.getElementById("years").value;
    var myAgeInDogYears = myAge * 7;
    alert("Yep, thats: " +myAgeInDogYears + " dog years.");
    button.innerText = "Wolf, lets do it again!";

}


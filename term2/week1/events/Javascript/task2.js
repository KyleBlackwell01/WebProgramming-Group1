var button = document.getElementById("buttonA");
button.onclick = onButtonClick;

function onButtonClick()
{
    alert("You are awesome!");
    button.innerText = "Hell yea, Lets do it again!";
    
}
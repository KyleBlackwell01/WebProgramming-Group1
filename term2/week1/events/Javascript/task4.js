var button = document.getElementById("button");
button.onMouseHover = onMouseH;
button.onMouseLeave = onMouseL;


function onMouseH()
{
    button.innerText = "Get outta here!";
    button.disabled = true;
}

function onMouseL()
{
    button.disabled = false;
    button.innerText = "Click me person!";
}
var button = document.getElementById("buttonA");
button.onMouseHover = onMouseH;
button.onMouseLeave = onMouseL;


function onMouseH()
{
    button.innerHTML.hidden = true;
}

function onMouseL()
{
    button.hidden = false;
}

var contentP = document.getElementById("contentHere");
// var button = document.getElementById("ourButton");
var getDateB = document.getElementById("dateButton");
// button.onclick = ourButtonClick;
// button.onmouseenter = ourButtonMouseEvent;
// button.onmouseleave = ourButtonMouseEventLeave;
getDateB.onclick = getDate;

// function ourButtonClick()
// {
//     alert("Hello World!");
// }

// function ourButtonMouseEvent()
// {
//     contentP.innerHTML = "Boo!";
// }

// function ourButtonMouseEventLeave()
// {
//     contentP.innerHTML = "";
// }

function getDate()
{
    getDateB.innerHTML = Date();
}
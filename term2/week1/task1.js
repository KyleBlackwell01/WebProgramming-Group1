var getDateB = document.getElementById("dateButton");
getDateB.onclick = getDate;

function getDate()
{
    getDateB.innerHTML = Date();
}
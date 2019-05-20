var inputField = document.getElementById("inputField");
var addButton = document.getElementById("addButton");
var clearButton = document.getElementById("clearButton");
var selectList = document.getElementById("selectList");
var x = document.getElementById("selectList").selectedIndex;
selectList.onclick = ListSelect;
addButton.onclick = addButtonClick;
clearButton.onclick = clearButtonClick;


function clearButtonClick()
{
    contentHere.innerHTML = "";
}

function ListSelect() 
{
    if (selectList.selectedIndex == 0) 
    {
        return contentHere = document.getElementById("contentHere");

    } else if (selectList.selectedIndex == 1) 
    {
        return contentHere = document.getElementById("contentHere2");

    } else if (selectList.selectedIndex == 2) 
    {
        return contentHere = document.getElementById("contentHere3");
    }
}



function addButtonClick() {

    var text = inputField.value;
    var contentToAdd = document.createElement("li"); 
    var checkbox = document.createElement("input");

    checkbox.type = "checkbox";
    checkbox.value = 1;
    checkbox.name = "todo[]";
    
    contentToAdd.innerHTML = text; 
    contentToAdd.appendChild(checkbox);

    // //On-Click item in list removes.
    contentToAdd.onclick = function() {this.parentNode.removeChild(this);}
    if (contentHere.childElementCount == 0) {
        contentHere.appendChild(contentToAdd);
    }
    else {
        contentHere.insertBefore(contentToAdd, contentHere.firstChild);
    }


}

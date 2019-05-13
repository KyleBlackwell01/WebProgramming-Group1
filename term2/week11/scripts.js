// var contentP = document.getElementById("contentHere");
// var buttonC = document.getElementById("ButtonC");
// var buttonD = document.getElementById("ButtonD");
// // var buttonA = document.getElementById("ButtonA");
// var myInput = document.getElementById("myInput");


//     // var items = document.querySelectorAll("#contentHere li")
//     //     tab = [], contentP;

//     //     for(var i = 0; i < items.length; i++) {
//     //         tab.push(items[i].innerHTML);
//     //     }

//     //     for(var i = 0; i < items.length; i++) {
//     //         items[i].onclick = function(){

//     //             contentP = tab.indexOf(this.innerHTML);
//     //             console.log(this.innerHTML + " index = " + contentP);
//     //         }
//     //     }


// //buttonA.onclick = removeAll;
// buttonC.onclick = ourButtonClick;
// buttonD.onclick = removeItem;


// function ourButtonClick()
// {
//     if (myInput.value == "")
//     {
//         alert("Input is required!");
//         return
//     }
//     else
//     {

//         var x = document.getElementsByTagName("LI")[0];
//         x.setAttribute("id", "text");
//         myInput.setAttribute('id',myInput.value);

//         contentP.innerHTML += "<li>" + myInput.value + "</li>";
//     }
// }

// function ourButtonClick()
// {
//     create.setAttribute('id',myInput.value);
//     create.appendChild(document.createTextNode(myInput.value));
//     contentP.appendChild(create);
// }

// function removeItem()
// {
//     contentP.removeChild(contentP.childNodes[0]);
// }

// function removeAll()
// {
//     contentP.removeChild(contentP.childNodes);
// }












// var myNodelist = document.getElementsByTagName("LI");
//  var i;
//  for (i = 0; i < contentP.length; i++) {
//    var span = document.createElement("SPAN");
//    var txt = document.createTextNode("\u00D7");
//    span.className = "close";
//    span.appendChild(txt);
//    contentP[i].appendChild(span);
//  }
 
//  // Click on a close button to hide the current list item
//  var close = document.getElementsByClassName("close");
//  var i;
//  for (i = 0; i < close.length; i++) {
//    close[i].onclick = function() {
//      var div = this.parentElement;
//      div.style.display = "none";
//    }
//  }
 
//  // Add a "checked" symbol when clicking on a list item
//  var list = document.querySelector('ul');
//  list.addEventListener('click', function(ev) {
//    if (ev.target.tagName === 'LI') {
//      ev.target.classList.toggle('checked');
//    }
//  }, false);
 
 // Create a new list item when clicking on the "Add" button
//  function newElement() {
//    var li = document.createElement("li");
//    var inputValue = document.getElementById("myInput").value;
//    var t = document.createTextNode(inputValue);
//    li.appendChild(t);
//    if (inputValue === '') {
//      alert("You must write something!");
//    } else {
//      document.getElementById("contentHere").appendChild(li);
//    }
//    document.getElementById("myInput").value = "";

//    var span = document.createElement("SPAN");
//    var txt = document.createTextNode("\u00D7");
//    span.className = "close";
//    span.appendChild(txt);
//    li.appendChild(span);
 

 
//    for (i = 0; i < close.length; i++) {
//      close[i].onclick = function() {
//        var div = this.parentElement;
//        div.style.display = "none";
//      }
//    }
//  } 








// function test()
// {

//     var todo = document.querySelector( '#contentHere' ),
//         form = document.querySelector("test1"),
//         field = document.querySelector( 'myInput' );
        
//         form.addEventListener( 'submit', function( ev )
//         {
//             var text = field.value;
//             if ( text !== '' ) {
//             todo.innerHTML += '<li>' + text + ' <button onclick="Delete(this);">Delete</button> </li>';
//             field.value = '';
//             //field.focus();
//         }
//         ev.preventDefault();
//         }, false);
  
// };
// function Delete(currentEl)
// {
//     currentEl.parentNode.parentNode.removeChild(currentEl.parentNode);
// };










// var inputField = document.getElementById("inputField");
// var addButton = document.getElementById("addButton");

// var contentHere = document.getElementById("contentHere");
// addButton.onclick = addButtonClick;


// function addButtonClick() 
// {
//     // contentHere.innerHTML = "" + inputField.value + "";

//     var contentToAdd = document.createElement("li");

//     contentToAdd.appendChild(document.createTextNode(inputField.value));
//     contentToAdd.setAttribute("id", 0)
//     contentHere.appendChild(contentToAdd);
    
// }

// function deleteA()
// {
//     var element = document.getElementById(elementId);
//     element.parentNode.removeChild(element);
// }



// var addButton = document.getElementById('addButton');
// //var clearButton = document.getElementById('clearButton');
// var deleteButton = document.getElementById('deleteButton');

// addButton.addEventListener("click", function(e) {
//     var text = document.getElementById("inputField").value;
//     var addItem = document.getElementById('output');
//     var entry = document.createElement("li");
//     text += ' <button class="deleteButton">Delete</button>';
//     entry.innerHTML = text;    
//     addItem.appendChild(entry);
// });

// // clearButton.addEventListener("click", function(e) {
// //     var text = document.getElementById('listItem');
// //     var addItem = document.getElementById('output');
// //     addItem.innerHTML = '';
// //     text.value = '';
// // });

// $(document).on('click','.deleteButton', function() {
//     $(this).parent().remove();    
// });


addButton = document.getElementById('addButton');
clearButton = document.getElementById('clearButton');
deleteButton = document.getElementById('deleteButton');

addButton.addEventListener("click", function(e) {
    var text = document.getElementById('listItem').value;
    var addItem = document.getElementById('output');
    var entry = document.createElement("li");
    text += ' <button class="deleteButton">Delete</button>';
    entry.innerHTML = text;    
    addItem.appendChild(entry);
});

clearButton.addEventListener("click", function(e) {
    var text = document.getElementById('listItem');
    var addItem = document.getElementById('output');
    addItem.innerHTML = '';
    text.value = '';
});

$(document).on('click','.deleteButton', function() {
    $(this).parent().remove();    
});
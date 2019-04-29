var button = document.getElementById("buttonC");
var result = document.getElementById("result");
button.onclick = Calculate;


function Calculate()
{
    var x = document.getElementById("num1").value;
    var y = document.getElementById("num2").value;
    var myResult = parseInt(x,10) + parseInt(y,10);
    result.innerHTML = myResult;
}
var button = document.getElementById("button");
var result = document.getElementById('result');
button.onclick = Calculate;

function Calculate()
{
    var x = parseInt(document.getElementById('num1').value);
    var y = parseInt(document.getElementById('num2').value);
    var method = document.getElementById('method').value;
    result.innerHTML = Method1(x, y, method);
}

function Method1(x, y, method) 
{
    if (method == 'add') 
    {
        return x + y;
    } else if (method == 'subtract') 
    {
        return x - y;
    } else if (method == 'divide') 
    {
        return x / y;
    } else if (method == 'multiply') 
    {
        return x * y;
    }
}
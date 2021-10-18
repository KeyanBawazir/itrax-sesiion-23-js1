document.getElementById('btn').onclick = function(){
    var number1 = parseInt(document.getElementById('number1').value);
    var number2 = parseInt(document.getElementById('number2').value);
    var operation = document.getElementById('operation').value;
    // var result = 0;
    // if (document.getElementById('operation').value=="+") {
    if (operation == "+") {
        var result = (number1 + number2).toString();
        document.getElementById('result').innerText = result;
    // } else if (document.getElementById('operation').value=="-") {
               
    } else if (operation == "-") {
        result = (number1 - number2).toString();
        document.getElementById('result').innerText = result;
    // } else if (document.getElementById('operation').value=="*") {
    } else if (operation == "*") {   
        result = (number1 * number2).toString();
        document.getElementById('result').innerText = result;
    // } else if (document.getElementById('operation').value=="/") {
    } else if (operation == "/") {    
        result = (number1 / number2).toString();
        document.getElementById('result').innerText = result;
    }
}
// document.getElementById('btn').onclick = function(){
//     var number1 = parseInt(document.getElementById('number1').value);
//     var number2 = parseInt(document.getElementById('number2').value);
//     // var operation = document.getElementById('operation').value;
//     // var result = 0;
//     // if (document.getElementById('operation').value=="+") {
//     if (document.getElementById('operation').options[0].value == "+") {
//         var result = (number1 + number2).toString();
//         document.getElementById('result').innerText = result;
//     // } else if (document.getElementById('operation').value=="-") {
               
//     } else if (document.getElementById('operation').options[1].value == "-") {
//         result = (number1 - number2).toString();
//         document.getElementById('result').innerText = result;
//     // } else if (document.getElementById('operation').value=="*") {
//     } else if (document.getElementById('operation').options[2].value == "*") {   
//         result = (number1 * number2).toString();
//         document.getElementById('result').innerText = result;
//     // } else if (document.getElementById('operation').value=="/") {
//     } else if (document.getElementById('operation').options[3].value == "/") {    
//         result = (number1 / number2).toString();
//         document.getElementById('result').innerText = result;
//     }
// }
    

// var number1 = int(document.getElementById('number1').value);
// var number2 = int(document.getElementById('number2').value);
document.getElementById('btn').onclick = function(){
    var number1 = int(document.getElementById('number1').value);
    var number2 = int(document.getElementById('number2').value);
    if(document.getElementById('operation').options[0].value="+"){
        var result = str(number1 + number2);
        document.getElementById('result').innerText = result;
    }else if(document.getElementById('operation').options[2].value="*"){
        var result = str(number1 * number2);
        document.getElementById('result').innerText = result;
    }else if(document.getElementById('operation').options[3].value="/"){
        var result = str(number1 / number2);
        document.getElementById('result').innerText = result;
    }
}
    // if(document.getElementById('operation').options[0].value="+"){
    //     if(document.getElementById('operation').options[0].text = document.getElementById('operation').options[0].value){
    //         result = number1 + number2;
    //         document.getElementById('result').innerText = result;
    // }elseif(document.getElementById('operation').options[1].text = document.getElementById('operation').options[1].value){
    //         result = number1 - number2;
    //         document.getElementById('result').innerText = result;
    // }elseif(document.getElementById('operation').options[2].text = document.getElementById('operation').options[2].value){
    //         result = number1 * number2;
    //         document.getElementById('result').innerText = result;
    // }elseif(document.getElementById('operation').options[3].value= document.getElementById('operation').options[3].value){
    //         result = number1 / number2;
    //         document.getElementById('result').innerText = result;
    // }
   


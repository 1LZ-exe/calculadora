function numeros(value){
    let display = document.getElementById('display');
    display.value += value;
}

function apagar(){
    document.getElementById('display').value = '';
}

function calcular(){
    try{
        let display = document.getElementById('display');
        display.value = eval(display.value);
    } catch(e){
        alert('erro');
    }
    
}
function display(value){
    document.getElementById("display-box").value += value;
}

function clearScreen(){
    document.getElementById("display-box").value = ""
}

function calculate(){
    var a = document.getElementById("display-box").value;
    var b = eval(a);
    document.getElementById("display-box").value = b;
}


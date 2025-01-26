
console.log("aiuoe");
var syahen = Math.floor(Math.random() * 20);
syahen = syahen + 1;
var yoko = Math.floor(Math.random() * syahen);
//yokoが0なら+1
if (yoko < 1) {
    yoko = yoko + 1;
    syahen = syahen + 1;
}
var tate = syahen * syahen - yoko * yoko;

document.getElementById("sya").textContent = syahen;
document.getElementById("yo").textContent = yoko;
//document.getElementById("ta").textContent = tate;
var sui = 1;


function storeNumber() {
    console.log(sui);
    

    var inputNumber = document.getElementById("numberid").value;
    var rutoinputNumber = document.getElementById("rutonumberid").value;
    var answer = Number(inputNumber) * Number(inputNumber) * Number(rutoinputNumber);
    console.log(answer);
    console.log(tate);
    if (tate == answer) {
        var audio = new Audio('agree.mp3')
        console.log("正解");
        var ketu = "大正解!!!!!!";

       
        
        
    } else {
        var audio = new Audio('noagree.mp3')
        console.log("不正解");
        var ketu = "不正解( ｀ー´)ノ";
    }
    document.getElementById("kekka").textContent = ketu;
    audio.play();
    //再設定
     syahen = Math.floor(Math.random() * 20);
syahen = syahen + 1;
 yoko = Math.floor(Math.random() * syahen);
//yokoが0なら+1
if (yoko < 1) {
    yoko = yoko + 1;
    syahen = syahen + 1;
}
 tate = syahen * syahen - yoko * yoko;

document.getElementById("sya").textContent = syahen;
document.getElementById("yo").textContent = yoko;
    
}
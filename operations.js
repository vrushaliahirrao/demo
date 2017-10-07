function fenable(){
    var sec = document.getElementByID("first").value;
    if(sec){
        document.getElementByID("second").disabled=false;
    }
    else{
        document.getElementByID("second").disabled=true;
    }
}
function senable(){
    var sec = document.getElementByID("second").value;
    if(sec){
        document.getElementByID("blur").disabled=false;
    }
    else{
        document.getElementByID("blur").disabled=true;
    }
}

function operations(){

function add()
{
var a=document.cal.num1.value;
var b=document.cal.num2.value;
var c=parseInt(a)+parseInt(b);
document.getElementById("result").cal.value=c;
}

function sub()
{
var a=document.cal.num1.value;
var b=document.cal.num2.value;
var c=a-b;
document.getElementById("result").cal.value=c;
}

function mul()
{
var a=document.cal.num1.value;
var b=document.cal.num2.value;
var c=a*b;
document.getElementById("result").cal.value=c;
}

function div()
{
var a=document.cal.num1.value;
var b=document.cal.num2.value;
var c=a/b;
document.getElementById("result").cal.value=c;
}

function div()
{
var a=document.cal.num1.value;
var b=document.cal.num2.value;
var c=a%b;
document.getElementById("result").cal.value=c;
}
}







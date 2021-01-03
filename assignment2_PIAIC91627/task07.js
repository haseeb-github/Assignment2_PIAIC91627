var num1 = prompt("Enter first number");
var opr1 = prompt("select operator i.e. +, -, *, /, %");
var num2 = prompt("Enter second number");
if(opr1 === "+"){
    alert(parseInt(num1) + parseInt(num2))
}
if(opr1 === "-"){
    alert("answer is " + (parseInt(num1) - parseInt(num2))); 
}
if(opr1 === "*"){
    alert("answer is " + (parseInt(num1) * parseInt(num2))); 
}
if(opr1 === "/"){
    alert("answer is " + (parseInt(num1) / parseInt(num2))); 
}
if(opr1 === "%"){
    alert("answer is " + (parseInt(num1) % parseInt(num2))); 
}
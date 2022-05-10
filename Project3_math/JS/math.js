function addition_Function() {
    var Addition = 2+2;
    document.getElementById("Math") .innerHTML = "2 + 2 = " + Addition;
}

function subtraction_Function() {
    var Subtraction = 6-4;
    document.getElementById("Math") .innerHTML = "6 - 4 = " + Subtraction;
}

function multiplication() {
    var simple_Math = 6*6;
    document.getElementById("Math") .innerHTML = "6 x 6  =" + simple_Math;
}

function division() {
    var simple_Math = 52/6;
    document.getElementById("Math") .innerHTML = "52 / 6 = " + simple_Math;
}

function more_Math() {
    var simple_Math = (1+2) * 10 / 2-5;
    document.getElementById("Math") . innerHTML = "1 plus 2, multiplied by 10, divided in half then subtracted by 5 equals: " + simple_Math;
}

function modulus_Operator() {
    var simple_Math = 25 % 6;
    document.getElementById("Math") .innerHTML = "When you divide 25 by 6, you will have a remainder of: " + simple_Math;
}

function negation_Operator() {
    var X = 10;
    document.getElementById("Math") .innerHTML = -X;
}

var X = 5;
X++;
document.write(X);

var X = 7;
X--;
document.write(X);

window.alert(Math.random() * 50);

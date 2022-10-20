
let output = document.getElementById("input");

// Get Numbers in input field**********************************
function numbers(num) {
    output.value += num;
}

// clear function *********************************************
function all_clearResult() {
    output.value = "";
}

//  delete number one by one *********************************
function deletebutton() {
    var remove = output.value;
    remove = remove.slice(0, -1);
    output.value = remove;
}


// calculate the numbers
function calculate() {
    let output = document.getElementById("input");
    output.value = eval(output.value)
}

// function Exponent ( ^ )---------------------------------------
function Exponent(expo){
    let output = document.getElementById("input");
    output.value +=expo;
}

// function square_root( √ )-----------------------------------
function square_root(){
    output.value =Math.sqrt(output.value);
}

// pi function-----------------------------------------------
function pi_func(){
    output.value=(output.value*Math.PI)
}

//  factorial function---------------------------------------------
function factorial(){
    let output = document.getElementById("input");
    let fact=1;
    for (var i = 1; i <= output.value; i++) {
        fact = fact * i;
        console.log(fact)
}
output.value = fact;
}











// let fact=1;
// function factorial(num) {
//     // let fact = 1;
//     for (var i = 1; i <= num; i++) {
//         fact = fact * i;
//     }
//     // return fact;
     
// }

// output.value = fact;


// console.log(getFact(5))

// function getFact(number) {
//     let fact = 1;
//     for (var i = 1; i <= number; i++) {
//         fact = fact * i;
//     }
//     return fact;
// }
// console.log(getFact(5))
function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function calculateResult() {
    const expression = document.getElementById("display").value;
    try {
        const result = eval(expression);
        document.getElementById("display").value = result;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}
function add(array){
    if (array.length === 0) return 0;
    let sum = 0;
    for (let i = 0; i < array.length; i++){
        sum += array[i];
    }
    return sum;
}
function subtract(array){
    if (array.length === 0) return 0;
    let differnce = array[0];
    for (let i = 1; i < array.length; i++){
        differnce =  differnce - array[i];
    }
    return differnce;
}
function multiply(array){
    if (array.length === 0) return 0;
    let product = 1;
    for (let i = 0; i < array.length; i++){
        product *= array[i];
    }
    return product;
}
function divide(array){
    if (array.length === 0) return 0;
    let quotient = array[0];
    for (let i = 1; i < array.length; i++) {
        quotient = quotient / array[i];
    }
    return quotient;
}


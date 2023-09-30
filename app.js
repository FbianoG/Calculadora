// VARIÁVEIS
let firstNumber = document.querySelectorAll('.first-number')[0]
let currentNumber = document.querySelectorAll('.current-number')[0]
let btnNumber = document.querySelectorAll('.number')
let btnFunction = document.querySelectorAll('.function')
let btnResult = document.querySelectorAll('.result')[0]
let btnClear = document.querySelectorAll('.clear')[0]
let btnPoint = document.querySelectorAll('.point')[0]
let funct = ''
let del = document.querySelectorAll('.del')[0]



//  EVENTOS
btnNumber.forEach(element => {
    element.addEventListener('click', click)
});

btnFunction.forEach(element => {
    element.addEventListener('click', func)
    console.log('foiiii');
});

del.addEventListener('click', delet)

btnResult.addEventListener('click', result)

btnClear.addEventListener('click', clear)

btnPoint.addEventListener('click', pointer)



// FUNÇÕES
function click(e) {
    let number = e.target.textContent
    firstNumber.textContent = firstNumber.textContent + number
}

function delet() {
    let arrayNumber = firstNumber.textContent.split('')
    arrayNumber.pop()
    firstNumber.textContent = arrayNumber.join('')
}

function func(e) {
    console.log('foi');
    currentNumber.textContent = firstNumber.textContent
    firstNumber.textContent = ''
    funct = e.target.textContent
}

function result() {
    console.log(funct);
    let result
    if (funct == "+") {
        result = Number(currentNumber.textContent) + Number(firstNumber.textContent)
    } else if (funct == "-") {
        result = Number(currentNumber.textContent) - Number(firstNumber.textContent)
    } else if (funct == "X") {
        result = Number(currentNumber.textContent) * Number(firstNumber.textContent)
    } else if (funct == "%") {
        result = Number(currentNumber.textContent) / Number(firstNumber.textContent)
    }
    currentNumber.textContent = firstNumber.textContent
    firstNumber.textContent = result
}

function clear() {
    currentNumber.textContent = ''
    firstNumber.textContent = ''
    func = ''
}

function pointer(e) {
    let verific = firstNumber.textContent.includes('.')
    if (verific == false) {
        click(e)
    } else {
        console.log("O número já possui um ponto");
        return
    }
}
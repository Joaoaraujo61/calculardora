const res = document.querySelector('div#resultado')
const [zero, one, two, three, four, five, six, seven, eight, nine] = document.querySelectorAll('#zero, #um, #dois, #tres, #quatro, #cinco, #seis, #sete, #oito, #nove')
const num = [zero, one, two, three, four, five, six, seven, eight, nine]
var dbNum = []

const backSpace = document.getElementById('delete')
const sum = document.getElementById('adicao')
const sub = document.getElementById('sub')
const div = document.getElementById('divisao')
const mult = document.getElementById('mult')
const percent = document.getElementById('porcent')
const poten = document.getElementById('potencia')
const root = document.getElementById('raiz')
const equal = document.getElementById('equal')

sum.addEventListener('click', printCarac)
sub.addEventListener('click',printCarac)
div.addEventListener('click',printCarac)
mult.addEventListener('click',printCarac)
percent.addEventListener('click',printCarac)
poten.addEventListener('click',printCarac)
root.addEventListener( 'click',printCarac)
equal.addEventListener('click', funcEqual)

var oper = ['+', '-', '*', '÷', '%', '**', '√']
var lastChar = dbNum[dbNum.length - 1]

num.forEach(button =>{
    button.addEventListener('click', print)
})

backSpace.addEventListener('click', apagar)


var output 
function print(){
    dbNum.push(this.value)
    output = dbNum.join('')
    res.innerHTML = output
}
function apagar(){
    dbNum.pop()
    output = dbNum.join('')
    res.innerHTML = output
}

function printCarac(){
    let lastChar = dbNum[dbNum.length - 1]
    
    if(lastChar == this.value){
        return
    }else if(dbNum.length == 0){
        return
    }else if(oper.includes(lastChar)){
        return
    }else{
        if(this.value === '×'){
            dbNum.push('*')
        }else if(this.value === 'x²'){
            dbNum.push('**')
        }else {
            dbNum.push(this.value)
        }
        output = dbNum.join('')
        res.innerHTML = output
    }
}

function funcEqual(){
    let n = 0
    let numOper = []
    let fOper = []
    let currentNum = ''
    let currentOp = ''
    while(n < dbNum.length){
        while(!isNaN(dbNum[n]) && dbNum[n] !== " "){
            currentNum += String(dbNum[n])
            n++
        }
        if(isNaN(dbNum[n]) && dbNum[n] !== ' '){
            currentOp = dbNum[n]
            fOper.push(currentOp)
            currentOp = ''
        }
        if(currentNum !== ''){
            numOper.push(Number(currentNum))
            currentNum = ""
        }
        n++
        
    }
    let result = verifyOp(fOper, numOper)
    res.innerHTML = result;
    dbNum = [String(result)];
}

function verifyOp(fOper, numOper) {
    // Primeira passagem: operações de alta precedência
    for (let i = 0; i < fOper.length; i++) {
        switch (fOper[i]) {
            case '%':
                numOper[i] = numOper[i] / 100;
                break;
            case '**':
                numOper[i] = Math.pow(numOper[i], 2);
                break;
            case '√':
                numOper[i] = Math.sqrt(numOper[i]);
                break;
            case '*':
                numOper[i] *= numOper[i + 1];
                numOper.splice(i + 1, 1);
                fOper.splice(i, 1);
                i--;
                break;
            case '÷':
                numOper[i] /= numOper[i + 1];
                numOper.splice(i + 1, 1);
                fOper.splice(i, 1);
                i--;
                break;
        }
    }

    // Segunda passagem: operações de baixa precedência
    let result = numOper[0];
    for (let i = 0; i < fOper.length; i++) {
        switch (fOper[i]) {
            case '+':
                result += numOper[i + 1];
                break;
            case '-':
                result -= numOper[i + 1];
                break;
        }
    }
    return result;
}


/*
function divis(numOper){
    let result = Number(numOper[0])
    for(let i=1;i < numOper.length;i++){
        result /= Number(numOper[i])
    }
    res.innerHTML = result
}

function multip(numOper){
    let result = Number(numOper[0])
    for(let i=1;i < numOper.length;i++){
        result *= Number(numOper[i])
    }
    res.innerHTML = result
}

function porcen(){
    let lastChar = dbNum[dbNum.length - 1]
    let resPorcen = dbNum[lastChar-1] + dbNum[lastChar+1]
}

function potencial(){
    let lastChar = dbNum[dbNum.length - 1]
    let resPot = dbNum[lastChar-1] + dbNum[lastChar+1]
}

function raiz(){
    let lastChar = dbNum[dbNum.length - 1]
    let resRoot = dbNum[lastChar-1] + dbNum[lastChar+1]
}*/
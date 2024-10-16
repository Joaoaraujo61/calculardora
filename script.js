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

var oper = [sum.value, sub.value, div.value, mult.value, percent.value, poten.value, root.value]
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
        dbNum.push(this.value)
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
    document.write(fOper[0] + ' 4' + fOper[1])
}
    /*
    n2 = dbNum.length - 1
    let lastNum = ""
    while(n2 >= 0 && !isNaN(dbNum[n2])){

/*
function soma(){
    let lastChar = dbNum[dbNum.length - 1]
    let resSoma= dbNum[lastChar-1] + dbNum[lastChar+1]
}
function subtr(){
    let lastChar = dbNum[dbNum.length - 1]
    let resSub = dbNum[lastChar-1] - dbNum[lastChar+1]
}

function divis(){
    let lastChar = dbNum[dbNum.length - 1]
    let resDiv = dbNum[lastChar-1] / dbNum[lastChar+1]
}

function multip(){
    let lastChar = dbNum[dbNum.length - 1]
    let resMult = dbNum[lastChar-1] * dbNum[lastChar+1]
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
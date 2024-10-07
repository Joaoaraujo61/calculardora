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

sum.addEventListener('click', printCarac, soma)
sub.addEventListener('click',printCarac, subtr)
div.addEventListener('click',printCarac, divis)
mult.addEventListener('click',printCarac, multip)
percent.addEventListener('click',printCarac, porcen)
poten.addEventListener('click',printCarac, potencial)
root.addEventListener( 'click',printCarac, raiz)

var oper = [sum.value, sub.value, div.value, mult.value, percent.value, poten.value, root.value]

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

function soma(){
      
}

function subtr(){

}

function divis(){

}

function multip(){

}

function porcen(){

}

function potencial(){

}

function raiz(){

}
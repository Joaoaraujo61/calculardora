const res = document.querySelector('div#resultado')
const [zero, one, two, three, four, five, six, seven, eight, nine] = document.querySelectorAll('#zero, #um, #dois, #tres, #quatro, #cinco, #seis, #sete, #oito, #nove')
const num = [zero, one, two, three, four, five, six, seven, eight, nine]
var dbNum = []

const backSpace = document.getElementById('delete')

num.forEach(button =>{
    button.addEventListener('click', print)
})

backSpace.addEventListener('click', apagar)
var output = 0

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
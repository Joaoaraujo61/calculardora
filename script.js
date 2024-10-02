
const del= document.getElementById('delete')
const res = document.querySelector('div#resultado')
const [zero, one, two, three, four, five, six, seven, eight, nine] = document.querySelectorAll('#zero, #um, #dois, #tres, #quatro, #cinco, #seis, #sete, #oito, #nove')
const num = [zero, one, two, three, four, five, six, seven, eight, nine]
var dbNum = []

num.forEach(button =>{
    button.addEventListener('click', print)
})

function print(){
    dbNum.push(this.value)
    let output = ''
    for(let pos in dbNum){
        output += dbNum[pos]
        res.innerHTML = output
    }
    Number(output)
}
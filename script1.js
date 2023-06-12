const password = document.getElementById('password')
const background = document.getElementById('background')
let numberLen = 0
let symbolLen = 0
let charLen = 0
let prevLen = 0


password.addEventListener('input', (e) => {
    const input = e.target.value
    const length = input.length
    /*if(prevLen>length){
        numberLen--
        prevLen--
    }
    if(length>prevLen) {
        prevLen=length
        if (Number(input[length - 1])) numberLen++

    }
    if(numberLen<0) numberLen=0;
    console.log(numberLen)
    console.log('prevLen: '+ prevLen)
    diff = Math.min(length * 2, (numberLen + symbolLen) * 2)
    if (numberLen >= 3 && symbolLen >= 2) diff = length * 2*/
    const blurvalue = 24 - length*2
    background.style.filter = `blur(${blurvalue}px)`
})
function getRandomLetter(a,b){
    return String.fromCharCode(Math.floor(Math.random()*a)+ b)
}

function getRandomSymbol(){
    const symbols='!@#$%^&*(){}[]=<>/,.?~'
    return symbols[Math.floor(Math.random()*symbols.length)]
}

const resultEl = document.getElementById('result')
const lengthEl = document.getElementById('length')
const uppercaseEl = document.getElementById('uppercase')
const lowercaseEl = document.getElementById('lowercase')
const numbersEl = document.getElementById('numbers')
const symbolsEl = document.getElementById('symbols')
const generateEl = document.getElementById('generate')
const clipboardEl = document.getElementById('clipboard')

const randomFunc = {
    lower: [26,97],
    upper: [26,65],
    number: [10,48],
}

clipboardEl.addEventListener('click', () => {
    const textarea = document.createElement('textarea')
    const password = resultEl.innerText
    if(!password || password==='Please marke boxes' || password==='Enter length between 4-20') return

    textarea.value=password
    document.body.appendChild(textarea)
    textarea.select()
    document.execCommand('copy')
    textarea.remove()
    alert('Password copied to clipboard!')
})

generateEl.addEventListener('click', () => {
    const length=+lengthEl.value
    const hasLower = lowercaseEl.checked
    const hasUpper = uppercaseEl.checked
    const hassymbol = symbolsEl.checked 
    const hasnumber = numbersEl.checked  
    resultEl.innerText = generatePassword(hasLower, hasUpper, hasnumber, hassymbol, length)
})

function generatePassword(lower, upper, number, symbol, length){
    let generatedPassword=''
    const typesCount = lower+upper+number+symbol
    const typesArr =[{lower}, {upper}, {number}, {symbol}].filter(item => Object.values(item)[0])
    if(typesCount===0){
        alert('Please marke boxes')
        return 'Please marke boxes'        
    }
    else if(length<4 || length>20) {
        alert('Enter length between 4-20')
        return 'Enter length between 4-20'
    }

    for(let i=0; i < length; i+=typesCount){
        typesArr.forEach(type =>{
            const FuncName = Object.keys(type)[0]
            if(FuncName!='symbol') generatedPassword += getRandomLetter(randomFunc[FuncName][0],randomFunc[FuncName][1])
            else generatedPassword += getRandomSymbol();
        })
    }

    const finalPassword = generatedPassword.slice(0,length)
    return finalPassword
}


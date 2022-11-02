let keysDisplay = document.querySelector('.keys')
let row1Display = document.querySelector('.row1')
let row2Display = document.querySelector('.row2')
let row3Display = document.querySelector('.row3')
let disPlay = document.querySelector('.input')
let winButton = document.querySelector('.retry')
let dis1 = document.querySelector('#in1')
let dis2 = document.querySelector('#in2')
let dis3 = document.querySelector('#in3')
let dis4 = document.querySelector('#in4')
let dis5 = document.querySelector('#in5')
let count = 0
let wins = 0
const row1  = ['Q','W','E','R','T','Y','U','I','O','P']
const row2 = ['A','S','D','F','G','H','J','K','L','RETRY']
const row3 = ['Z','X','C','V','B','N','M']
let wordArr = ['W','A','L','I','D']
let inputArr = []
const winWord = 'WALID'

  let di 
  function write(){
    row1.forEach(function(key){
        di = document.createElement('button')
        di.setAttribute('class', 'row-butt')  
        di.addEventListener('click', type)      
        di.textContent = key
        row1Display.append(di)
    })
    row2.forEach(function(key){
        di = document.createElement('button')
        di.setAttribute('class', 'row-butt')
        di.addEventListener('click', type)     
        di.textContent = key
        row2Display.append(di)
       
    })
    row3.forEach(function(key){
        di = document.createElement('button')
        di.setAttribute('class', 'row-butt')    
        di.addEventListener('click', type)      
        di.textContent = key
        row3Display.append(di)
      
    })
}
write()


function type(e){
    targ = e.target
    inputArr.push(targ.textContent)
    dis1.textContent = inputArr[0]
    dis2.textContent = inputArr[1]
    dis3.textContent = inputArr[2] 
    dis4.textContent = inputArr[3]
    dis5.textContent = inputArr[4] 
  
    if(targ.textContent === 'RETRY'){
       retry()
    }
    ifWon()
    checkWins()
    checkLoses()
  
    console.log(inputArr); 
    console.log(wins); 
    
}

function checkWins(){
if(inputArr[0]===wordArr[0]){
    dis1.classList.add('good')
}
if(inputArr[1]=== wordArr[1]){
    dis2.classList.add('good')
}
if(inputArr[2]=== wordArr[2]){
    dis3.classList.add('good')
}
 if(inputArr[3]=== wordArr[3]){
    dis4.classList.add('good')
}
if(inputArr[4]=== wordArr[4]){
    dis5.classList.add('good')
}


}
function checkLoses(){
    if(inputArr.length>=1 &&  inputArr[0]!== wordArr[0]){
        dis1.classList.add('bad')
    }
    if( inputArr.length>=2 &&  inputArr[1]!== wordArr[1]){
        dis2.classList.add('bad')
    }
    if(inputArr.length>=3 &&  inputArr[2]!== wordArr[2]){
        dis3.classList.add('bad')
        
    }
     if(inputArr.length>=4 &&  inputArr[3]!== wordArr[3]){
        dis4.classList.add('bad')
       
    }
    if(inputArr.length>=5 &&  inputArr[4]!== wordArr[4]){
        dis5.classList.add('bad')

    }
}
function retry(){
    count = count +2 
    dis1.textContent =' '
    dis2.textContent = ' '
    dis3.textContent = ' '
    dis4.textContent = ' '
    dis5.textContent = ' '
    inputArr = []
    dis1.classList.remove('good')
    dis2.classList.remove('good')
    dis3.classList.remove('good')
    dis4.classList.remove('good')
    dis5.classList.remove('good')
    dis1.classList.remove('bad')
    dis2.classList.remove('bad')
    dis3.classList.remove('bad')
    dis4.classList.remove('bad')
    dis5.classList.remove('bad')
    wins = 0
    console.log(count);
    tries()
    
}

function tries(){
    winButton.classList.add('scores')
    if(count<= 1){
        winButton.textContent = count  +' '+ 'try'}
    else{
          winButton.textContent = count  +' '+ 'tries'}
    }
  
function ifWon(){
    if(inputArr.length === 5 && winWord === answer){
        alert('YOU WIN')
    }
   
}
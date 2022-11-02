let keysDisplay = document.querySelector('.keys')
let row1Display = document.querySelector('.row1')
let row2Display = document.querySelector('.row2')
let row3Display = document.querySelector('.row3')
let disPlay = document.querySelector('.input')
let winButton = document.querySelector('.retry')
let hint = document.querySelector('.hint')
let info = document.querySelector('.info')
let dis1 = document.querySelector('#in1')
let dis2 = document.querySelector('#in2')
let dis3 = document.querySelector('#in3')
let dis4 = document.querySelector('#in4')
let dis5 = document.querySelector('#in5')
let nextButton = document.createElement('button')
let count = 0
let wins = 0
let it = -1
elle =  document.createElement('div')
elle.classList.add('results')
let qaArray = [
    {
    question:'Embrace, Accept',
    answer: ['A','D','O','P','T']
},
    {
    question:'Greater than',
    answer: ['A','B','O','V','E']
},
    {
    question:'Grown-up, Mature',
    answer: ['A','D','U','L','T']
},
    {
    question:'Short',
    answer: ['B','R','I','E','F']
},
    {
    question:'Deepness, ',
    answer: ['D','E','P','T','H']
},
    {
    question:'The same, ',
    answer: ['E','Q','U','A','L']
},
    {
    question:'Protect, Security',
    answer: ['G','U','A','R','D']
},
    {
    question:'12, ',
    answer: ['D','O','Z','E','N']
},
    {
    question:'Mistake, Bad',
    answer: ['E','R','R','O','R']
},
    {
    question:'Big, Huge',
    answer: ['L','A','R','G','E']
},
    {
    question:'Force, Influence ',
    answer: ['P','O','W','E','R']
},
    {
    question:'Talk, express',
    answer: ['S','P','E','A','K']
},
    {
    question:'Snooze, siesta',
    answer: ['S','L','E','E','P']
},
    {
    question:'Employees, Office',
    answer: ['S','T','A','F','F']
},
    {
    question:'Pathway, Runners',
    answer: ['T','R','A','C','K']
},
    {
    question:'Monarch, Crown ',
    answer: ['Q','U','E','E','N']
},
    {
    question:'Form, build',
    answer: ['S','H','A','P','E']
},
    {
    question:'Waterway, Nile',
    answer: ['R','I','V','E','R']
},
    {
    question:'Dish, bowl',
    answer: ['P','L','A','T','E']
},
    {
    question:'Fast, Supercars',
    answer: ['S','P','E','E','D']
},
    {
    question:'Smart, Razor',
    answer: ['S','H','A','R','P']
},
    {
    question:'Runway, Celebrity',
    answer: ['M','O','D','E','L']
},
    {
    question:'Ballet, Club',
    answer: ['D','A','N','C','E']
},
    {
    question:'Sapa, Damage',
    answer: ['B','R','O','K','E']
},
    {
    question:'Star Wars, Brute',
    answer: ['F','O','R','C','E']
},
    {
    question:'BreakFast, Dinner',
    answer: ['L','U','N','C','H']
},
    {
    question:'Solo, Single',
    answer: ['A','L','O','N','E']
},
    {
    question:' Italy , Meal',
    answer: ['P','I','Z','Z','A']
},
    {
    question:'Sci-Fi, beam', 
    answer: ['L','A','S','E','R']
},
   
]
qaArray.sort(() => 0.5 - Math.random())
console.log(qaArray);

const row1  = ['Q','W','E','R','T','Y','U','I','O','P']
const row2 = ['A','S','D','F','G','H','J','K','L','RETRY']
const row3 = ['Z','X','C','V','B','N','M']
let wordArr 
let inputArr = []
  let di 
  function write(){
    it = it+1
    console.log(it);
    hint.textContent = qaArray[it].question
    wordArr = qaArray[it].answer
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
    
    checkWins()
    checkLoses()
    if(inputArr.length === 5){
       ifWon()
    }
  
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
    count = count +1
    clean()
    tries()
    
}

function tries(){
    winButton.classList.add('scores')
    if(count<= 1){
        winButton.textContent = count  +' '+ 'retry'}
    else{
          winButton.textContent = count  +' '+ 'retries'}
    }
  
function ifWon(){
        for(i =0; i<5; i++){
        if(inputArr[i]===wordArr[i]){
            wins++
        }
    }   

    if(wins >= 5){
        elle.style.color = 'green'
        elle.textContent = 'YOU GOT ALL  LETTERS RIGHT!'
        document.body.appendChild(elle)
    
        next()
}
    else if(wins === 0){
        elle.style.color = 'red'
        elle.textContent = 'YOU GOT ALL 5 LETTERS WRONG,'
        document.body.appendChild(elle)
    }
    else{  
    elle.style.color = 'red'
    elle.textContent = 'YOU GOT '+(5-wins)+' LETTERS WRONG,'
    document.body.appendChild(elle)

}

}
function next(){
   
    nextButton.textContent = 'NEXT'
    nextButton.classList.add('row-butt')
    nextButton.style.backgroundColor = 'orange'
    nextButton.onclick= newOne
    row3Display.appendChild(nextButton)
}

function newOne(){
    if(it<=qaArray.length){
     clean()
    it = it+1
    hint.textContent = qaArray[it].question
    wordArr = qaArray[it].answer
    }
    else{
    clean()
    it= 0
    hint.textContent = qaArray[it].question
    wordArr = qaArray[it].answer
    }
   
}
function clean(){
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
    nextButton.remove()
    elle.remove()
    console.log(count);
}
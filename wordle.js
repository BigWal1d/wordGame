let keysDisplay = document.querySelector('.keys')
let row1Display = document.querySelector('.row1')
let row2Display = document.querySelector('.row2')
let row3Display = document.querySelector('.row3')
let disPlay = document.querySelector('.input')
let winButton = document.querySelector('.enter')
let dis1 = document.querySelector('#in1')
let dis2 = document.querySelector('#in2')
let dis3 = document.querySelector('#in3')
let dis4 = document.querySelector('#in4')
let dis5 = document.querySelector('#in5')
const row1  = ['Q','W','E','R','T','Y','U','I','O','P']
const row2 = ['A','S','D','F','G','H','J','K','L','CLEAR']
const row3 = ['Z','X','C','V','B','N','M']
let wordArr = ['W','A','L','I','D']
let inputArr = []
  let di 
//   let guess1 = 'WALID'
//   let guess2 = 'SUPOL'
//   let guess3 = 'MANGA'
//   let guess4 = 'ZARMA'
//   let guess5 = 'WWALID'
//   let guess6 = 'WWALID'
//   let guess7 = 'WWALID'
//   let guess8 = 'WWALID'
//   let guess9 = 'WWALID'
//   let guess10 = 'WWALID'

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
    dis1.innerHTML = dis1.textContent +  targ.textContent
   
    // if(count>5){
    //     counter = []
    //     disPlay.textContent = ' ' 
    //     count = 0
    // } 
    // else if(targ.textContent === 'CLEAR')  {
    //     counter = []
    //     disPlay.textContent = ' ' 
    //     count = 0
    // }
    // else if(disPlay.textContent === 'WALID'){
    //     alert('CONGRATS YOU  FOUND THE WORD')
    //     disPlay.textContent = ' ' 
    //     count = 0

    // }
    // else{
    //     disPlay.textContent = disPlay.textContent+targ.textContent
        
    // }
    console.log(inputArr);
    
     
}

// function won(){
//     let enter = document.createElement('button')
//     enter.textContent =  'ENTER'
//     enter.addEventListener('click', function(){
//         let sum = counter[0] +counter[1] + counter[2] + counter[3] + counter[4] 
//         if (sum === guess1)
//         {
//             alert('you win')
//         }
//         else if (sum === guess2){
//             alert('you win')
//         }
//         else if (sum === guess3){
//             alert('you win')
//         }
//         else
//         {
//             alert('try again')
//         }
//     } )
//     winButton.prepend(enter)
    

// }
// won()


   
   
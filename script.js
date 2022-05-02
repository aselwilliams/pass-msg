const submitBtn = document.querySelector('#submit-btn');
const inputTxt = document.querySelector('#input-text');
const outputTxt = document.querySelector('#output-text');
let divEl = document.querySelector('.lower');

function logMsg() {
   inputValue = inputTxt.value;

    outputTxt.innerText = inputValue;  

   if(inputValue!=='') {  
    inputTxt.value="";
   }

   if(inputValue === '') {
      const popUp=document.createElement('pre');
      popUp.setAttribute('class','red-msg');
      
      // divEl=popUp.parentNode;
      divEl.appendChild(popUp);
      console.log(popUp)
      popUp.innerText = 'Please Enter A Value To Pass';

      setTimeout(function() {
         popUp.style.display = "none";
      }, 2000)
   }   
}

submitBtn.addEventListener('click',logMsg);
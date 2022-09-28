const inputs = document.querySelectorAll('.calc-inputs');
const answer = document.querySelector('#ans-input');
const display = document.querySelector('#display');
const allClear = document.querySelector('#ac-input');
const clear = document.querySelector('#c-input');
let operation = '';

allClear.addEventListener('click', ()=>{
    operation = '';
    display.value = '';
})

clear.addEventListener('click', ()=>{
    // console.log('before',operation)
    operation = operation.replace(operation.charAt(operation.length-1),'');
    // console.log('after',operation)
    display.value = operation;
})

inputs.forEach(e=>{
    e.addEventListener('click',()=>{
  
        operation = operation + e.innerText;
        display.value = operation
  

    })
})

answer.addEventListener('click', ()=>{

    try{
    const ans = eval(operation);
    display.value = ans;
    operation = ans;

    // console.log(ans)
    }
    catch(err){
        // console.log(err)
        display.value = "**/Invalid Input**/";
        operation = ''
    }

})
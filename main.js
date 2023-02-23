const elForm =document.querySelector(".form")
const elInput =document.querySelector(".choose")
const elResult =document.querySelector(".result")



elForm.addEventListener(`submit`, (e) =>{
    e.preventDefault()
    const result = elInput.value;
    if(result % 3 === 0 && result % 5 === 0){
        elResult.textContent = "fizz-bazz";
    }
    else if(result % 3 === 0){
        elResult.textContent = "fizz";
    }
    else if(result % 5 === 0){
        elResult.textContent = "buzz";
    }else{
        elResult.textContent = result;
    }
})
const number1=document.querySelector("#number1");
const number2=document.querySelector("#number2");
const number3=document.querySelector("#number3");
const btnVerify=document.querySelector("#btnVerify");
const submitMessage=document.querySelector("#submitMessage");
const linkToNext=document.querySelector("#linkToNext");

linkToNext.style.visibility="hidden";

btnVerify.addEventListener("click", ()=>{

let inputNumber1=number1.value;
let inputNumber2=number2.value;
let inputNumber3=number3.value;

linkToNext.style.visibility="visible";

if (+inputNumber1===9 && +inputNumber2===1 && +inputNumber3===1) {
    submitMessage.textContent="El Password 1 es correcto. ¡Bienvenido!";
return;
}

if(+inputNumber1===7 && +inputNumber2===1 && +inputNumber3===4) {
    submitMessage.textContent="El Password 2 es correcto. ¡Bienvenido!";
return;
}

submitMessage.textContent="El Password Incorrecto. Vuelva a intentarlo.";    
})

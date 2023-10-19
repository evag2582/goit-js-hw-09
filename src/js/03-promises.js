const delay = document.querySelector("input[name='delay']");
const delayStep = document.querySelector("input[name='step']");
const amount = document.querySelector("input[name='amount']");
const formReg = document.querySelector(".form");

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
   if (shouldResolve) {
     // Fulfill
   } else {
     // Reject
   }
 }

 formReg.addEventListener("submit", createPromise(position, delay));


  // e.preventDefault();
  // const {
  //   elements: { delay, step, amount }
  // } = e.currentTarget;
  // console.log(delay.value, step.value, amount.value); 


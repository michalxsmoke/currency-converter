let amountElement=document.querySelector(".js-amount");
let formElement=document.querySelector(".js-form");
let resultElement=document.querySelector(".js-result");
let currencyEur=4.62;
let currencyPln=0.22;


formElement.addEventListener("submit", (event) => {
    event.preventDefault();
    let amount=amountElement.value;
    let result=amount/currencyEur;
    resultElement.innerText = `${result.toFixed(2)} €`;
});
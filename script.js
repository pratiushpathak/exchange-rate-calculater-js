const currencyEl_one=document.getElementById('currency-1');
const currencyEl_two=document.getElementById('currency-2');
const amountEl_one=document.getElementById('ammount-1');
const amountEl_two=document.getElementById('ammount-2');
const rateEl=document.getElementById('rate');
const swap=document.getElementById('swap');

function calculate()
{
  const currency_one=currencyEl_one.value;
  const currency_two=currencyEl_two.value
//console.log(currency_one,currency_two);
fetch(` https://v6.exchangerate-api.com/v6/39df8825d1f53b32522f274a/latest/${ currency_one}`)
.then(res=>res.json())
.then(data=>{
 // console.log(data);
  
  const rate=data.conversion_rates
  [currency_two];
 
rateEl.innerText=`1${currency_one} =${rate} ${currency_two}`
amountEl_two.value=(amountEl_one.value*rate).toFixed(2)
  
})

}
//event listeners
currencyEl_one.addEventListener('change',calculate)
amountEl_one.addEventListener('input',calculate)
currencyEl_two.addEventListener('change',calculate)
amountEl_two.addEventListener('input',calculate)
swap.addEventListener('click',()=>{
  const temp=currencyEl_one.value;
  currencyEl_one.value=currencyEl_two.value;
  currencyEl_two.value=temp;
  calculate();
})


calculate( )
let billAmount = document.getElementById('billAmount')
let tipPercentage =document.getElementById('tipPercentage')
let tipAmount =document.getElementById('tipAmount')
let total = document.getElementById('total') 
let erroeMssage = document.getElementById('erroeMssage')

let erroeMsg = 'Plese Enter a Valid Input.'


function onClickBtn(){ 
    let billAmountValue = billAmount.value 
    let tipPercentageValue = tipPercentage.value


    //console.log(typeof(billAmountValue),tipPercentageValue)
    if(billAmountValue === ''){
        erroeMssage.textContent = erroeMsg
    }else if(tipPercentageValue === ''){
        erroeMssage.textContent = erroeMsg
    }else{
        let bill = parseInt(billAmountValue)
        let tipPerc = parseInt(tipPercentageValue)
        
        let caliculatedTip = (tipPerc / 100) * bill; 
        let caliculatedTotalBill = (bill + caliculatedTip); 

        tipAmount.value = caliculatedTip 
        total.value = caliculatedTotalBill
    }

}
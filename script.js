

// ==============================================Code with function================================

document.getElementById('btn').addEventListener('click', function(){
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = "none";
    const amountArea = document.getElementById('amount-area');
    amountArea.style.display = "block";
})


// deposit button handler 
document.getElementById('addDeposit').addEventListener('click', function(){
    const depositNumber = getInputValue("depositAmount");

    updateSpanText("currentDeposit", depositNumber);
    updateSpanText("currentBalance", depositNumber);
    
    document.getElementById('depositAmount').value = "";
})


// withdraw button handler 
document.getElementById('addWithdraw').addEventListener('click', function(){
    const withdrawNumber = getInputValue("withdrawAmount");

    updateSpanText("currentWithdraw", withdrawNumber);
    updateSpanText("currentBalance", -1*withdrawNumber);
    
    document.getElementById('withdrawAmount').value = "";
})






// =========get input function ==========
function getInputValue(id){
    const amount = document.getElementById(id).value;
    const number = parseFloat(amount);
    return number;
}

// ==========update span text function=======
function updateSpanText(id,Number){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = currentNumber + Number;
    document.getElementById(id).innerText = totalAmount;
}
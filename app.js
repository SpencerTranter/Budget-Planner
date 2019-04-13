const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const cancelButton = document.querySelector('#button-cancel');
const confirmButton = document.querySelector('#button-confirm');
const expensesList = document.querySelector('#expenses-list');
const totalExpensesOutput = document.querySelector('#total-expenses');
const alertController = document.querySelector('ion-alert-controller');

let totalExpenses = 0;

const clear = () => {
    reasonInput.value = '';
    amountInput.value = '';
}

confirmButton.addEventListener('click', () => {
    const enteredReason = reasonInput.value;
    const enteredAmount = amountInput.value;

    if (
        enteredReason.trim().length <= 0 ||
        enteredAmount.length <= 0 || 
        enteredAmount.trim().length <= 0
    ) {
        alertController.create({
            message: 'Please enter a valid reason and amount', 
            header: 'Invalid Inputs',
            buttons: ['Okay']
        }).then(alertElement => alertElement.present());
        return;
    }

    const newItem = document.createElement('ion-item');
    newItem.textContent = enteredReason + ': $' + enteredAmount;

    expensesList.appendChild(newItem);
    
    totalExpenses += +enteredAmount;
    totalExpensesOutput.textContent = "$" + totalExpenses;

    clear();
})

cancelButton.addEventListener('click', clear);
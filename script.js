let expenses=[];
let totalamount=0;
const categorySelect = document.getElementById('category-select');
const amountinput=document.getElementById('amount-input');
const dateinput=document.getElementById('date-input');
const addBtn = document.getElementById('add-btn');
const expensestablebody=document.getElementById('expense-table-body');
const totalamountcell = document.getElementById('total-amount');

addBtn.addEventListener('click',function(){
    const category=categorySelect.value;
    const amount= Number(amountinput.value);
    const date= dateinput.value;

    if(category ===''){
        alert('please select a category')
        return;
    }
    if(isNaN(amount)|| amount<=0){
        alert('please enter a valid amount')
        return;
    }
    if(date===''){
        alert('please select a date')
        return;
    }
    expenses.push({category,amount,date});
    totalamount += amount;
    totalamountcell.textContent=totalamount;

    const newRow= expensestablebody.insertRow();
    const categoryCell=newRow.insertCell();
    const amountCell=newRow.insertCell();
    const dateCell=newRow.insertCell();
    const deleteCell= newRow.insertCell();
    const deleteBtn=document.createElement('button');

    deleteBtn.textContent='Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click',function(){
        expenses.splice(expenses.indexOf(expense),1);

        totalamount-=expense.amount;
        totalamountcell.textContent=totalamount;
        expensestablebody.removeChild(newRow);

    });
const expense=expenses[expenses.length-1];
categoryCell.textContent=expense.category;
amountCell.textContent=expense.amount;
dateCell.textContent=expense.date;
deleteCell.appendChild(deleteBtn);
});

for (const expense of expenses){
    totalamount+=expense.add;
    totalamountcell.textContent=totalamount;
    const newRow=expensestablebody.insertRow();
    const categoryCell=newRow.insertCell();
    const amountCell=newRow.insertCell();
    const dateCell=newRow.insertCell();
    const deleteCell= newRow.insertCell();
    const deleteBtn=document.createElement('button');
    deleteBtn.textContent='Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click',function(){
        expenses.splice(expenses.indexOf(expense),1);

        totalamount-=expense.amount;
        totalamountcell.textContent=totalamount;
        expensestablebody.removeChild(newRow);

    });
    
categoryCell.textContent=expense.category;
amountCell.textContent=expense.amount;
dateCell.textContent=expense.date;
deleteCell.appendChild(deleteBtn);
}
'use strict';

document.addEventListener("DOMContentLoaded", function() {
    let budget = +prompt('Ваш бюджет на месяц?', ''),
        date = prompt('Введите дату в формате YYYY-MM-DD', 'YYYY-MM-DD'),
        appData = {
          budget: budget,
            timeData: date,
            expenses: {},
            optionalExpenses: {},
            income: [],
            savings: false
        };
    for (let i = 0; i < 2; i++) {
        let expensesItem =  prompt('Введите обязательную статью расходов в этом месяце', ''),
            expensesCost =  +prompt('Во сколько обойдется?', '');
        appData.expenses[expensesItem] = expensesCost;
    }

    console.log(budget);
    console.log(appData);

    let budgetMonth = appData.budget;
    document.getElementById('budgetMonth').value = budgetMonth / 30;

});
'use strict';

document.addEventListener("DOMContentLoaded", function() {
    let budget = +prompt('Ваш бюджет на месяц?', ''),
        name = prompt('Название вашего магазина?', ''),
        mainList = {
          budget: budget,
            name: name,
            shopGoods: [],
            employers: {},
            open: true
        };
    for (let i = 0; i<=2; i++) {
        mainList.shopGoods[i] = prompt('Какой тип товаров будем продавать?', '');
    }

    console.log(budget);
    console.log(name);
    console.log(mainList);

    let budgetMonth = mainList.budget;
    document.getElementById('budgetMonth').value = budgetMonth / 30;

});
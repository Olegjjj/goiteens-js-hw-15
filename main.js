// 1.
// Напиши скрипт, який, для об'єкта user, послідовно:
// додає поле mood зі значенням 'happy'
// замінює значення hobby на 'skydiving'
// замінює значення premium на false
// виводить вміст об'єкта user в форматі ключ:значення використовуючи Object.keys() і for...of
const user = {
    name: "Mango",
    age: 20,
    hobby: "HTML",
    premium: true
}
let {mood, hobby, premium} = user
mood = "happy";
hobby = "skydiving"
premium = false;
user.mood = "happy";
user.hobby = "skydiving"
user.premium = false;
const keys = Object.keys(user);
for (const key of keys) {
    console.log(key);
    console.log(user[key]);
}
// 2.
// Напиши функцію countProps(obj), яка рахує кількість властивостей в об'єкті. Функція повертає число — кількість властивостей.
const countProps = function(obj) {
    const keys = Object.keys(obj)
    return keys.length;
}
console.log(countProps({}));

console.log(countProps({ name: 'Mango', age: 2 }));

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 }));

// 3. 
// Напиши функцію findBestEmployee(employees), яка приймає об'єкт співробітників і повертає ім'я найпродуктивнішого (який виконав більше всіх задач). Співробітники і кількість виконаних завдань містяться як властивості об'єкта в форматі "ім'я":"кількість задач".
const findBestEmployee = function(employees) {
    let bestEmployee = '';
    let maxTasks = 0;
    for (const employee in employees) {
        const tasksCompleted = employees[employee];
        if (tasksCompleted > maxTasks) {
          maxTasks = tasksCompleted;
          bestEmployee = employee;
        }
    }
    return bestEmployee;
  };
console.log(
    findBestEmployee({
      ann: 29,
      david: 35,
      helen: 1,
      lorence: 99,
    }),
  );
  
  console.log(
    findBestEmployee({
      poly: 12,
      mango: 17,
      ajax: 4,
    }),
  );
  
  console.log(
    findBestEmployee({
      lux: 147,
      david: 21,
      kiwi: 19,
      chelsy: 38,
    }),
  );

// 4.
// Напиши функцію countTotalSalary(employees) приймаючу об'єкт зарплат. Функція рахує загальну суму зарплати працівників і повертає її. Кожне поле об'єкта, переданого в функцію, має вигляд "ім'я":"зарплата".
const countTotalSalary = function (employees) {
    const valuesEmployees = Object.values(employees)
    let total = 0;
    for (const valueEmployee of valuesEmployees) {
        total += valueEmployee; 
    }   
    return total;
  };
  console.log(countTotalSalary({})); 
  
  console.log(
    countTotalSalary({
      mango: 100,
      poly: 150,
      alfred: 80,
    }),
  ); 
  
  console.log(
    countTotalSalary({
      kiwi: 200,
      lux: 50,
      chelsy: 150,
    }),
  ); 
//   5.
//   Напиши функцію getAllPropValues(arr, prop), яка отримує масив об'єктів і ім'я властивості. Повертає масив значень певної властивості prop з кожного об'єкта в масиві. 
  const products = [
    { name: 'Radar', price: 1300, quantity: 4 },
    { name: 'Scanner', price: 2700, quantity: 3 },
    { name: 'Droid', price: 400, quantity: 7 },
    { name: 'Capture', price: 1200, quantity: 2 },
  ];
  
  const getAllPropValues = function (arr, prop) {
    const propValues = [];
    for (const item of arr) {
        const {name, price, quantity} = item;
      if (item.hasOwnProperty(prop)) {
        propValues.push(item[prop]);
      }
    }
  
    return propValues;
  };
  
  console.log(getAllPropValues(products, 'name'));
  
  console.log(getAllPropValues(products, 'quantity'));
  
  console.log(getAllPropValues(products, 'category'));
//   6.
//   Напиши функцію calculateTotalPrice(allProdcuts, productName), яка отримує масив об'єктів та ім'я продукту (значення властивості name). Повертає загальну вартість продукту (ціна * кількість).
//   Викличи функції для перевірки працездатності твоєї реалізації.
const productsTwo = [
    { name: 'Радар', price: 1300, quantity: 4 },
    { name: 'Сканер', price: 2700, quantity: 3 },
    { name: 'Дроїд', price: 400, quantity: 7 },
    { name: 'Захоплення', price: 1200, quantity: 2 },
  ];
  
  const calculateTotalPrice = function (allProdcuts, productName) {
    for (const {name, price, quantity} of allProdcuts) {
        if (name === productName) {
            return price * quantity;
          }
        }
    };
  
  console.log(calculateTotalPrice(productsTwo, 'Радар')); // 5200
  
  console.log(calculateTotalPrice(productsTwo, 'Дроїд')); // 2800

// 7.
// Напиши сценарій керування особистим кабінетом інтернет-банку. Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.
const Transaction = {
    DEPOSIT: 'deposit',
    WITHDRAW: 'withdraw',
  };
  
  const account = {
    balance: 0,
    transactions: [{id: 0, type: "deposit", amount: 0}],
  
    createTransaction(amount, type) {
      const transaction = { 
        id: this.transactions.length + 1, 
        type, 
        amount 
      };
      return transaction;
    },
  
    deposit(amount) {
      const {transactions} = this
      const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
      transactions.push(transaction);
      this.balance += amount;
      return console.log(`Ваш рахунок поповнено на ${amount}`);
    },
  
    withdraw(amount) {
      const {transactions} = this
      if (amount > this.balance) {
        console.log("Зняття такої суми неможливе, недостатньо коштів.");
        return;
      }
      const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
      transactions.push(transaction);
      this.balance -= amount;
      return console.log(`З рахунку знято ${amount}`);
    },
  
    getBalance() {
      const {balance} = this
      return balance
    },
  
    getTransactionDetails(id) {
      const {transactions} = this;
      for (const transaction of transactions) {
        if (transaction.id === id) {
          return transaction
        }
      }
    },
  
    getTransactionTotal(type) {
      let sum = 0;
      const {transactions} = this;
      for (const transaction of transactions) {
        if (transaction.type === type) {
          sum += transaction.amount
        }
      }
      return sum;
    },
  };
  
  account.deposit(1000);
  account.withdraw(500);
  account.deposit(2000);
  
  console.log(account.getBalance());
  console.log(account.getTransactionDetails(4));
  console.log(account.getTransactionTotal(Transaction.DEPOSIT));
  console.log(account.getTransactionTotal(Transaction.WITHDRAW));
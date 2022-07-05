const Account = require("./Account.js");

const account = new Account();
account.deposit(1000.00)
account.deposit(2000.00)
account.withdraw(500.00)
console.log(account.printStatement())



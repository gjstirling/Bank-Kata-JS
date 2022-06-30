class Transaction {
  constructor() {
    this.transactionHistory = [];
  }

  addDeposit(amount) {
    if (this.#argumentError(amount)) {
      return { error: "argument invalid" };
    }
    const currentDate = this.#formatDate(new Date());
    const transaction = { credit: amount, date: currentDate };
    this.transactionHistory.push(transaction);
    return transaction;
  }

  addWithdrawel(amount) {
    if (this.#checkFunds(amount)) {
      return {error: "Account credit too low, transaction cancelled"}
    }
    const currentDate = this.#formatDate(new Date());
    const transaction = { debit: amount, date: currentDate };
    this.transactionHistory.push(transaction);
    return transaction;
  }

  #checkFunds(amount) {
    let balance = 0
    for (let i = 0; i< this.transactionHistory.length; i++) {
      if (this.transactionHistory[i].credit) {
        balance += this.transactionHistory[i].credit*100
      }
      else {
        balance -= this.transactionHistory[i].debit*100
      }
    }
    balance -= amount*100
    return balance < 0;
  }

  #argumentError(value) {
    return value === undefined || typeof value !== "number";
  }

  #formatDate(date) {
    let day = date.getDate().toString().padStart(2, "0");
    let month = (date.getMonth() + 1).toString().padStart(2, "0");
    let year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }
}

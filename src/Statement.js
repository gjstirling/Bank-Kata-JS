class Statement {

  constructor() {
    this.balance = 0 
  }

  print(transactions) {
    let balance = 0;
    let transactionStrings = [];
    for (let i = 0; i < transactions.length; i++) {
      if (transactions[i].credit) {
        balance += transactions[i].credit
        transactionStrings.push(`${transactions[i].date} || ${(transactions[i].credit).toFixed(2)} || || ${(balance).toFixed(2)}\n`);
      } else {
        balance -= transactions[i].debit;
        transactionStrings.push(`${transactions[i].date} || || ${(transactions[i].debit).toFixed(2)} || ${(balance).toFixed(2)}\n`);
      }
    }
    transactionStrings = this.#addHeader(transactionStrings.reverse())
    return transactionStrings;
  }

  #addHeader (str) {
    str.unshift("date || credit || debit || balance\n") 
    return str.join("");
  }
}

module.exports = Statement;
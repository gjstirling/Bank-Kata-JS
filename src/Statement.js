class Statement {
  print(transactions) {
    let balance = 0;
    let transaction = "";
    let transactionStrings = [];
    for (let i = 0; i < transactions.length; i++) {
      if (transactions[i].credit) {
        transaction = transactions[i].credit
        balance += transaction
        transactionStrings.push(`${transactions[i].date} || ${(transaction).toFixed(2)} || || ${(balance).toFixed(2)}\n`);
      } else {
        transaction = transactions[i].debit
        balance -= transaction;
        transactionStrings.push(`${transactions[i].date} || || ${(transaction).toFixed(2)} || ${(balance).toFixed(2)}\n`);
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
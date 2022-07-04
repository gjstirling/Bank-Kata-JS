class Statement {
 
  print(transactions) {
    transactions = this.#stringifyTransactions(transactions)
    transactions = this.#addHeader(transactions)
    return transactions;
  }

  #addHeader(str) {
    str.unshift("date || credit || debit || balance\n");
    return str.join("");
  }

  #stringifyTransactions(transactions) {
    let balance = 0
    const outputStrings = []
    transactions.map((transaction)=>{
      if(transaction.credit) {
        balance += transaction.credit
        outputStrings.push(`${transaction.date} || ${(transaction.credit).toFixed(2)} || || ${(balance).toFixed(2)}\n`)
      } else {
        balance -= transaction.debit
        outputStrings.push(`${transaction.date} || || ${(transaction.debit).toFixed(2)} || ${(balance).toFixed(2)}\n`)
      }
    })
    return outputStrings.reverse()
  }
}

module.exports = Statement;

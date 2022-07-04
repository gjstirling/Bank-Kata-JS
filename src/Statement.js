class Statement {
  constructor() {
    this.balance = 0;
  }

  print(transactions) {
    let transactionsStr = this.#stringifyTransactions(transactions)
    transactionsStr = this.#addHeader(transactionsStr)
    return transactionsStr;
  }

  #addHeader(str) {
    str.unshift("date || credit || debit || balance\n");
    return str.join("");
  }

  #stringifyTransactions(transactions) {
    let balance = 0
    const stringTransactions = []
    transactions.map((transaction)=>{
      if(transaction.credit) {
        balance += transaction.credit
        stringTransactions.push(`${transaction.date} || ${(transaction.credit).toFixed(2)} || || ${(balance).toFixed(2)}\n`)
      } else {
        balance -= transaction.debit
        stringTransactions.push(`${transaction.date} || || ${(transaction.debit).toFixed(2)} || ${(balance).toFixed(2)}\n`)
      }
    })
    return stringTransactions.reverse()
  }
}

module.exports = Statement;

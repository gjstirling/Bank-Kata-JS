class Account {

    constructor(transaction = new Transaction, statement = new Statement) {
        this.transaction = transaction
        this.statement = statement
    }

    deposit(amount){
        this.transaction.addDeposit(amount)
    }

    withdraw(amount){
        this.transaction.addWithdrawel(amount)
    }

    printStatement(){
        const transactions = this.transaction.getTransactions()
        this.statement.print(transactions)
    }

}

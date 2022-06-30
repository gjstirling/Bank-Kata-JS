class Account {

    constructor(transaction = new Transaction) {
        this.transaction = transaction
    }

    deposit(amount){
        this.transaction.addDeposit(amount)
    }

}

class Transaction {

    addDeposit(amount) {
        if (amount === undefined || (typeof(amount) !== 'number')) {
            return {error: "argument invalid"};
        }
        const transaction = {credit: amount, date: "date"};
        return transaction;
    }
}
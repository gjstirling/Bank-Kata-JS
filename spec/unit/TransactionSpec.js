
describe('Transaction', () => {

    beforeEach(() => {
        transaction = new Transaction
    })

    it('Creates a deposit', ()=>{
        expect(transaction.addDeposit(100.00)).toEqual({credit: 100.00, date: "29/06/2022"});
    });

});
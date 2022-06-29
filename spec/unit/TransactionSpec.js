
describe('Transaction', () => {

    beforeEach(() => {
        transaction = new Transaction
    })

    it('Creates a deposit', ()=>{
        const assertion = transaction.addDeposit(100.00)
        expect(assertion).toEqual({credit: 100.00, date: "date"});
    });

    it('requires an amount to create transaction', () => {
        const assertion = transaction.addDeposit()
        expect(assertion).toEqual({error: "argument invalid"});
    })

    it('requires an number to create transaction', () => {
        const assertion = transaction.addDeposit("not a number")
        expect(assertion).toEqual({error: "argument invalid"});
    })

});
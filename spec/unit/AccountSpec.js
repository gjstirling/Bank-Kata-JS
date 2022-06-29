
describe('Account', () => {

    beforeEach(() => {
        account = new Account
    })

    it('Calls the addDeposit method', ()=>{
        const assertion = account.deposit(100.00)
        expect(assertion).toEqual({debit: "100.00", date: "29/06/2022"})
    });

});
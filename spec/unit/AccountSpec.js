
describe('Account', () => {

    beforeEach(() => {
        account = new Account
    })

    it('Accepts a numerical value', ()=>{
        expect(account.deposit(100.00)).not.toThrow();
    });

});
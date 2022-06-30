describe("Account", () => {
  beforeEach(() => {});

  it("Calls the addDeposit method", () => {
    let mockObject = jasmine.createSpyObj('mockObject', ['addDeposit']);
    let account = new Account(mockObject, "mockPrinter")
    account.deposit(100.00)
    expect(mockObject.addDeposit).toHaveBeenCalledWith(100.00);
  });

  it("Calls the addWithdrawel method", () => {
    let mockObject = jasmine.createSpyObj('mockObject', ['addWithdrawel']);
    let account = new Account(mockObject, "mockPrinter")
    account.withdraw(50.00)
    expect(mockObject.addWithdrawel).toHaveBeenCalledWith(50.00);
  })

  // this test is not isolated - return to later 
  it("prints a users statement", () => {
    account = new Account
    spyOn(account.transaction, 'getTransactions').and.returnValue('mock')
    spyOn(account.statement, 'print').and.returnValue('mock')
    account.printStatement(); 
    expect(account.transaction.getTransactions).toHaveBeenCalledWith()
    expect(account.statement.print).toHaveBeenCalledWith('mock') 
  })

});


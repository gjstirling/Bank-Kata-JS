describe("Account", () => {
  beforeEach(() => {});

  it("Calls the addDeposit method", () => {
    let mockObject = jasmine.createSpyObj('mockObject', ['addDeposit']);
    let account = new Account(mockObject)
    account.deposit(100.00)
    expect(mockObject.addDeposit).toHaveBeenCalledWith(100.00);
  });

  it("Calls the addWithdrawel method", () => {
    let mockObject = jasmine.createSpyObj('mockObject', ['addWithdrawel']);
    let account = new Account(mockObject)
    account.withdraw(50.00)
    expect(mockObject.addWithdrawel).toHaveBeenCalledWith(50.00);
  })
});


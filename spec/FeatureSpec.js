describe("Feature", () => {
  const statement =
    "date || credit || debit || balance\n14/01/2023 || || 500.00 || 2500.00\n13/01/2023 || 2000.00 || || 3000.00\n10/01/2023 || 1000.00 || || 1000.00\n";
  beforeEach(() => {
    account = new Account();
    jasmine.clock().install();
  });

  it("Prints a bank statement", () => {
    var baseTime = new Date(2023, 0, 10);
    jasmine.clock().mockDate(baseTime);
    account.deposit(1000);
    var baseTime = new Date(2023, 0, 13);
    jasmine.clock().mockDate(baseTime);
    account.deposit(2000);
    var baseTime = new Date(2023, 0, 14);
    jasmine.clock().mockDate(baseTime);
    account.withdraw(500);
    expect(account.printStatement()).toEqual(statement);
  });

  afterEach(function () {
    jasmine.clock().uninstall();
  });
});

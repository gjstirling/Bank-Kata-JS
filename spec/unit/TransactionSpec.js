describe("Transaction", () => {
  beforeEach(() => {
    transaction = new Transaction();
    jasmine.clock().install();
  });

  it("Creates a deposit", () => {
    var baseTime = new Date(2022, 5, 28);
    jasmine.clock().mockDate(baseTime);
    const assertion = transaction.addDeposit(100.0);
    expect(assertion).toEqual({ credit: 100.0, date: "28/06/2022" });
  });

  it("requires an amount to create transaction", () => {
    const assertion = transaction.addDeposit();
    expect(assertion).toEqual({ error: "argument invalid" });
  });

  it("requires an number to create transaction", () => {
    const assertion = transaction.addDeposit("not a number");
    expect(assertion).toEqual({ error: "argument invalid" });
  });

  afterEach(function () {
    jasmine.clock().uninstall();
  });
});

const Transaction = require('../../src/Transaction')

describe("Transaction", () => {
  describe(".addDeposit", () => {
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

  describe(".addWithdrawel", () => {
    beforeEach(() => {
      transaction = new Transaction();
      jasmine.clock().install();
      var baseTime = new Date(2022, 5, 28);
      jasmine.clock().mockDate(baseTime);
    });

    it("Creates a withdrawel transaction", () => {
      transaction.addDeposit(100.00)
      const assertion = transaction.addWithdrawel(50.00);
      expect(assertion).toEqual({ debit: 50.00, date: "28/06/2022" });
    });

    it("Blocks transaction if limited funds", () => {
      transaction.addDeposit(10.00)
      const assertion = transaction.addWithdrawel(50.00);
      expect(assertion).toEqual({error: "Account credit too low, transaction cancelled"});
    });

    afterEach(function () {
      jasmine.clock().uninstall();
    });
  });

  describe(".getTransactions", () => {

    beforeEach(() => {
      transaction = new Transaction();
      jasmine.clock().install();
      var baseTime = new Date(2022, 5, 28);
      jasmine.clock().mockDate(baseTime);
    });

    it("returns a list of transactions", () => {
      transaction.addDeposit(100.00)
      transaction.addWithdrawel(50.00)
      expect(transaction.getTransactions()).toEqual(transaction.transactionHistory);
    });

    afterEach(function () {
      jasmine.clock().uninstall();
    });

  })

});

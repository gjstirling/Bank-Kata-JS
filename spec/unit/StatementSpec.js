describe("Statement", () => {
  describe(".print", () => {
    it("returns the header", () => {
        statement = new Statement 
        const assertion = statement.print([])
        expect(assertion).toEqual("date || credit || debit || balance\n")
    });

    it("prints a single transaction", () => {
        statement = new Statement 
        const assertion = statement.print([{credit: 100, date: "28/06/2022"}])
        expect(assertion).toEqual("date || credit || debit || balance\n28/06/2022 || 100.00 || || 100.00\n")
    });
  });
});


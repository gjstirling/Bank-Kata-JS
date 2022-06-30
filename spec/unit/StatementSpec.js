describe("Statement", () => {
  describe(".print", () => {
    it("returns the header", () => {
        statement = new Statement 
        const assertion = statement.print([])
        expect(assertion).toEqual("date || credit || debit || balance\n")
    });
  });
});

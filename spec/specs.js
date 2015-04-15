describe('BankAccount',function() {

  describe("deposit()", function() {

    it("will add the amount specified to the balance", function() {
      var testAccount = Object.create(BankAccount);
      testAccount.deposit(100);
      debugger;
      expect(testAccount.balance).to.equal(100);
    });

  });

});

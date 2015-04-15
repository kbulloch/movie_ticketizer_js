describe('BankAccount',function() {

  describe("deposit()", function() {

    it("will add the amount specified to the balance", function() {
      var testAccount = Object.create(BankAccount);
      testAccount.deposit(100);
      expect(testAccount.balance).to.equal(100);
    });

  });

  describe("withdraw()", function() {

    it("will subtract the amount specified from the balance", function() {
      var testAccount = Object.create(BankAccount);
      testAccount.deposit(100);
      testAccount.withdraw(100);
      expect(testAccount.balance).to.equal(0);
    });

  });

});

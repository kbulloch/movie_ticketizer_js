var BankAccount = {
  balance: 0,
  deposit: function(amount) {
    this.balance += amount;
  },
  withdraw: function(amount) {
    this.balance -= amount;
  }
};

$(document).ready(function() {

  $("form#create-account").submit(function(event) {
    event.preventDefault();

    var new_name = $("input#name").val();
    var initial_deposit = parseInt($("input#initial-deposit").val());

    var newAccount = Object.create(BankAccount);
    newAccount.name = new_name;
    newAccount.balance += initial_deposit;

    $("#account-balance").text(newAccount.balance);
  });

});

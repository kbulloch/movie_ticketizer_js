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

  var newAccount = Object.create(BankAccount);
  $("#transaction-container").hide();

  $("form#create-account").submit(function(event) {
    event.preventDefault();

    var new_name = $("input#name").val();
    var initial_deposit = parseInt($("input#initial-deposit").val());

    newAccount.name = new_name;
    newAccount.balance = initial_deposit;

    $("#account-balance").text(newAccount.balance);
    $("#transaction-container").show();
  });

  $("form#transaction").submit(function(event) {
    event.preventDefault();

    var deposit = parseInt($("input#deposit").val());
    var withdraw = parseInt($("input#withdraw").val());

    if(!deposit) {
      deposit = 0;
    }
    if(!withdraw) {
      withdraw = 0;
    }
    newAccount.deposit(deposit);
    newAccount.withdraw(withdraw);

    $("#account-balance").text(newAccount.balance);
  });

});

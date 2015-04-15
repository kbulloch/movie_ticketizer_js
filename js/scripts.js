var Ticket = {
  getPrice: function() {
    return 15 - (this.age_bracket * 2)
              - (this.movie_time * 2)
              - (this.release_year * 3);
  }
};

$(document).ready(function() {

  $("#find-ticket").submit(function(event) {
    event.preventDefault();

    var age_bracket = $("#age_bracket").val();
    var movie_time = $("#movie_time").val();
    var release_year = $("#release_year").val();

    var ticket = Object.create(Ticket);

    ticket.age_bracket = age_bracket;
    ticket.movie_time = movie_time;
    ticket.release_year = release_year;

    var ticket_price = ticket.getPrice();

    $("#ticket-price").text(ticket_price);
  });

});

describe('TicketMuncher',function() {

  describe("getPrice()", function() {

    it("will return the price of the ticket based on user inputs", function() {
      var testTicket = Object.create(Ticket);
      testTicket.movie_name = "Titanus";
      testTicket.movie_time = 0;
      testTicket.age_bracket = 0;
      testTicket.release_year = 1996;
      expect(testTicket.getPrice()).to.equal(10);
    });

    it("will return the price of the ticket based on the users age bracket", function() {
      var testTicket = Object.create(Ticket);
      testTicket.age_bracket = 1;
      expect(testTicket.getPrice()).to.equal(8)
    });

  });

});

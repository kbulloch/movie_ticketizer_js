describe('TicketMuncher',function() {

  describe("getPrice()", function() {

    it("will return the price of the ticket based on the users age bracket", function() {
      var testTicket = Object.create(Ticket);
      testTicket.age_bracket = 1;
      testTicket.movie_time = 0;
      testTicket.release_year = 0;
      expect(testTicket.getPrice()).to.equal(13);
    });

    it("will return the price of the ticket based on the movie_time", function() {
      var testTicket = Object.create(Ticket);
      testTicket.age_bracket = 0;
      testTicket.movie_time = 1;
      testTicket.release_year = 0;
      expect(testTicket.getPrice()).to.equal(13);
    });

    it("will return the ticket price based on the movie age", function() {
      var testTicket = Object.create(Ticket);
      testTicket.age_bracket = 0;
      testTicket.movie_time = 0;
      testTicket.release_year = 1;
      expect(testTicket.getPrice()).to.equal(12);
    });

  });

});

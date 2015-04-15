var Ticket = {
  getPrice: function() {
    return 15 - (this.age_bracket * 2)
              - (this.movie_time * 2)
              - (this.release_year * 3);
  }
};

$(document).ready(function() {

});

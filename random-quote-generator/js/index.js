

var url = "https://api.forismatic.com/api/1.0/?method=getQuote&key=457653&format=jsonp&lang=en&jsonp=?";

var getQuote = function(data) {
  $(".quoteT").text(data.quoteText);
  var quot = 'https://twitter.com/intent/tweet?text=' + data.quoteText + ' Author ' + data.quoteAuthor + 'https://kyknight.github.io/';
  if (data.quoteAuthor === '') {
    data.quoteAuthor = 'Unknown';
  }
  $(".author").text('Author: ' + data.quoteAuthor);
  $(".twitterButton").attr("href", quot);
};

$(document).ready(function() {
  $.getJSON(url, getQuote, 'jsonp');

});

$("#quote").click(function() {
  $.getJSON(url, getQuote, 'jsonp');
});
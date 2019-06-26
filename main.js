var tvmaze = require("tv-maze");
var client = tvmaze.createClient();

// console.log("Valid commands: search, show, genre, rating, network, summary. Followed by the name of the show. Search + the name of the show returns the results of all other commands.")

// Takes in all of the command line arguments
var inputString = process.argv;

// Parses the command line argument to capture the "command" (search, show, genre, rating, network, summary) and the show title.
var command = inputString[2];
var showName = process.argv.slice(3).join(" ");

var whatShow = client.search(showName, function (err, shows) {
    console.log(shows[0].show.name);
});

var whatGenre = client.search(showName, function (err, shows) {
    console.log(shows[0].show.genres);
});

var whatGenre = client.search(showName, function (err, shows) {
    console.log(shows[0].show.genres);
});

var whatRating = client.search(showName, function (err, shows) {
    console.log(shows[0].show.rating);
});

var whatNetwork = client.search(showName, function (err, shows) {
    console.log(shows[0].show.network.name);
});

var showSummary = client.search(showName, function (err, shows) {
    console.log(shows[0].show.summary);
});

// Determines the command selected...
// Based on the command we run the appropriate search:

if (command === "show") {
    return whatShow;
}

else if (command === "genre") {
    return whatGenre;
}

else if (command === "rating") {
    return whatRating;
}

else if (command === "network") {
    return whatNetwork;
}

else if (command === "summary") {
    return showSummary;
}

else if (command === "search") {
    return whatShow + "\n" + whatGenre + "\n" + whatNetwork + "\n" + whatRating + "\n" + showSummary;
  }

else {
  console.log("Not a recognized command.");
  return;
}


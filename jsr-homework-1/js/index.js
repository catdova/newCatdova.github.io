//Shuffle function- I don't really understand whats happening here
function shuffle(arra1) {
    var ctr = arra1.length, temp, index;

// While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}



var companyNames = ["Uber", "Netflix", "Postmates", "Tinder", "Dropbox", "Spotify"]

var animals = ["cats", "hamsters", "dogs", "snakes", "bees", "wombats"]

shuffle(companyNames)


for (var i=0; i < animals.length; i++){
  console.log("My company is like " + companyNames[i] + " for " + animals[i])
}

$( ".company-pitch" ).append( "<p>" + "My company is like " + companyNames[0] + " for " + animals[3] + "</p>" );
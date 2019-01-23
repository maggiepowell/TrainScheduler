//Initialize firebase
var config = {

};
firebase.initializeApp(config);

var database = firebase.database();

//create an event handler for 'Submit' click
$("#add-train-button").on("click", function(){
    var train = {
        name: $("#train-name-input")
            .val()
            .trim(),
        role: $("#destination-input")
            .val()
            .trim(),
        start: $("#firstTrain-input")
            .val()
            .trim(),
        rate: $("#frequency-input")
            .val()
            .trim()
    }
    console.log(train);

//push obj to database
database.ref().push(train);

});

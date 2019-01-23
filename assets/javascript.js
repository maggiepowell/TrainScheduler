//Initialize firebase
var config = {
    apiKey: "AIzaSyDs33or62lC7_7oHEBRS1BfB1r8FtoxUtE",
    authDomain: "train-scheduler-e63a0.firebaseapp.com",
    databaseURL: "https://train-scheduler-e63a0.firebaseio.com",
    projectId: "train-scheduler-e63a0",
    storageBucket: "",
    messagingSenderId: "420423212714"
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

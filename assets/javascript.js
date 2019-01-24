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
        destination: $("#destination-input")
            .val()
            .trim(),
        frequency: $("#firstTrain-input")
            .val()
            .trim(),
        minAway: $("#frequency-input")
            .val()
            .trim()
    }
    console.log(train);

//push obj to database
database.ref().push(train);

});

//add train input to the schedule 
function addTrainRow(train) {
    var start = train.start;
    console.log(start);
    var nextArrival = moment().diff(moment(start),"minutes");
    console.log(nextArrival);
    var newRow = $("#tbody").append(
        $("<td>").text(train.name),
        $("<td>").text(train.destination),
        $("<td>").text(train.frequency),
        $("<td>").text(nextArrival),
        $("<td>").text(train.minAway),
    );
      // Append the new row to the table
    $("#employee-table > tbody").append(newRow);
    };

//The callback function you specify will be called for each child in the DB
database.ref().on("child_added", function(snapshot) {
    var train = snapshot.val();
    console.log("child: ", train);
    addEmployeeRow(train);
});


src = "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1 jquery.min.js";

// firebase config connection to database
src = "https://www.gstatic.com/firebasejs/7.2.3/firebase-app.js";

// TODO: Add SDKs for Firebase products that you want to use https://firebase.google.com/docs/web/setup#available-libraries

src = "https://www.gstatic.com/firebasejs/7.2.3/firebase-database.js";

var firebaseConfig = {
    apiKey: "AIzaSyDEy2CLiGdIS3rXWMO1JTEjlOkWYtHav6Y",
    authDomain: "flighttracker-63b90.firebaseapp.com",
    databaseURL: "https://flighttracker-63b90.firebaseio.com",
    projectId: "flighttracker-63b90",
    storageBucket: "flighttracker-63b90.appspot.com",
    messagingSenderId: "721104525296",
    appId: "1:721104525296:web:439cb738545e5fc896af35"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

//   action committed 'click' to return letiables

$("#find-info").on("click", function () {
    let airportItem = $("#airport-code").val().trim();
    let flightItem = $("#flight").val().trim();

    console.log(airportItem);
    console.log(flightItem);

//  ajax call to return API response

    let queryURL = "http://aviation-edge.com/v2/public/flights?key=b5cda6-43048a&arrIata=" + airportItem + "&flightIata=" + flightItem;

    console.log(queryURL);

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        
        database.ref().set({
            flightResponse: response
        })
    });
});
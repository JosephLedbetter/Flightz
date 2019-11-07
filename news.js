// make a code to firebase, in case needed to add a new country, could just add it in firebase without a whole new update
// for any destination put 'country'
let abbrev = {
    "mexico": "mx",
    "australia": "au",
    "united states" : "us",
    "france" : "fr",
    "argentina" : "ar",
};

let destination = $("#destination").val().trim();


$("#find-info").on("click", function (event) {
    event.preventDefault();
    $("#article-wrapper").empty();

    console.log('submit button is working');

    let destination = $("#destination").val().trim().toLowerCase();
    console.log('destination');
    console.log(destination);
    

    
        if (abbrev[destination]!=undefined ) {
            let queryURL = 'https://newsapi.org/v2/top-headlines?' + 'country='
                + abbrev[destination] + '&apiKey=72792ead5015404ba7751045bcd4d5ad';

        // for (var i = 0; i < 5; i++){}
            $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response) {
                console.log("ajax is working");
                // articles 
                let articles = response.articles;
                PrepareNews(articles);
                


                // Need to fix this part where I want it to only call the titles of news articles...then attach URL and description
                // articles[i] doesn't work, do I need a for loop to run through the JSON object and pick the response.article[i].title of the first 5?
                // I could do response.articles[0].title, response.articles[1].title, etc.



            });

        };

    

});


function PrepareNews(articles){
    var counter = articles.length > 5 ? 5 : articles.length;
    //tHE TOP IS THE SAME AS THIS, DARIAN IS AWESOME
    // if (articles.length > 5){
    //     counter = 5;
    // }
    // else {
    //     counter = articles.length;
    // }


    for (var i = 0; i < counter; i++) {
        let title = articles[i].title;
        let description = articles[i].description;
        $("#article-wrapper").append("<div>" + title +"</div>");
        $("#article-wrapper").append("<div>" + description + "</div><br>");
        console.log(title);
    };

    // for (var i =0; i < counter; i++){
    //     let title = articles[i].title;
    //     console.log("title");
    //     console.log(title);
        
    // $("#title-input").append(JSON.stringify(title));
    // };

    // for (var i = 0; i < counter; i++) {
    //     let description = articles[i].description;
    //     console.log("description");
    //     console.log(description);

    //     $('#description-container').append(JSON.stringify(description));
    // };

};







// var url = 'https://newsapi.org/v2/top-headlines?' +
//           'country=us&' +
//           'apiKey=72792ead5015404ba7751045bcd4d5ad';
// var req = new Request(url);
// fetch(req)
//     .then(function(response) {
//         console.log(response.json());
//         console.log(response.articles);
//     })

// console.log("before ajax");

// let country = $('#country-input').val().trim();

// function displayNews() {
//     console.log('displayNews is firing');

//     var queryURL = 'https://newsapi.org/v2/sources?country=' + 
//     country + '&apiKey=72792ead5015404ba7751045bcd4d5ad';
//     // use language language=en and doesnt work because mexico doesnt have headlines in english in this app

//     // testing ajax
//     console.log('ajax is working');

//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function (response) {
//             console.log("after then");

//             // main response
//             let results = response;
//             console.log("results");
//             console.log(results);

//             // articles 
//             let articles = response.articles;
//             console.log("articles");
//             console.log(articles);

//             let author = response.articles[0].author;
//             console.log("author");
//             console.log(author);

//             // attach response articles I get back from API to html
//             $("#articles").text(JSON.stringify(articles));

//             // for (var i = 0; i < results.length; i++) {

//             // }

//             // need to capture user's input on the form (the country) and change api address so it gives me back the right country's news in html
//             // can first console log, the write into html
//             // create for loop so that I can limit the number of articles that come up on the json object (gif homework)
// // use movies omdbapi to figure out how to find the movie through api and pull back country code i need for news i need
//         });

// };

// displayNews();

// let countryAbbreviations = {
//     "mexico": "mx",
//     "australia": "au",
//     "united states": "us",
//     "france": "fr",
//     "argentina": "ar",

// }

// console.log(countryAbbreviations);


// // function searchCountry() {
// //     console.log('search function working');
// //     // need to make a function to register what the user typed, change it into the abbreviation the url needs for ajax to get the right country's news information, and console.log() it for now, later add to html)
// //     // or when user types a country, inputs the country and finds its country code in an API (objects and pull country 2-letter abbreviation)
// //     let country = $('#country-input').val().trim();

// //     console.log(country);

// //     // function abbreviation () {
        

// //     // }
// // }

// // searchCountry();

// $('#submit-country').on('click', function(event){
//     console.log('event is working');
//     console.log(event);
//     event.preventDefault();

//     console.log('Country typed in= ' + country);
    
// });

// // function findAbbrev () {
// //     for (i = 0; i < countryAbbreviations.length; i++){
// //         if country === ()
// //     }
// // 

// Output:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"

// const values = Object.values(abbrev);
// console.log(values);

// function findAbbrev() {
//     for (var i = 0; i < abbrev.length; i++) {

//         if (destination === abbrev[i]) {

//             console.log("This data is available in array data");
//             return;
//         } else {
//             console.log("This data is not available in array data");
//         }
//     }
// }

// findAbbrev();

// function myFunction(){
//     if (destination === )
// }

// for now, manually making the right abbreviation pop up instead of looping through the array

// if (destination === "mexico") {
//     console.log(values[0]);
// } else if (destination === "australia") {
//     console.log(abbrev[1]);
// } else if (destination === "united states") {
//     console.log(abbrev[2]);
// } else if (destination === "france") {
//     console.log(abbrev[3]);
// } else if (destination === "argentina") {
//     console.log(abbrev[4]);
// } else {
//     console.log("country out of reach")
// };

// .on("click") function will trigger the AJAX call

// Output:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"

// const values = Object.values(abbrev);
// console.log(values);

// function findAbbrev() {
//     for (var i = 0; i < abbrev.length; i++) {

//         if (destination === abbrev[i]) {

//             console.log("This data is available in array data");
//             return;
//         } else {
//             console.log("This data is not available in array data");
//         }
//     }
// }

// findAbbrev();

// function myFunction(){
//     if (destination === )
// }

// for now, manually making the right abbreviation pop up instead of looping through the array

// if (destination === "mexico") {
//     console.log(values[0]);
// } else if (destination === "australia") {
//     console.log(abbrev[1]);
// } else if (destination === "united states") {
//     console.log(abbrev[2]);
// } else if (destination === "france") {
//     console.log(abbrev[3]);
// } else if (destination === "argentina") {
//     console.log(abbrev[4]);
// } else {
//     console.log("country out of reach")
// };

// .on("click") function will trigger the AJAX call
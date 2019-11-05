// var url = 'https://newsapi.org/v2/top-headlines?' +
//           'country=us&' +
//           'apiKey=72792ead5015404ba7751045bcd4d5ad';
// var req = new Request(url);
// fetch(req)
//     .then(function(response) {
//         console.log(response.json());
//         console.log(response.articles);
//     })

console.log("before ajax");


function displayNews() {
    console.log('displayNews is firing');

    var queryURL = 'https://newsapi.org/v2/top-headlines?country=afg&apiKey=72792ead5015404ba7751045bcd4d5ad';

    // testing ajax
    console.log('ajax is working');

    $.ajax({
        url: queryURL,
        method: "GET"
    })

        .then(function (response) {
            console.log("after then");

            // main response
            let results = response;
            console.log("results");
            console.log(results);

            // articles 
            let articles = response.articles;
            console.log("articles");
            console.log(articles);

            let author = response.articles[0].author;
            console.log("author");
            console.log(author);

            // for (var i = 0; i < results.length; i++) {

            // }

            // need to capture user's input on the form (the country) and change api address so it gives me back the right country's news in html
            // can first console log, the write into html

        });
};

displayNews();

let countryAbbreviations = {
    "Afghanistan" : "AF",
    "AlandIslands" : "AX",
    // cuba:"CB",
    // "Cuba":"CB"
}


function searchCountry() {
    console.log('search function working');
    // need to make a function to register what the user typed, change it into the abbreviation the url needs for ajax to get the right country's news information, and console.log() it for now, later add to html)
    // or when user types a country, inputs the country and finds its country code in an API (objects and pull country 2-letter abbreviation)
    let country = $('#country-input').val().trim();

    console.log(country);

    // function abbreviation () {
        

    // }
}

searchCountry();

$('#submit-country').on('click', function(event){
    console.log('event is working');
    console.log(event);
    event.preventDefault();

    
});



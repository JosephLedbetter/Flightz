Flightz Travel Site Concept

Overview: 

The Flightz travel concept in this project was created with the mindset that when individuals are traveling, 
whether internationally or domestic flights, the traveler will be able to see the 5 most relevant news articles, 3-day weather forecast, and their specified flight information will be logged into a Firebase real-time database for future use.

This project was complete using the three specific API's listed below to assist with returning all relevant data needed 
to achieve the topics above.

- NewsAPI.com
- Aviation-Edge.com
- Openweathermap.org

Intructions: 

- Within the 'Destination by Country' input you will be entering the country by the full name. (ie US will be inputted as United States) to return the 5 most searched articles regarding topics based in the United States. 

- The 'Destination by City' input is a more isolated to the specific area the travel will be visiting to gain a better understanding of what to expect when visiting a specific area. 

- Both 'Airport Abbreviation' and 'Flight Number' are both used within the project to collect relevant data about the airline 
and all information regarding the flight specified down to the the geography, speed, and longitude/latitue of the departure and destination. 

Challenges: 

- When supplying the information from the News API any article returned from a country where English is not the preferred language all articles would be returned with the local language preference. 

- When pulling specific flight data the API is particular to Delta flights, along with dates and times the flight is running. 

Future Improvements: 

- Translation to be provided for the new articles when being returned or specify a separate News API that will be returned with 
preferred responses in English. Also, when researching a specific place by country, utilizing the firebase database to create an object that contains all countries with their respected abbreviations for future searches will assist in consolidating time and effort for future coding improvements.
 

- Weather would be a fun addition to include items such as UV percentages and other relevant content to make sure that travelers are ready for additional details that could potentially hinder the enjoyment of the trip.

- Flight information is to be collected and passed into the Firebase database and collected into an object to be able to return 
information for future Business-to-business operations. If a specific travel site or company is interested in researching market trends, popular flight destination, etc. this will give the business the necessary information for target markets, demographics, and locations in dictating pricing and content.

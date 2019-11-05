const findInfo = document.getElementById("find-info")

findInfo.addEventListener('click', function(){
    block1 = true;
    block2 = true;
    block3 = true;
    const elements = document.getElementsByClassName("cont");
    while (elements.length > 0) elements[0].remove();
    const text = document.getElementsByClassName("p");
    while (text.length > 0) text[0].remove();
    const input = document.getElementById("destination").value;
    change(input)
    tester()
    run()
    currentWeather();

})


let queryURL;
let queryURLCurrent;

function change(des){
    queryURL = "http://api.openweathermap.org/data/2.5/forecast?q="+des+"&appid=53b15cc767ff751f3924fac372968f55"
    queryURLCurrent = "http://api.openweathermap.org/data/2.5/weather?q="+des+"&appid=53b15cc767ff751f3924fac372968f55"
}  

function currentWeather(){
    $.ajax({
        url: queryURLCurrent,
        method: "GET"
        }).then(function(response) {
            console.log(response)
            let tempCurrent = response.main.temp;
            let descriptionCurrent = response.weather[0].description;
            let iconCurrent = response.weather[0].icon;
            console.log(tempCurrent);
            console.log(descriptionCurrent)
            console.log(iconCurrent);
            
        })
}

const container = document.getElementById("containerWeather")
const whatDay = document.getElementById("day")

let pageNumber = 1;


let dayFcut;
let testCut1;
let testCut2;
let testCut3;

function tester(){
    $.ajax({
        url: queryURL,
        method: "GET"
        }).then(function(response) {
            let test1 = response.list[4].dt_txt
            testCut1 = test1.substr(0, 10)

            let test2 = response.list[14].dt_txt
            testCut2 = test2.substr(0, 10)
            

            let test3 = response.list[22].dt_txt
            testCut3 = test3.substr(0, 10)
            console.log(response)
            
        })
}

function run(){
    
    for(let i=0; i<=39; i++){
        $.ajax({
            url: queryURL,
            method: "GET"
            }).then(function(response) {
            
                page(response, i)  
                 
                
                
        })
    }
    
    
    

    
}

    
    
function page(response, i){
    let day = response.list[i].dt_txt
    let days = response.list[i].main.temp
    let convert = ((days-273.15)*1.8)+32
    let weatherNumber = Math.trunc(convert);
    let timeCut = day.substr(11, 19)
    let iconW = response.list[i].weather[0].icon
    let descrip = response.list[i].weather[0].description
    let dayT = response.list[i].dt_txt
    dayFcut = dayT.substr(0, 10)

    
    
    const cont = document.createElement("div")
    const time = document.createElement("div")
    const img = document.createElement("img")
    const des = document.createElement("div")
    const temp = document.createElement("div")
    const dayP = document.createElement("p")
    
                    
    cont.className = "cont"
    img.id = "pro"
    dayP.className = "p"
    des.id = "desMedia"
    time.id = "timeMedia"
    temp.id = "tempMedia"


    if(iconW === "01d"){
        img.setAttribute('src', "http://openweathermap.org/img/wn/01d@2x.png") 
    }
    if(iconW === "01n"){
        img.setAttribute('src', "http://openweathermap.org/img/wn/01n@2x.png") 
    }
    if(iconW === "02d"){
        img.setAttribute('src', "http://openweathermap.org/img/wn/02d@2x.png") 
    }
    if(iconW === "02n"){
        img.setAttribute('src', "http://openweathermap.org/img/wn/02n@2x.png") 
    }
    if(iconW === "03d"){
        img.setAttribute('src', "http://openweathermap.org/img/wn/03d@2x.png") 
    }
    if(iconW === "03n"){
        img.setAttribute('src', "http://openweathermap.org/img/wn/03n@2x.png") 
    }
    if(iconW === "04d"){
        img.setAttribute('src', "http://openweathermap.org/img/wn/04d@2x.png") 
    }
    if(iconW === "04n"){
        img.setAttribute('src', "http://openweathermap.org/img/wn/04n@2x.png") 
    }
    if(iconW === "05d"){
        img.setAttribute('src', "http://openweathermap.org/img/wn/05d@2x.png") 
    }
    if(iconW === "05n"){
        img.setAttribute('src', "http://openweathermap.org/img/wn/05n@2x.png") 
    }
    if(iconW === "06d"){
        img.setAttribute('src', "http://openweathermap.org/img/wn/06d@2x.png") 
    }
    if(iconW === "06n"){
        img.setAttribute('src', "http://openweathermap.org/img/wn/06n@2x.png") 
    }
    if(iconW === "07d"){
        img.setAttribute('src', "http://openweathermap.org/img/wn/07d@2x.png") 
    }
    if(iconW === "07n"){
        img.setAttribute('src', "http://openweathermap.org/img/wn/07n@2x.png") 
    }
    if(iconW === "08d"){
        img.setAttribute('src', "http://openweathermap.org/img/wn/08d@2x.png") 
    }
    if(iconW === "08n"){
        img.setAttribute('src', "http://openweathermap.org/img/wn/08n@2x.png") 
    }
    if(iconW === "09d"){
        img.setAttribute('src', "http://openweathermap.org/img/wn/09d@2x.png") 
    }
    if(iconW === "09n"){
        img.setAttribute('src', "http://openweathermap.org/img/wn/09n@2x.png") 
    }
    if(iconW === "10d"){
        img.setAttribute('src', "http://openweathermap.org/img/wn/10d@2x.png") 
    }
    if(iconW === "10n"){
        img.setAttribute('src', "http://openweathermap.org/img/wn/10n@2x.png") 
    }
    if(iconW === "11d"){
        img.setAttribute('src', "http://openweathermap.org/img/wn/11d@2x.png") 
    }
    if(iconW === "11n"){
        img.setAttribute('src', "http://openweathermap.org/img/wn/11n@2x.png") 
    }
    if(iconW === "13d"){
        img.setAttribute('src', "http://openweathermap.org/img/wn/13d@2x.png") 
    }
    if(iconW === "13n"){
        img.setAttribute('src', "http://openweathermap.org/img/wn/13n@2x.png") 
    }
    if(iconW === "50d"){
        img.setAttribute('src', "http://openweathermap.org/img/wn/50d@2x.png") 
    }
    if(iconW === "50n"){
        img.setAttribute('src', "http://openweathermap.org/img/wn/50n@2x.png") 
    }

    if(timeCut === "00:00:00"){
        timeCut = "12:00 AM"
    }
    if(timeCut === "03:00:00"){
        timeCut = "3:00 AM"
    }
    if(timeCut === "21:00:00"){
        timeCut = "9:00 PM"
    }
    if(timeCut === "06:00:00"){
        timeCut = "6:00 AM"
    }
    if(timeCut === "09:00:00"){
        timeCut = "9:00 AM"
    }
    if(timeCut === "12:00:00"){
        timeCut = "12:00 PM"
    }
    if(timeCut === "15:00:00"){
        timeCut = "3:00 PM"
    }
    if(timeCut === "18:00:00"){
        timeCut = "6:00 PM"
    }
    

    

    const timeT = document.createTextNode(timeCut);
    const tempT = document.createTextNode(weatherNumber + " F")
    const desT = document.createTextNode(descrip)

    
    
    if (dayFcut === testCut1){
        if(block1 === true){
            container.append(dayP)
        }
        des.appendChild(desT)
        dayP.append(dayFcut)
        time.appendChild(timeT)
        temp.appendChild(tempT)
        cont.append(time)
        cont.append(img)
        cont.append(des)
        cont.append(temp)
        container.append(cont)
        console.log(testCut1)
        block1 = false;
        
    }
    if (dayFcut === testCut2){
        if(block2 === true){
            container.append(dayP)
        }
        des.appendChild(desT)
        dayP.append(dayFcut)
        time.appendChild(timeT)
        temp.appendChild(tempT)
        cont.append(time)
        cont.append(img)
        cont.append(des)
        cont.append(temp)
        container.append(cont)
        console.log(testCut1)
        block2 = false;
        
    }
    if (dayFcut === testCut3){
        if(block3 === true){
            container.append(dayP)
        }
        des.appendChild(desT)
        dayP.append(dayFcut)
        time.appendChild(timeT)
        temp.appendChild(tempT)
        cont.append(time)
        cont.append(img)
        cont.append(des)
        cont.append(temp)
        container.append(cont)
        console.log(testCut1)
        block3 = false;
        
    }

    

    
}

let block1 = true;
let block2 = true;
let block3 = true;
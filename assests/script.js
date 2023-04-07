let APIKey = "a9303e88f580641d4628a0cfd2649602";




let cityName = "Boston";
let cityQuery = 
"https://api.openweathermap.org/data/2.5/weather?q=";
    cityName +
    "&appid=" +
    APIKey;


    fetch(cityQuery).then(function (res) {
        return res.json();
    })
    .then(function (data) {
            console.log(data);
       
    });
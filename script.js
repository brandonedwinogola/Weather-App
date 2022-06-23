let weather = {
    "apiKey": "f6829966d703e117af245e49ec847b4a"
    fetchweather: function() {
        fetch(
                https: //api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid={cc627cb806829dd4c73c00f273ea7725} 
            ).then((response) => response.json())
            .then((data) => console.log(data));
    }
}
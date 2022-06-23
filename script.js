let weather = {
    "apiKey": f6829966d703e117af245e49ec847b4a
        .fetchWeather: function(Town) {
            fetch(
                    "https://api.openweathermap.org/data/2.5/weather?lat={18}&lon={18}&appid={f6829966d703e117af245e49ec847b4a"
                ).then((response) => response.json())
                .then((data) => this.displayweather(data));
        }
    displayweather: function(data) {
        const { name } = data;
        const { icon, description } = data.weather: [0];
        const { temperature, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temperature, humidity, speed)
        document.querySelector("Town").innerText = "weather in" + name
        document.querySelector(".icon").src = "https://api.openweathermap.org/data/2.5/weather? + icon + lat={lat}lon={lon}&appid={API key"

    }
}
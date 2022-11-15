class Weather {
    constructor(weather) {
        this.weatherData = weather;
        this.api = 'https://api.openweathermap.org/data/2.5/forecast/daily?q=';
        this.input;
        this.apiKey = '&appid=ad6e239ec0ac58d0a9836e942aac97eb';
        this.units = '&cnt=16&units=imperial';
        let url = this.api + this.apiKey + this.units;
        this.dayTemp = [];
        this.tenki = "";
        this.rain;
        this.clouds;
        this.clearweather = loadImage('assets/clear.png');
        this.snow;
    }

    update() {
        this.cityName = this.weatherData.name;
        this.weather = this.weatherData.weather[0].main;
        this.temp = (int)(this.weatherData.main.temp);
    }



    display() {
        fill(255);
        noStroke();
        textSize(32);
        text(this.cityName, 100, 100);
        //translate(0, 32);
        text(this.temp, 100, 200);
        text(this.weather, 100, 300);
        image(this.clearweather, 200, 300, 64, 64);

    }
}
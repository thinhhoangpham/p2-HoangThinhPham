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
        this.cloud = createImg('assets/cloud.png');
        this.clearweather = createImg("assets/clear.png");
        this.snow;
        this.iconURL = '';
    }

    update() {
        this.cityName = this.weatherData.name;
        this.weather = this.weatherData.weather[0].main;
        this.temp = (int)(this.weatherData.main.temp);
        this.iconURL = "http://openweathermap.org/img/wn/" + this.weatherData.weather[0].icon + "@4x.png";
        this.icon = createImg(this.iconURL);
        console.log(this.iconURL);
    }



    display(x, y) {
        push();
        fill(255);
        noStroke();
        textSize(32);
        
        //text(this.weather, 100, 300);
        imageMode(CENTER);
        image(this.icon, x, y, 140, 140);
        //translate(64, 0);
        textAlign(LEFT, BOTTOM);
        text(this.temp + "℉", x + 48, y);
        textSize(20);
        textAlign(LEFT, BOTTOM);
        text(this.cityName, x + 48, y + 32);
        pop();

    }
}
class Wheather {
    constructor(city)
    {
        this.apiKey = '50d53005c0fd5f556bb4ef15224c4209'
        this.city = city
        this.apiFetchUrl = `http://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=metric&APPID=${this.apiKey}`
        this.cityData = []
    }

    fetchCityData () {
        
    fetch(this.apiFetchUrl)
        .then(resp => resp.json())
        .then(resp => {
            this.cityData.push(
                {
                    temp: resp.main.temp,
                    humidity: resp.main.humidity,
                    pressure: resp.main.pressure
                }
            )
        })
    }

    displayCityData () {
        return  this.cityData;
    }
}
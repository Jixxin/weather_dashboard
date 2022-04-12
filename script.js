var cityEl = $('#city')
var tempEl = $('#temp')
var windEl = $('#wind')
var oneDayEl = $('#1day')
var twoDayEl = $('#2day')
var threeDayEl = $('#3day')
var fourDayEl = $('#4day')
var fiveDayEl = $('#5day')
var oneTempEl = $('#1temp')
var twoTempEl = $('#2temp')
var threeTempEl = $('#3temp')
var fourTempEl = $('#4temp')
var fiveTempEl = $('#5temp')
var oneWindEl = $('#1wind')
var twoWindEl = $('#2wind')
var threeWindEl = $('#3wind')
var fourWindEl = $('#4wind')
var fiveWindEl = $('#5wind')
var oneHumidEl = $('#1humidity')
var twoHumidEl = $('#2humidity')
var threeHumidEl = $('#3humidity')
var fourHumidEl = $('#4humidity')
var fiveHumidEl = $('#5humidity')
var oneEmblemEl = $('#1emblem')
var twoEmblemEl = $('#2emblem')
var threeEmblemEl = $('#3emblem')
var fourEmblemEl = $('#4emblem')
var fiveEmblemEl = $('#5emblem')
var humidityEl = $('#humidity')
var uvIndexEl = $('#uvIndex')
var inputEl = $('')
var citySearch = $('#input')
var searchButtonEl = $('#searchButton')
var currentTime = moment().format('(M/D/YYYY)')

function searchWeather() {
    var apiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=' + citySearch.val() + ',us&APPID=2de75dffb1639889919b9fefd2abcc87'

    fetch(apiUrl, {

    })
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {

            var cityApi = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + data.coord.lat + '&lon=' + data.coord.lon + '&exclude=hourly&units=imperial&appid=2de75dffb1639889919b9fefd2abcc87'


            fetch(cityApi, {

            })

                .then(function (otherResponse) {
                    return otherResponse.json()
                })
                .then(function (pullData) {

                    var iconcode = pullData.current.weather[0].icon
                    var oneEm = pullData.daily[0].weather[0].icon
                    var twoEm = pullData.daily[1].weather[0].icon
                    var threeEm = pullData.daily[2].weather[0].icon
                    var fourEm = pullData.daily[3].weather[0].icon
                    var fiveEm = pullData.daily[4].weather[0].icon
                    var realCode = '"http://openweathermap.org/img/w/' + iconcode + '.png"'
                    var oneCode = '"http://openweathermap.org/img/w/' + oneEm + '.png"'
                    var twoCode = '"http://openweathermap.org/img/w/' + twoEm + '.png"'
                    var threeCode = '"http://openweathermap.org/img/w/' + threeEm + '.png"'
                    var fourCode = '"http://openweathermap.org/img/w/' + fourEm + '.png"'
                    var fiveCode = '"http://openweathermap.org/img/w/' + fiveEm + '.png"'




                    cityEl.text(data.name + "   " + currentTime).append('<img id="theImg" src=' + realCode + '' + '</img>')

                    tempEl.text("Temp: " + pullData.current.temp + "°F")
                    windEl.text("Wind: " + pullData.current.wind_speed + " MPH")
                    humidityEl.text("Humidity: " + pullData.current.humidity + "%")
                    uvIndexEl.text("UV Index: " + pullData.current.uvi)

                    oneDayEl.text(moment().add(1, 'day').format('(M/D/YYYY)'))
                    twoDayEl.text(moment().add(2, 'day').format('(M/D/YYYY)'))
                    threeDayEl.text(moment().add(3, 'day').format('(M/D/YYYY)'))
                    fourDayEl.text(moment().add(4, 'day').format('(M/D/YYYY)'))
                    fiveDayEl.text(moment().add(5, 'day').format('(M/D/YYYY)'))

                    oneEmblemEl.empty()
                    twoEmblemEl.empty()
                    threeEmblemEl.empty()
                    fourEmblemEl.empty()
                    fiveEmblemEl.empty()

                    oneEmblemEl.append('<img id="theImg" src=' + oneCode + '' + '</img>')
                    twoEmblemEl.append('<img id="theImg" src=' + twoCode + '' + '</img>')
                    threeEmblemEl.append('<img id="theImg" src=' + threeCode + '' + '</img>')
                    fourEmblemEl.append('<img id="theImg" src=' + fourCode + '' + '</img>')
                    fiveEmblemEl.append('<img id="theImg" src=' + fiveCode + '' + '</img>')

                    oneTempEl.text("Temp: " + pullData.daily[0].temp.day + "°F")
                    twoTempEl.text("Temp: " + pullData.daily[1].temp.day + "°F")
                    threeTempEl.text("Temp: " + pullData.daily[2].temp.day + "°F")
                    fourTempEl.text("Temp: " + pullData.daily[3].temp.day + "°F")
                    fiveTempEl.text("Temp: " + pullData.daily[4].temp.day + "°F")

                    oneWindEl.text("Wind: " + pullData.daily[0].wind_speed + " MPH")
                    twoWindEl.text("Wind: " + pullData.daily[1].wind_speed + " MPH")
                    threeWindEl.text("Wind: " + pullData.daily[2].wind_speed + " MPH")
                    fourWindEl.text("Wind: " + pullData.daily[3].wind_speed + " MPH")
                    fiveWindEl.text("Wind: " + pullData.daily[4].wind_speed + " MPH")

                    oneHumidEl.text("Humidity: " + pullData.daily[0].humidity + "%")
                    twoHumidEl.text("Humidity: " + pullData.daily[1].humidity + "%")
                    threeHumidEl.text("Humidity: " + pullData.daily[2].humidity + "%")
                    fourHumidEl.text("Humidity: " + pullData.daily[3].humidity + "%")
                    fiveHumidEl.text("Humidity: " + pullData.daily[4].humidity + "%")
                })

        })

}
function austinWeather() {
    var apiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=austin,us&APPID=2de75dffb1639889919b9fefd2abcc87'

    fetch(apiUrl, {

    })
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            var cityApi = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + data.coord.lat + '&lon=' + data.coord.lon + '&exclude=hourly&units=imperial&appid=2de75dffb1639889919b9fefd2abcc87'


            fetch(cityApi, {

            })

                .then(function (otherResponse) {
                    return otherResponse.json()
                })
                .then(function (pullData) {


                    var iconcode = pullData.current.weather[0].icon
                    var oneEm = pullData.daily[0].weather[0].icon
                    var twoEm = pullData.daily[1].weather[0].icon
                    var threeEm = pullData.daily[2].weather[0].icon
                    var fourEm = pullData.daily[3].weather[0].icon
                    var fiveEm = pullData.daily[4].weather[0].icon
                    var realCode = '"http://openweathermap.org/img/w/' + iconcode + '.png"'
                    var oneCode = '"http://openweathermap.org/img/w/' + oneEm + '.png"'
                    var twoCode = '"http://openweathermap.org/img/w/' + twoEm + '.png"'
                    var threeCode = '"http://openweathermap.org/img/w/' + threeEm + '.png"'
                    var fourCode = '"http://openweathermap.org/img/w/' + fourEm + '.png"'
                    var fiveCode = '"http://openweathermap.org/img/w/' + fiveEm + '.png"'

                    cityEl.text(data.name + "   " + currentTime).append('<img id="theImg" src=' + realCode + '' + '</img>')

                    tempEl.text("Temp: " + pullData.current.temp + "°F")
                    windEl.text("Wind: " + pullData.current.wind_speed + " MPH")
                    humidityEl.text("Humidity: " + pullData.current.humidity + "%")
                    uvIndexEl.text("UV Index: " + pullData.current.uvi)

                    oneDayEl.text(moment().add(1, 'day').format('(M/D/YYYY)'))
                    twoDayEl.text(moment().add(2, 'day').format('(M/D/YYYY)'))
                    threeDayEl.text(moment().add(3, 'day').format('(M/D/YYYY)'))
                    fourDayEl.text(moment().add(4, 'day').format('(M/D/YYYY)'))
                    fiveDayEl.text(moment().add(5, 'day').format('(M/D/YYYY)'))

                    oneEmblemEl.empty()
                    twoEmblemEl.empty()
                    threeEmblemEl.empty()
                    fourEmblemEl.empty()
                    fiveEmblemEl.empty()

                    oneEmblemEl.append('<img id="theImg" src=' + oneCode + '' + '</img>')
                    twoEmblemEl.append('<img id="theImg" src=' + twoCode + '' + '</img>')
                    threeEmblemEl.append('<img id="theImg" src=' + threeCode + '' + '</img>')
                    fourEmblemEl.append('<img id="theImg" src=' + fourCode + '' + '</img>')
                    fiveEmblemEl.append('<img id="theImg" src=' + fiveCode + '' + '</img>')

                    oneTempEl.text("Temp: " + pullData.daily[0].temp.day + "°F")
                    twoTempEl.text("Temp: " + pullData.daily[1].temp.day + "°F")
                    threeTempEl.text("Temp: " + pullData.daily[2].temp.day + "°F")
                    fourTempEl.text("Temp: " + pullData.daily[3].temp.day + "°F")
                    fiveTempEl.text("Temp: " + pullData.daily[4].temp.day + "°F")

                    oneWindEl.text("Wind: " + pullData.daily[0].wind_speed + " MPH")
                    twoWindEl.text("Wind: " + pullData.daily[1].wind_speed + " MPH")
                    threeWindEl.text("Wind: " + pullData.daily[2].wind_speed + " MPH")
                    fourWindEl.text("Wind: " + pullData.daily[3].wind_speed + " MPH")
                    fiveWindEl.text("Wind: " + pullData.daily[4].wind_speed + " MPH")

                    oneHumidEl.text("Humidity: " + pullData.daily[0].humidity + "%")
                    twoHumidEl.text("Humidity: " + pullData.daily[1].humidity + "%")
                    threeHumidEl.text("Humidity: " + pullData.daily[2].humidity + "%")
                    fourHumidEl.text("Humidity: " + pullData.daily[3].humidity + "%")
                    fiveHumidEl.text("Humidity: " + pullData.daily[4].humidity + "%")
                })

        })

}
function chicagoWeather() {
    var apiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=chicago,us&APPID=2de75dffb1639889919b9fefd2abcc87'

    fetch(apiUrl, {

    })
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            var cityApi = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + data.coord.lat + '&lon=' + data.coord.lon + '&exclude=hourly&units=imperial&appid=2de75dffb1639889919b9fefd2abcc87'


            fetch(cityApi, {

            })

                .then(function (otherResponse) {
                    return otherResponse.json()
                })
                .then(function (pullData) {


                    var iconcode = pullData.current.weather[0].icon
                    var oneEm = pullData.daily[0].weather[0].icon
                    var twoEm = pullData.daily[1].weather[0].icon
                    var threeEm = pullData.daily[2].weather[0].icon
                    var fourEm = pullData.daily[3].weather[0].icon
                    var fiveEm = pullData.daily[4].weather[0].icon
                    var realCode = '"http://openweathermap.org/img/w/' + iconcode + '.png"'
                    var oneCode = '"http://openweathermap.org/img/w/' + oneEm + '.png"'
                    var twoCode = '"http://openweathermap.org/img/w/' + twoEm + '.png"'
                    var threeCode = '"http://openweathermap.org/img/w/' + threeEm + '.png"'
                    var fourCode = '"http://openweathermap.org/img/w/' + fourEm + '.png"'
                    var fiveCode = '"http://openweathermap.org/img/w/' + fiveEm + '.png"'

                    cityEl.text(data.name + "   " + currentTime).append('<img id="theImg" src=' + realCode + '' + '</img>')

                    tempEl.text("Temp: " + pullData.current.temp + "°F")
                    windEl.text("Wind: " + pullData.current.wind_speed + " MPH")
                    humidityEl.text("Humidity: " + pullData.current.humidity + "%")
                    uvIndexEl.text("UV Index: " + pullData.current.uvi)

                    oneDayEl.text(moment().add(1, 'day').format('(M/D/YYYY)'))
                    twoDayEl.text(moment().add(2, 'day').format('(M/D/YYYY)'))
                    threeDayEl.text(moment().add(3, 'day').format('(M/D/YYYY)'))
                    fourDayEl.text(moment().add(4, 'day').format('(M/D/YYYY)'))
                    fiveDayEl.text(moment().add(5, 'day').format('(M/D/YYYY)'))

                    oneEmblemEl.empty()
                    twoEmblemEl.empty()
                    threeEmblemEl.empty()
                    fourEmblemEl.empty()
                    fiveEmblemEl.empty()

                    oneEmblemEl.append('<img id="theImg" src=' + oneCode + '' + '</img>')
                    twoEmblemEl.append('<img id="theImg" src=' + twoCode + '' + '</img>')
                    threeEmblemEl.append('<img id="theImg" src=' + threeCode + '' + '</img>')
                    fourEmblemEl.append('<img id="theImg" src=' + fourCode + '' + '</img>')
                    fiveEmblemEl.append('<img id="theImg" src=' + fiveCode + '' + '</img>')

                    oneTempEl.text("Temp: " + pullData.daily[0].temp.day + "°F")
                    twoTempEl.text("Temp: " + pullData.daily[1].temp.day + "°F")
                    threeTempEl.text("Temp: " + pullData.daily[2].temp.day + "°F")
                    fourTempEl.text("Temp: " + pullData.daily[3].temp.day + "°F")
                    fiveTempEl.text("Temp: " + pullData.daily[4].temp.day + "°F")

                    oneWindEl.text("Wind: " + pullData.daily[0].wind_speed + " MPH")
                    twoWindEl.text("Wind: " + pullData.daily[1].wind_speed + " MPH")
                    threeWindEl.text("Wind: " + pullData.daily[2].wind_speed + " MPH")
                    fourWindEl.text("Wind: " + pullData.daily[3].wind_speed + " MPH")
                    fiveWindEl.text("Wind: " + pullData.daily[4].wind_speed + " MPH")

                    oneHumidEl.text("Humidity: " + pullData.daily[0].humidity + "%")
                    twoHumidEl.text("Humidity: " + pullData.daily[1].humidity + "%")
                    threeHumidEl.text("Humidity: " + pullData.daily[2].humidity + "%")
                    fourHumidEl.text("Humidity: " + pullData.daily[3].humidity + "%")
                    fiveHumidEl.text("Humidity: " + pullData.daily[4].humidity + "%")
                })

        })

}
function newyorkWeather() {
    var apiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=new%20york,us&APPID=2de75dffb1639889919b9fefd2abcc87'

    fetch(apiUrl, {

    })
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            var cityApi = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + data.coord.lat + '&lon=' + data.coord.lon + '&exclude=hourly&units=imperial&appid=2de75dffb1639889919b9fefd2abcc87'

            fetch(cityApi, {

            })

                .then(function (otherResponse) {
                    return otherResponse.json()
                })
                .then(function (pullData) {



                    var iconcode = pullData.current.weather[0].icon
                    var oneEm = pullData.daily[0].weather[0].icon
                    var twoEm = pullData.daily[1].weather[0].icon
                    var threeEm = pullData.daily[2].weather[0].icon
                    var fourEm = pullData.daily[3].weather[0].icon
                    var fiveEm = pullData.daily[4].weather[0].icon
                    var realCode = '"http://openweathermap.org/img/w/' + iconcode + '.png"'
                    var oneCode = '"http://openweathermap.org/img/w/' + oneEm + '.png"'
                    var twoCode = '"http://openweathermap.org/img/w/' + twoEm + '.png"'
                    var threeCode = '"http://openweathermap.org/img/w/' + threeEm + '.png"'
                    var fourCode = '"http://openweathermap.org/img/w/' + fourEm + '.png"'
                    var fiveCode = '"http://openweathermap.org/img/w/' + fiveEm + '.png"'

                    cityEl.text(data.name + "   " + currentTime).append('<img id="theImg" src=' + realCode + '' + '</img>')

                    tempEl.text("Temp: " + pullData.current.temp + "°F")
                    windEl.text("Wind: " + pullData.current.wind_speed + " MPH")
                    humidityEl.text("Humidity: " + pullData.current.humidity + "%")
                    uvIndexEl.text("UV Index: " + pullData.current.uvi)

                    oneDayEl.text(moment().add(1, 'day').format('(M/D/YYYY)'))
                    twoDayEl.text(moment().add(2, 'day').format('(M/D/YYYY)'))
                    threeDayEl.text(moment().add(3, 'day').format('(M/D/YYYY)'))
                    fourDayEl.text(moment().add(4, 'day').format('(M/D/YYYY)'))
                    fiveDayEl.text(moment().add(5, 'day').format('(M/D/YYYY)'))

                    oneEmblemEl.empty()
                    twoEmblemEl.empty()
                    threeEmblemEl.empty()
                    fourEmblemEl.empty()
                    fiveEmblemEl.empty()

                    oneEmblemEl.append('<img id="theImg" src=' + oneCode + '' + '</img>')
                    twoEmblemEl.append('<img id="theImg" src=' + twoCode + '' + '</img>')
                    threeEmblemEl.append('<img id="theImg" src=' + threeCode + '' + '</img>')
                    fourEmblemEl.append('<img id="theImg" src=' + fourCode + '' + '</img>')
                    fiveEmblemEl.append('<img id="theImg" src=' + fiveCode + '' + '</img>')

                    oneTempEl.text("Temp: " + pullData.daily[0].temp.day + "°F")
                    twoTempEl.text("Temp: " + pullData.daily[1].temp.day + "°F")
                    threeTempEl.text("Temp: " + pullData.daily[2].temp.day + "°F")
                    fourTempEl.text("Temp: " + pullData.daily[3].temp.day + "°F")
                    fiveTempEl.text("Temp: " + pullData.daily[4].temp.day + "°F")

                    oneWindEl.text("Wind: " + pullData.daily[0].wind_speed + " MPH")
                    twoWindEl.text("Wind: " + pullData.daily[1].wind_speed + " MPH")
                    threeWindEl.text("Wind: " + pullData.daily[2].wind_speed + " MPH")
                    fourWindEl.text("Wind: " + pullData.daily[3].wind_speed + " MPH")
                    fiveWindEl.text("Wind: " + pullData.daily[4].wind_speed + " MPH")

                    oneHumidEl.text("Humidity: " + pullData.daily[0].humidity + "%")
                    twoHumidEl.text("Humidity: " + pullData.daily[1].humidity + "%")
                    threeHumidEl.text("Humidity: " + pullData.daily[2].humidity + "%")
                    fourHumidEl.text("Humidity: " + pullData.daily[3].humidity + "%")
                    fiveHumidEl.text("Humidity: " + pullData.daily[4].humidity + "%")
                })

        })

}
function orlandoWeather() {
    var apiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=orlando,us&APPID=2de75dffb1639889919b9fefd2abcc87'

    fetch(apiUrl, {

    })
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            var cityApi = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + data.coord.lat + '&lon=' + data.coord.lon + '&exclude=hourly&units=imperial&appid=2de75dffb1639889919b9fefd2abcc87'

            fetch(cityApi, {

            })

                .then(function (otherResponse) {
                    return otherResponse.json()
                })
                .then(function (pullData) {



                    var iconcode = pullData.current.weather[0].icon
                    var oneEm = pullData.daily[0].weather[0].icon
                    var twoEm = pullData.daily[1].weather[0].icon
                    var threeEm = pullData.daily[2].weather[0].icon
                    var fourEm = pullData.daily[3].weather[0].icon
                    var fiveEm = pullData.daily[4].weather[0].icon
                    var realCode = '"http://openweathermap.org/img/w/' + iconcode + '.png"'
                    var oneCode = '"http://openweathermap.org/img/w/' + oneEm + '.png"'
                    var twoCode = '"http://openweathermap.org/img/w/' + twoEm + '.png"'
                    var threeCode = '"http://openweathermap.org/img/w/' + threeEm + '.png"'
                    var fourCode = '"http://openweathermap.org/img/w/' + fourEm + '.png"'
                    var fiveCode = '"http://openweathermap.org/img/w/' + fiveEm + '.png"'

                    cityEl.text(data.name + "   " + currentTime).append('<img id="theImg" src=' + realCode + '' + '</img>')

                    tempEl.text("Temp: " + pullData.current.temp + "°F")
                    windEl.text("Wind: " + pullData.current.wind_speed + " MPH")
                    humidityEl.text("Humidity: " + pullData.current.humidity + "%")
                    uvIndexEl.text("UV Index: " + pullData.current.uvi)

                    oneDayEl.text(moment().add(1, 'day').format('(M/D/YYYY)'))
                    twoDayEl.text(moment().add(2, 'day').format('(M/D/YYYY)'))
                    threeDayEl.text(moment().add(3, 'day').format('(M/D/YYYY)'))
                    fourDayEl.text(moment().add(4, 'day').format('(M/D/YYYY)'))
                    fiveDayEl.text(moment().add(5, 'day').format('(M/D/YYYY)'))

                    oneEmblemEl.empty()
                    twoEmblemEl.empty()
                    threeEmblemEl.empty()
                    fourEmblemEl.empty()
                    fiveEmblemEl.empty()

                    oneEmblemEl.append('<img id="theImg" src=' + oneCode + '' + '</img>')
                    twoEmblemEl.append('<img id="theImg" src=' + twoCode + '' + '</img>')
                    threeEmblemEl.append('<img id="theImg" src=' + threeCode + '' + '</img>')
                    fourEmblemEl.append('<img id="theImg" src=' + fourCode + '' + '</img>')
                    fiveEmblemEl.append('<img id="theImg" src=' + fiveCode + '' + '</img>')

                    oneTempEl.text("Temp: " + pullData.daily[0].temp.day + "°F")
                    twoTempEl.text("Temp: " + pullData.daily[1].temp.day + "°F")
                    threeTempEl.text("Temp: " + pullData.daily[2].temp.day + "°F")
                    fourTempEl.text("Temp: " + pullData.daily[3].temp.day + "°F")
                    fiveTempEl.text("Temp: " + pullData.daily[4].temp.day + "°F")

                    oneWindEl.text("Wind: " + pullData.daily[0].wind_speed + " MPH")
                    twoWindEl.text("Wind: " + pullData.daily[1].wind_speed + " MPH")
                    threeWindEl.text("Wind: " + pullData.daily[2].wind_speed + " MPH")
                    fourWindEl.text("Wind: " + pullData.daily[3].wind_speed + " MPH")
                    fiveWindEl.text("Wind: " + pullData.daily[4].wind_speed + " MPH")

                    oneHumidEl.text("Humidity: " + pullData.daily[0].humidity + "%")
                    twoHumidEl.text("Humidity: " + pullData.daily[1].humidity + "%")
                    threeHumidEl.text("Humidity: " + pullData.daily[2].humidity + "%")
                    fourHumidEl.text("Humidity: " + pullData.daily[3].humidity + "%")
                    fiveHumidEl.text("Humidity: " + pullData.daily[4].humidity + "%")
                })

        })

}
function sanfranWeather() {
    var apiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=san%20francisco,us&APPID=2de75dffb1639889919b9fefd2abcc87'

    fetch(apiUrl, {

    })
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            var cityApi = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + data.coord.lat + '&lon=' + data.coord.lon + '&exclude=hourly&units=imperial&appid=2de75dffb1639889919b9fefd2abcc87'


            fetch(cityApi, {

            })

                .then(function (otherResponse) {
                    return otherResponse.json()
                })
                .then(function (pullData) {



                    var iconcode = pullData.current.weather[0].icon
                    var oneEm = pullData.daily[0].weather[0].icon
                    var twoEm = pullData.daily[1].weather[0].icon
                    var threeEm = pullData.daily[2].weather[0].icon
                    var fourEm = pullData.daily[3].weather[0].icon
                    var fiveEm = pullData.daily[4].weather[0].icon
                    var realCode = '"http://openweathermap.org/img/w/' + iconcode + '.png"'
                    var oneCode = '"http://openweathermap.org/img/w/' + oneEm + '.png"'
                    var twoCode = '"http://openweathermap.org/img/w/' + twoEm + '.png"'
                    var threeCode = '"http://openweathermap.org/img/w/' + threeEm + '.png"'
                    var fourCode = '"http://openweathermap.org/img/w/' + fourEm + '.png"'
                    var fiveCode = '"http://openweathermap.org/img/w/' + fiveEm + '.png"'

                    cityEl.text(data.name + "   " + currentTime).append('<img id="theImg" src=' + realCode + '' + '</img>')

                    tempEl.text("Temp: " + pullData.current.temp + "°F")
                    windEl.text("Wind: " + pullData.current.wind_speed + " MPH")
                    humidityEl.text("Humidity: " + pullData.current.humidity + "%")
                    uvIndexEl.text("UV Index: " + pullData.current.uvi)

                    oneDayEl.text(moment().add(1, 'day').format('(M/D/YYYY)'))
                    twoDayEl.text(moment().add(2, 'day').format('(M/D/YYYY)'))
                    threeDayEl.text(moment().add(3, 'day').format('(M/D/YYYY)'))
                    fourDayEl.text(moment().add(4, 'day').format('(M/D/YYYY)'))
                    fiveDayEl.text(moment().add(5, 'day').format('(M/D/YYYY)'))

                    oneEmblemEl.empty()
                    twoEmblemEl.empty()
                    threeEmblemEl.empty()
                    fourEmblemEl.empty()
                    fiveEmblemEl.empty()

                    oneEmblemEl.append('<img id="theImg" src=' + oneCode + '' + '</img>')
                    twoEmblemEl.append('<img id="theImg" src=' + twoCode + '' + '</img>')
                    threeEmblemEl.append('<img id="theImg" src=' + threeCode + '' + '</img>')
                    fourEmblemEl.append('<img id="theImg" src=' + fourCode + '' + '</img>')
                    fiveEmblemEl.append('<img id="theImg" src=' + fiveCode + '' + '</img>')

                    oneTempEl.text("Temp: " + pullData.daily[0].temp.day + "°F")
                    twoTempEl.text("Temp: " + pullData.daily[1].temp.day + "°F")
                    threeTempEl.text("Temp: " + pullData.daily[2].temp.day + "°F")
                    fourTempEl.text("Temp: " + pullData.daily[3].temp.day + "°F")
                    fiveTempEl.text("Temp: " + pullData.daily[4].temp.day + "°F")

                    oneWindEl.text("Wind: " + pullData.daily[0].wind_speed + " MPH")
                    twoWindEl.text("Wind: " + pullData.daily[1].wind_speed + " MPH")
                    threeWindEl.text("Wind: " + pullData.daily[2].wind_speed + " MPH")
                    fourWindEl.text("Wind: " + pullData.daily[3].wind_speed + " MPH")
                    fiveWindEl.text("Wind: " + pullData.daily[4].wind_speed + " MPH")

                    oneHumidEl.text("Humidity: " + pullData.daily[0].humidity + "%")
                    twoHumidEl.text("Humidity: " + pullData.daily[1].humidity + "%")
                    threeHumidEl.text("Humidity: " + pullData.daily[2].humidity + "%")
                    fourHumidEl.text("Humidity: " + pullData.daily[3].humidity + "%")
                    fiveHumidEl.text("Humidity: " + pullData.daily[4].humidity + "%")
                })

        })

}
function seattleWeather() {
    var apiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=seattle,us&APPID=2de75dffb1639889919b9fefd2abcc87'

    fetch(apiUrl, {

    })
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            var cityApi = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + data.coord.lat + '&lon=' + data.coord.lon + '&exclude=hourly&units=imperial&appid=2de75dffb1639889919b9fefd2abcc87'


            fetch(cityApi, {

            })

                .then(function (otherResponse) {
                    return otherResponse.json()
                })
                .then(function (pullData) {



                    var iconcode = pullData.current.weather[0].icon
                    var oneEm = pullData.daily[0].weather[0].icon
                    var twoEm = pullData.daily[1].weather[0].icon
                    var threeEm = pullData.daily[2].weather[0].icon
                    var fourEm = pullData.daily[3].weather[0].icon
                    var fiveEm = pullData.daily[4].weather[0].icon
                    var realCode = '"http://openweathermap.org/img/w/' + iconcode + '.png"'
                    var oneCode = '"http://openweathermap.org/img/w/' + oneEm + '.png"'
                    var twoCode = '"http://openweathermap.org/img/w/' + twoEm + '.png"'
                    var threeCode = '"http://openweathermap.org/img/w/' + threeEm + '.png"'
                    var fourCode = '"http://openweathermap.org/img/w/' + fourEm + '.png"'
                    var fiveCode = '"http://openweathermap.org/img/w/' + fiveEm + '.png"'

                    cityEl.text(data.name + "   " + currentTime).append('<img id="theImg" src=' + realCode + '' + '</img>')

                    tempEl.text("Temp: " + pullData.current.temp + "°F")
                    windEl.text("Wind: " + pullData.current.wind_speed + " MPH")
                    humidityEl.text("Humidity: " + pullData.current.humidity + "%")
                    uvIndexEl.text("UV Index: " + pullData.current.uvi)

                    oneDayEl.text(moment().add(1, 'day').format('(M/D/YYYY)'))
                    twoDayEl.text(moment().add(2, 'day').format('(M/D/YYYY)'))
                    threeDayEl.text(moment().add(3, 'day').format('(M/D/YYYY)'))
                    fourDayEl.text(moment().add(4, 'day').format('(M/D/YYYY)'))
                    fiveDayEl.text(moment().add(5, 'day').format('(M/D/YYYY)'))

                    oneEmblemEl.empty()
                    twoEmblemEl.empty()
                    threeEmblemEl.empty()
                    fourEmblemEl.empty()
                    fiveEmblemEl.empty()


                    oneEmblemEl.append('<img id="theImg" src=' + oneCode + '' + '</img>')
                    twoEmblemEl.append('<img id="theImg" src=' + twoCode + '' + '</img>')
                    threeEmblemEl.append('<img id="theImg" src=' + threeCode + '' + '</img>')
                    fourEmblemEl.append('<img id="theImg" src=' + fourCode + '' + '</img>')
                    fiveEmblemEl.append('<img id="theImg" src=' + fiveCode + '' + '</img>')

                    oneTempEl.text("Temp: " + pullData.daily[0].temp.day + "°F")
                    twoTempEl.text("Temp: " + pullData.daily[1].temp.day + "°F")
                    threeTempEl.text("Temp: " + pullData.daily[2].temp.day + "°F")
                    fourTempEl.text("Temp: " + pullData.daily[3].temp.day + "°F")
                    fiveTempEl.text("Temp: " + pullData.daily[4].temp.day + "°F")

                    oneWindEl.text("Wind: " + pullData.daily[0].wind_speed + " MPH")
                    twoWindEl.text("Wind: " + pullData.daily[1].wind_speed + " MPH")
                    threeWindEl.text("Wind: " + pullData.daily[2].wind_speed + " MPH")
                    fourWindEl.text("Wind: " + pullData.daily[3].wind_speed + " MPH")
                    fiveWindEl.text("Wind: " + pullData.daily[4].wind_speed + " MPH")

                    oneHumidEl.text("Humidity: " + pullData.daily[0].humidity + "%")
                    twoHumidEl.text("Humidity: " + pullData.daily[1].humidity + "%")
                    threeHumidEl.text("Humidity: " + pullData.daily[2].humidity + "%")
                    fourHumidEl.text("Humidity: " + pullData.daily[3].humidity + "%")
                    fiveHumidEl.text("Humidity: " + pullData.daily[4].humidity + "%")
                })

        })

}
function denverWeather() {
    var apiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=denver,us&APPID=2de75dffb1639889919b9fefd2abcc87'

    fetch(apiUrl, {

    })
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            var cityApi = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + data.coord.lat + '&lon=' + data.coord.lon + '&exclude=hourly&units=imperial&appid=2de75dffb1639889919b9fefd2abcc87'


            fetch(cityApi, {

            })

                .then(function (otherResponse) {
                    return otherResponse.json()
                })
                .then(function (pullData) {



                    var iconcode = pullData.current.weather[0].icon
                    var oneEm = pullData.daily[0].weather[0].icon
                    var twoEm = pullData.daily[1].weather[0].icon
                    var threeEm = pullData.daily[2].weather[0].icon
                    var fourEm = pullData.daily[3].weather[0].icon
                    var fiveEm = pullData.daily[4].weather[0].icon
                    var realCode = '"http://openweathermap.org/img/w/' + iconcode + '.png"'
                    var oneCode = '"http://openweathermap.org/img/w/' + oneEm + '.png"'
                    var twoCode = '"http://openweathermap.org/img/w/' + twoEm + '.png"'
                    var threeCode = '"http://openweathermap.org/img/w/' + threeEm + '.png"'
                    var fourCode = '"http://openweathermap.org/img/w/' + fourEm + '.png"'
                    var fiveCode = '"http://openweathermap.org/img/w/' + fiveEm + '.png"'

                    cityEl.text(data.name + "   " + currentTime).append('<img id="theImg" src=' + realCode + '' + '</img>')

                    tempEl.text("Temp: " + pullData.current.temp + "°F")
                    windEl.text("Wind: " + pullData.current.wind_speed + " MPH")
                    humidityEl.text("Humidity: " + pullData.current.humidity + "%")
                    uvIndexEl.text("UV Index: " + pullData.current.uvi)

                    oneDayEl.text(moment().add(1, 'day').format('(M/D/YYYY)'))
                    twoDayEl.text(moment().add(2, 'day').format('(M/D/YYYY)'))
                    threeDayEl.text(moment().add(3, 'day').format('(M/D/YYYY)'))
                    fourDayEl.text(moment().add(4, 'day').format('(M/D/YYYY)'))
                    fiveDayEl.text(moment().add(5, 'day').format('(M/D/YYYY)'))

                    oneEmblemEl.empty()
                    twoEmblemEl.empty()
                    threeEmblemEl.empty()
                    fourEmblemEl.empty()
                    fiveEmblemEl.empty()

                    oneEmblemEl.append('<img id="theImg" src=' + oneCode + '' + '</img>')
                    twoEmblemEl.append('<img id="theImg" src=' + twoCode + '' + '</img>')
                    threeEmblemEl.append('<img id="theImg" src=' + threeCode + '' + '</img>')
                    fourEmblemEl.append('<img id="theImg" src=' + fourCode + '' + '</img>')
                    fiveEmblemEl.append('<img id="theImg" src=' + fiveCode + '' + '</img>')

                    oneTempEl.text("Temp: " + pullData.daily[0].temp.day + "°F")
                    twoTempEl.text("Temp: " + pullData.daily[1].temp.day + "°F")
                    threeTempEl.text("Temp: " + pullData.daily[2].temp.day + "°F")
                    fourTempEl.text("Temp: " + pullData.daily[3].temp.day + "°F")
                    fiveTempEl.text("Temp: " + pullData.daily[4].temp.day + "°F")

                    oneWindEl.text("Wind: " + pullData.daily[0].wind_speed + " MPH")
                    twoWindEl.text("Wind: " + pullData.daily[1].wind_speed + " MPH")
                    threeWindEl.text("Wind: " + pullData.daily[2].wind_speed + " MPH")
                    fourWindEl.text("Wind: " + pullData.daily[3].wind_speed + " MPH")
                    fiveWindEl.text("Wind: " + pullData.daily[4].wind_speed + " MPH")

                    oneHumidEl.text("Humidity: " + pullData.daily[0].humidity + "%")
                    twoHumidEl.text("Humidity: " + pullData.daily[1].humidity + "%")
                    threeHumidEl.text("Humidity: " + pullData.daily[2].humidity + "%")
                    fourHumidEl.text("Humidity: " + pullData.daily[3].humidity + "%")
                    fiveHumidEl.text("Humidity: " + pullData.daily[4].humidity + "%")
                })

        })

}
function atlantaWeather() {
    var apiUrl = 'http://api.openweathermap.org/data/2.5/weather?q=atlanta,us&APPID=2de75dffb1639889919b9fefd2abcc87'

    fetch(apiUrl, {

    })
        .then(function (response) {
            return response.json()
        })
        .then(function (data) {
            var cityApi = 'https://api.openweathermap.org/data/2.5/onecall?lat=' + data.coord.lat + '&lon=' + data.coord.lon + '&exclude=hourly&units=imperial&appid=2de75dffb1639889919b9fefd2abcc87'


            fetch(cityApi, {

            })

                .then(function (otherResponse) {
                    return otherResponse.json()
                })
                .then(function (pullData) {



                    var iconcode = pullData.current.weather[0].icon
                    var oneEm = pullData.daily[0].weather[0].icon
                    var twoEm = pullData.daily[1].weather[0].icon
                    var threeEm = pullData.daily[2].weather[0].icon
                    var fourEm = pullData.daily[3].weather[0].icon
                    var fiveEm = pullData.daily[4].weather[0].icon
                    var realCode = '"http://openweathermap.org/img/w/' + iconcode + '.png"'
                    var oneCode = '"http://openweathermap.org/img/w/' + oneEm + '.png"'
                    var twoCode = '"http://openweathermap.org/img/w/' + twoEm + '.png"'
                    var threeCode = '"http://openweathermap.org/img/w/' + threeEm + '.png"'
                    var fourCode = '"http://openweathermap.org/img/w/' + fourEm + '.png"'
                    var fiveCode = '"http://openweathermap.org/img/w/' + fiveEm + '.png"'

                    cityEl.text(data.name + "   " + currentTime).append('<img id="theImg" src=' + realCode + '' + '</img>')

                    tempEl.text("Temp: " + pullData.current.temp + "°F")
                    windEl.text("Wind: " + pullData.current.wind_speed + " MPH")
                    humidityEl.text("Humidity: " + pullData.current.humidity + "%")
                    uvIndexEl.text("UV Index: " + pullData.current.uvi)

                    oneDayEl.text(moment().add(1, 'day').format('(M/D/YYYY)'))
                    twoDayEl.text(moment().add(2, 'day').format('(M/D/YYYY)'))
                    threeDayEl.text(moment().add(3, 'day').format('(M/D/YYYY)'))
                    fourDayEl.text(moment().add(4, 'day').format('(M/D/YYYY)'))
                    fiveDayEl.text(moment().add(5, 'day').format('(M/D/YYYY)'))

                    oneEmblemEl.empty()
                    twoEmblemEl.empty()
                    threeEmblemEl.empty()
                    fourEmblemEl.empty()
                    fiveEmblemEl.empty()

                    oneEmblemEl.append('<img id="theImg" src=' + oneCode + '' + '</img>')
                    twoEmblemEl.append('<img id="theImg" src=' + twoCode + '' + '</img>')
                    threeEmblemEl.append('<img id="theImg" src=' + threeCode + '' + '</img>')
                    fourEmblemEl.append('<img id="theImg" src=' + fourCode + '' + '</img>')
                    fiveEmblemEl.append('<img id="theImg" src=' + fiveCode + '' + '</img>')

                    oneTempEl.text("Temp: " + pullData.daily[0].temp.day + "°F")
                    twoTempEl.text("Temp: " + pullData.daily[1].temp.day + "°F")
                    threeTempEl.text("Temp: " + pullData.daily[2].temp.day + "°F")
                    fourTempEl.text("Temp: " + pullData.daily[3].temp.day + "°F")
                    fiveTempEl.text("Temp: " + pullData.daily[4].temp.day + "°F")

                    oneWindEl.text("Wind: " + pullData.daily[0].wind_speed + " MPH")
                    twoWindEl.text("Wind: " + pullData.daily[1].wind_speed + " MPH")
                    threeWindEl.text("Wind: " + pullData.daily[2].wind_speed + " MPH")
                    fourWindEl.text("Wind: " + pullData.daily[3].wind_speed + " MPH")
                    fiveWindEl.text("Wind: " + pullData.daily[4].wind_speed + " MPH")

                    oneHumidEl.text("Humidity: " + pullData.daily[0].humidity + "%")
                    twoHumidEl.text("Humidity: " + pullData.daily[1].humidity + "%")
                    threeHumidEl.text("Humidity: " + pullData.daily[2].humidity + "%")
                    fourHumidEl.text("Humidity: " + pullData.daily[3].humidity + "%")
                    fiveHumidEl.text("Humidity: " + pullData.daily[4].humidity + "%")
                })

        })

}


searchButtonEl.click(searchWeather)
$('#austinBtn').click(austinWeather)
$('#chicagoBtn').click(chicagoWeather)
$('#newyorkBtn').click(newyorkWeather)
$('#orlandoBtn').click(orlandoWeather)
$('#sanfranBtn').click(sanfranWeather)
$('#seattleBtn').click(seattleWeather)
$('#denverBtn').click(denverWeather)
$('#atlantaBtn').click(atlantaWeather)


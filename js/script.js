/*jslint browser: true*/
/*global $, jQuery, alert*/

var weatherGif = {"Rain": "https://media.giphy.com/media/3osxYcKIttf3N5GTsY/giphy.gif",
                  "Thunderstorm": "https://media.giphy.com/media/8xY1YYpEZ4dws/giphy.gif",
                  "Drizzle": "https://media.giphy.com/media/3o7at59KDANvJrUDbG/giphy.gif",
                  "Atmosphere": "https://media.giphy.com/media/IuKnqFMhtcA2A/giphy.gif",
                  "Clouds": "https://media.giphy.com/media/Cn46Wi1Fvh11S/giphy.gif",
                  "Extreme": "https://media.giphy.com/media/hKCDMgZAhK1HO/giphy.gif",
                  "Additional": "https://media.giphy.com/media/m1J6Fa1nqUeiI/giphy.gif",
                  "Mist": "https://media.giphy.com/media/3o7at59KDANvJrUDbG/giphy.gif",
                  "Clear": "https://media.giphy.com/media/7BurliewSdqFO/giphy.gif",
                  "Fog": "https://media.giphy.com/media/l0MYRbawhDAnyMG4w/source.gif"};

$(document).ready(function () {
    "use strict";
    $("#submit").click(function () {
        var zipCode = document.getElementById("zip").value;

        $.getJSON("http://api.openweathermap.org/data/2.5/weather?zip=" + zipCode + ",us&APPID=30851acc20d637dee2432358d1f40e1c", function (json) {
            $(".location").html(json.name + ", " + json.sys.country);
            $(".conditions").html(json.weather[0].description);
            var tempKRaw = json.main.temp,
                tempKDisplay = Math.round(json.main.temp) + " °K",
                tempFRaw = 1.8 * (tempKRaw - 273) + 32,
                tempFDisplay = Math.round(tempFRaw) + " °F",
                tempCRaw = tempKRaw - 273,
                tempCDisplay = Math.round(tempCRaw) + " °C";
            $(".temp").html(tempFDisplay);
     
            $(document.body).css("background", "url('" + weatherGif[json.weather[0].main] + "') no-repeat center center fixed");
            $(document.body).css("background-size", "cover");
      
            $("#cel").click(function () {
                $(".temp").html(tempCDisplay);
            });
      
            $("#fah").click(function () {
                $(".temp").html(tempFDisplay);
            });
        });
    });
});
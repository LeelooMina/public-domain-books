import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

let showWeather = document.getElementById('showWeather');



function fetchWeather(event) {
  event.preventDefault();
  let cityName = cityInputElem.value;
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=4d8fb5b93d4af21d66a2948710284366&units=imperial`
  ).then((resp)=>{
    return resp.json();
  }).then((weather)=>{
    console.log(weather);

    let tempShow = document.createElement('p');
    let feelsLikeShow = document.createElement('p');
    let weatherTemp = weather.main.temp;
    let weatherFeelsLike = weather.main.feels_like;

    console.log(weather.main.temp);

    tempShow.innerHTML = `${cityName} Current Temperature: ${weatherTemp}`;

    showWeather.appendChild(tempShow);

    feelsLikeShow.innerHTML = `${cityName} Feels Like: ${weatherFeelsLike}`;

    showWeather.appendChild(feelsLikeShow);


})
}

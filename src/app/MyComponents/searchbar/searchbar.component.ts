import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  
  city!: String;
  WeatherData!:any;
  constructor() { }

  ngOnInit(): void {
    this.getWeatherData();
    console.log(this.WeatherData);
  }

  // getCityName() {
  //   alert(this.city);
  // }

  getWeatherData() {
    var link='http://api.openweathermap.org/data/2.5/weather?q='+this.city+'&appid=2b3e1b0b0b1b1b1b1b1b1b1b1b1b1b1b';
    fetch(link)
    .then(response => response.json())
    .then(data => {this.setWeatherData(data);})
  }
  setWeatherData(data: any) {
    console.log(data);
    this.WeatherData=data;
    this.WeatherData['city']=this.city;
  }
}


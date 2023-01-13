import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-weathercard',
  templateUrl: './weathercard.component.html',
  styleUrls: ['./weathercard.component.css']
})
export class WeathercardComponent implements OnInit {

  sun:string="../../../assets/sun.jpg";
  rain:string="../../../assets/raing.png";

  @Input() WeatherData:any;

  constructor() { }

  ngOnInit(): void { 
  }
}


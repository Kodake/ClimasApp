import { Component, OnInit } from '@angular/core';
import { ClimaService } from '../services/clima.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  urlImage = 'https://image.flaticon.com/icons/png/512/1116/1116453.png';
  ciudad = '';
  query = false;
  temperature: number;
  humidity: number;
  weather: number;

  constructor(private climaService: ClimaService) { }

  ngOnInit(): void {
  }

  getClima() {
    this.climaService.getClima(this.ciudad).subscribe(data => {
      this.query = true;
      this.temperature = data.main.temp - 273;
      this.humidity = data.main.humidity;
      this.weather = data.weather[0].main;
    }, error => {
      alert('Ha ocurrido un error');
      this.ciudad = '';
      this.query = false;
    });
  }
}
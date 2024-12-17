import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HttpClient} from '@angular/common/http';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent  implements OnInit {
  title = 'codingdojo';
  course: number = 0;

  constructor(private httpClient: HttpClient) {
    // This service can now make HTTP requests via `this.http`.
  }



  ngOnInit(): void {

    type CourseResponse = {
      price: number,
      symbol: string

    }

    this.httpClient.get('https://data-api.binance.vision/api/v3/ticker/price?symbol=BTCUSDT').subscribe((data) => {
      console.log(data);
      let dataResponse = data as CourseResponse;
      this.course = dataResponse['price'];

    });
  }



}


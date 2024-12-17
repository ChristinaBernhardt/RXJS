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

  constructor(private httpClient: HttpClient) {
    // This service can now make HTTP requests via `this.http`.
  }

  ngOnInit(): void {

  }
}


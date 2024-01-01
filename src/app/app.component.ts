import { Component } from '@angular/core';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'My Art Gallery';
  imageApi: string;
  env: string;
  constructor() {
    // Set different image API and size based on production mode
    this.env = environment.env;
    this.imageApi = environment.production ? environment.imageApiProd : environment.imageApiDev;
  }
}
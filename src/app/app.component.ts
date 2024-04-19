import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls:
  [
    './app.component.css',
    './app.responsive.css',
    './styles.css',
    './bootstrap.css',
  ]
})
export class AppComponent {
  title = 'miColeApp';
  srcAbout:string = './assets/images/about.png';
}

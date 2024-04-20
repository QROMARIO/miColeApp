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
  public srcAbout:string = 'https://i.postimg.cc/qqqDTw9T/about.png';
}

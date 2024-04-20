import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { YouTubePlayer } from '@angular/youtube-player';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    YouTubePlayer,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

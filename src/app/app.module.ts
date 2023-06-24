import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FinishComponent } from './components/finish/finish.component';
import { PlayComponent } from './components/play/play.component';
import { StatsComponent } from './components/stats/stats.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { MatCardModule} from '@angular/material/card';
import { QuizComponent } from './components/quiz/quiz.component';
import { CapitalizePipe } from './pipes/capitalize/capitalize.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FinishComponent,
    PlayComponent,
    StatsComponent,
    QuizComponent,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

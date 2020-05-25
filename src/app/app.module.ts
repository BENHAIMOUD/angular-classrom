import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ParticipantComponent } from './components/participant/participant.component';
import { DiscussionComponent } from './components/discussion/discussion.component';
import { WorksHomeworkComponent } from './components/works-homework/works-homework.component';

@NgModule({
  declarations: [
    AppComponent,
    ParticipantComponent,
    DiscussionComponent,
    WorksHomeworkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

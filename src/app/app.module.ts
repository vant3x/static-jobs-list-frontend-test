import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardDetailJobComponent } from './components/card-detail-job/card-detail-job/card-detail-job.component';
import { ListJobsContainerComponent } from './components/list-jobs-container/list-jobs-container/list-jobs-container.component';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    CardDetailJobComponent,
    ListJobsContainerComponent,
  ],
  imports: [
    SharedModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

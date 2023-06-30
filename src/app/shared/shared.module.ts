import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './components/layout/layout/layout.component';
import { HeaderComponent } from './components/header/header/header.component';
import { FilterJobsComponent } from './../components/filter-jobs/filter-jobs/filter-jobs.component';


@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FilterJobsComponent
  ],
  exports: [
    LayoutComponent,
    HeaderComponent,
    FilterJobsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { JobListing } from 'src/app/data/interfaces/JobListing';

@Component({
  selector: 'app-card-detail-job',
  templateUrl: './card-detail-job.component.html',
  styleUrls: ['./card-detail-job.component.css']
})
export class CardDetailJobComponent {
  @Input() jobData: JobListing = {
    id: 0,
    company: '',
    logo: '',
    new: false,
    featured: false,
    position: '',
    role: '',
    level: '',
    postedAt: '',
    contract: '',
    location: '',
    languages: [],
    tools: []
  };

  @Output() filterApplied: EventEmitter<any> = new EventEmitter<any>();

  applyFilter(filterType: string, value: string): void {
    console.log(filterType);
    console.log(value);
    this.filterApplied.emit({ filterType, value });
  }

}

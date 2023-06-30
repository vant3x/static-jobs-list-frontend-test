import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter-jobs',
  templateUrl: './filter-jobs.component.html',
  styleUrls: ['./filter-jobs.component.css']
})
export class FilterJobsComponent {
  @Input() selectedFilters: { filterType: string, value: string }[] = [];
  @Output() filterRemoved: EventEmitter<string> = new EventEmitter<string>();
  @Output() filtersCleared: EventEmitter<void> = new EventEmitter<void>();

  removeFilter(filterType: string): void {
    this.filterRemoved.emit(filterType);
  }

  clearFilters(): void {
    this.filtersCleared.emit();
  }
}

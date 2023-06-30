  import { Component, OnInit } from '@angular/core';
  import { JobsServicesService } from 'src/app/services/jobs-services/jobs-services.service';
  import { JobListing } from 'src/app/data/interfaces/JobListing';

  @Component({
    selector: 'app-list-jobs-container',
    templateUrl: './list-jobs-container.component.html',
    styleUrls: ['./list-jobs-container.component.css']
  })
  export class ListJobsContainerComponent implements OnInit {
    jobListings: JobListing[] = [];
    filteredJobListings: JobListing[] = [];
    selectedFilters: { filterType: string, value: string }[] = [];


    constructor(private jobsService: JobsServicesService) {}

    ngOnInit(): void {
      this.loadJobListings();
    }

    loadJobListings(): void {
      this.jobsService.getJobListings().subscribe({
        next: (jobListings: JobListing[]) => {
          this.jobListings = jobListings;
          this.filteredJobListings = jobListings;
        },
        error: (error: any) => {
          console.log(error);
        }
      });
    }

    applyFilter(filterType: string, value: string): void {
      const filters = this.selectedFilters.filter(filter => filter.filterType !== filterType);
      filters.push({ filterType, value });
      this.selectedFilters = filters;
      this.filteredJobListings = this.filterListings();
    }
  
    removeFilter(filterType: string): void {
      this.selectedFilters = this.selectedFilters.filter(filter => filter.filterType !== filterType);
      this.filteredJobListings = this.filterListings();
    }

    clearFilters(): void {
      this.selectedFilters = [];
      this.filteredJobListings = this.jobListings;
    }
  
    filterListings(): JobListing[] {
      if (this.selectedFilters.length === 0) {
        return this.jobListings;
      }
  
      return this.jobListings.filter(job =>
        this.selectedFilters.every(filter =>
          (filter.filterType === 'language' && job.languages.includes(filter.value)) ||
          (filter.filterType === 'tool' && job.tools.includes(filter.value)) ||
          (filter.filterType === 'level' && job.level === filter.value) ||
          (filter.filterType === 'role' && job.role === filter.value)
        )
      );
    }
  }

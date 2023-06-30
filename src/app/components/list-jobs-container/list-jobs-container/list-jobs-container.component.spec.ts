import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListJobsContainerComponent } from './list-jobs-container.component';
import { JobsServicesService } from 'src/app/services/jobs-services/jobs-services.service';
import { HttpClientModule } from '@angular/common/http';
import { of } from 'rxjs';
import { JobListing } from 'src/app/data/interfaces/JobListing';
import * as mockJobListings from 'src/assets/data/data.json';

describe('ListJobsContainerComponent', () => {
  let component: ListJobsContainerComponent;
  let fixture: ComponentFixture<ListJobsContainerComponent>;
  let jobsService: JobsServicesService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListJobsContainerComponent],
      imports: [HttpClientModule],
      providers: [JobsServicesService],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListJobsContainerComponent);
    component = fixture.componentInstance;
    jobsService = TestBed.inject(JobsServicesService);
    spyOn(jobsService, 'getJobListings').and.returnValue(of(mockJobListings as JobListing[]));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load job listings on initialization', () => {
    expect(jobsService.getJobListings).toHaveBeenCalled();
    expect(component.jobListings).toEqual(mockJobListings);
    expect(component.filteredJobListings).toEqual(mockJobListings);
  });

  it('should apply a filter', () => {
    const filterType = 'role';
    const value = 'Frontend Developer';
    component.applyFilter(filterType, value);
    expect(component.selectedFilters).toEqual([{ filterType, value }]);
    expect(component.filteredJobListings.length).toBeGreaterThan(0); // Verify that the job listings are filtered
  });

  it('should remove a filter', () => {
    const filterType = 'role';
    const value = 'Frontend Developer';
    component.applyFilter(filterType, value);
    component.removeFilter(filterType);
    expect(component.selectedFilters).toEqual([]);
    expect(component.filteredJobListings.length).toBe(component.jobListings.length); // Verify that all job listings are displayed after removing the filter
  });

  it('should clear all filters', () => {
    const filterType = 'role';
    const value = 'Frontend Developer';
    component.applyFilter(filterType, value);
    component.clearFilters();
    expect(component.selectedFilters).toEqual([]);
    expect(component.filteredJobListings).toEqual(component.jobListings); // Verify that all job listings are displayed after clearing filters
  });
});

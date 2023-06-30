import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { JobListing } from 'src/app/data/interfaces/JobListing';
import * as from 'src/assets/data/data.json'; // Importar el archivo data.json

import { JobsServicesService } from './jobs-services.service';

describe('JobsServicesService', () => {
  let service: JobsServicesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [JobsServicesService],
    });
    service = TestBed.inject(JobsServicesService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve job listings from the data API', () => {


    service.getJobListings().subscribe((jobListings) => {
      expect(jobListings).toEqual(mockJobListings);
    });

    const request = httpMock.expectOne('assets/data/data.json');
    expect(request.request.method).toBe('GET');
    request.flush(mockJobListings);
  });
});

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { JobListing } from 'src/app/data/interfaces/JobListing';

@Injectable({
  providedIn: 'root'
})
export class JobsServicesService {

  private dataUrl = 'assets/data/data.json';

  constructor(private http: HttpClient) {}

  getJobListings(): Observable<JobListing[]> {
    return this.http.get<JobListing[]>(this.dataUrl);
  }
}

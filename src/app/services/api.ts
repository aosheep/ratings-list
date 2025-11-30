import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RequestQueue } from './request-queue';

@Injectable({
  providedIn: 'root',
})
export class Api {
  private baseUrl = 'https://api.jikan.moe/v4';

  constructor(private queue: RequestQueue, private http: HttpClient) {}

  getDetails(id: number) {
    return this.queue.request(() => this.http.get(`${this.baseUrl}/anime/${id}`));
  }
  getStreamingInfo(id: number) {
    return this.queue.request(() => this.http.get(`${this.baseUrl}/anime/${id}/streaming`));
  }
}

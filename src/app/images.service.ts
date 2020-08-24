import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  constructor(private http: HttpClient) {}

  getAllImages(query: string) {
    return this.http.get(`https://api.unsplash.com/photos/?client_id=X1flNWcz9VUdOtGaWrciagqZO1_tiYb9eaWGal_xNU0&per_page=21&query=${query}`);
  }
}

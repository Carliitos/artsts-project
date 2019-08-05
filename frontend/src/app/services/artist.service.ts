import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Artist } from '../models/artist';

@Injectable({
  providedIn: 'root'
})
export class ArtistService {

  selectedArtist: Artist;
  artists: Artist[];
  readonly URL_API = 'http://localhost:3000/api/artists';
  constructor(private http: HttpClient) {
    this.selectedArtist = new Artist();
  }
  getArtists() {
    return this.http.get(this.URL_API);
  }
  postArtist(artist: Artist){
    return this.http.post(this.URL_API,artist)
  }
  putArtist(artist: Artist){
    return this.http.put(this.URL_API + `/${artist._id}`,artist);
  }
  deleteArtist(_id: string){
    return this.http.delete(this.URL_API+`/${_id}`)
}
}

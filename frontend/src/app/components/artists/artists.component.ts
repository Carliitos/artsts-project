import { Component, OnInit } from '@angular/core';
import { ArtistService } from '../../services/artist.service';
import { NgForm } from '@angular/forms';
import { Artist } from 'src/app/models/artist';

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.scss'],
  providers:[ArtistService]
})
export class ArtistsComponent implements OnInit {

  constructor(private artistService: ArtistService) { }

  ngOnInit() {
  }
  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.artistService.selectedArtist = new Artist();
    }
  }
  addArtist(form: NgForm){
    this.artistService.postArtist(form.value)
    .subscribe(res =>{
      console.log(res)
    })
  }
}

import { Component, Input, OnInit } from '@angular/core';
import {Comic} from '../../services/models/Comic';
import {ComicService} from '../../services/comic.service';
// SweetAlert2
import Swal from 'sweetalert2';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.scss'],
  providers: [ComicService],
})
export class ComicComponent implements OnInit {
  @Input() comic: Comic;
  constructor(
    private comicService: ComicService
  ) { }

  ngOnInit(): void {
    this.fetchComic();
  }
  doArray(n: number, startFrom: number): any[] {
    return [...Array(n).keys()].map(i => i + startFrom);
  }
  fetchComic(){
    Swal.fire({
      title: 'Charging comic',
      html: 'I will close in <b></b> 2 seconds.',
      timer: 2000,
      timerProgressBar: true,
    });
    this.comicService.getComics().subscribe(comics => {
    this.comic = comics;
    console.log(comics);
  });
  }
  randomComic(event){
    window.location.reload();
  }

}

import { Component, Input, OnInit } from '@angular/core';
import {Comic} from '../../services/models/Comic';
import {ComicService} from '../../services/comic.service';
import swal from 'sweetalert2';

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
    debugger
  this.comicService.getComics().subscribe(comics => {
    this.comic = comics;
    console.log(comics);
  })
  }
  
}

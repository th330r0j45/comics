import { Component, OnInit } from '@angular/core';
import {Comic} from '../../services/models/Comic';
import {ComicService} from '../../services/comic.service';
@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.scss'],
  providers: [ComicService],
})
export class ComicComponent implements OnInit {
  comic: Comic[] = [];

  constructor(
    private comicService: ComicService
  ) { }

  ngOnInit(): void {
    this.comicService.getComic().subscribe( res =>{

      console.log('Res ', res);
    });
  }
}

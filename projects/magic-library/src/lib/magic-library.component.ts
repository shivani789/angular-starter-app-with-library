import { Component, OnInit } from '@angular/core';
import { MagicLibraryService } from './magic-library.service';

@Component({
  selector: 'sd-magic-library',
  templateUrl: './magic-library.component.html',
  styleUrls: ['./magic-library.component.scss']
})
export class MagicLibraryComponent implements OnInit {

  constructor(private libraryService: MagicLibraryService) { }

  ngOnInit(): void {}

  onRequest(){
    console.log("CLicked!!");
    this.libraryService.getRatings()
    .then(res => {console.log("Received Data:", res)} );
  }
}

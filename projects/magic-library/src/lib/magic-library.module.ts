import { NgModule } from '@angular/core';
import { MagicLibraryComponent } from './magic-library.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MagicLibraryComponent
  ],
  imports: [
    HttpClientModule
  ],
  exports: [
    MagicLibraryComponent
  ]
})
export class MagicLibraryModule { }

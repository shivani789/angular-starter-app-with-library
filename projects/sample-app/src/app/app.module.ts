import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MagicLibraryModule} from 'magic-library'
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MagicLibraryModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MagicLibraryModule} from 'magic-library';
import { AppComponent } from './app.component';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    MagicLibraryModule,
    TableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

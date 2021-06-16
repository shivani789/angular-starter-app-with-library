import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'sample-app';
  products: Product[] = [];

  constructor(private appService: AppService) { }

  ngOnInit() {
      this.appService.getProductsSmall().then(data => this.products = data);
  }
}

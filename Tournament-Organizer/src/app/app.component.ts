import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  items: any[] = [];
  constructor() {
    for(let i = 0; i<200;++i){
      this.items.push(0);
    }
  }
}

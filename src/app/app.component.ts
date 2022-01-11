import { Component } from '@angular/core';

@Component({
  selector: 'molik-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'molik-cloud';
  public listItems = new Array(80);
}

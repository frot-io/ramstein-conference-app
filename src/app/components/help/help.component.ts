import { Component } from '@angular/core';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.styl']
})
export class HelpComponent {
  selectionChanged(item) {
    console.log(item);
  }
}

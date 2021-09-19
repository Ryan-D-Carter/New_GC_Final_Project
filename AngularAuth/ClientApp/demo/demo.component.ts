import { HttpClient } from '@angular/common/http';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
/** demo component*/
export class DemoComponent {
  demoData: any = { name: '', id: '' };
  /** demo ctor */
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get(baseUrl + 'demo').subscribe(result => {
      this.demoData = result;
      console.log(result);
    }, error => console.error(error));
  }
}

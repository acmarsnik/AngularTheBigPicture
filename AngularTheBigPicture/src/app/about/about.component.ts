import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  /* This is shown as an example of an in-line template
  this would then replace the templateUrl attribute
  template: `<div>
  <h1>Title</h1>
  </div>` */
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

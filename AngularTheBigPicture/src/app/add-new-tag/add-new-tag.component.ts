import { ArticleService } from './../article.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-new-tag',
  templateUrl: './add-new-tag.component.html',
  styleUrls: ['./add-new-tag.component.scss']
})
export class AddNewTagComponent implements OnInit {

  constructor(private articleSvc: ArticleService) {
    console.log(articleSvc.HelloWorld());
   }

  ngOnInit() {
    console.log(this.articleSvc.HelloWorld());
  }

}

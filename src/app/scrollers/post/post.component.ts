import { Component, Input, OnInit } from '@angular/core';

import { Post } from 'lorempostgen';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input() data: Post;

  constructor() {  }

  ngOnInit() {
    console.log(this.data);
  }

  parseTags(tags: string) {
    const tagArray = tags.split(',');

    return tagArray.join(' | ');
  }
}

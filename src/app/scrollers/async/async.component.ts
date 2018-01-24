import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { PostComponent } from '../post/post.component';
import { Post, LoremPostGenerator } from 'lorempostgen';

@Component({
  selector: 'app-async',
  templateUrl: './async.component.html',
  styleUrls: ['./async.component.scss']
})
export class AsyncComponent implements OnInit {
  postGenerator: LoremPostGenerator;
  posts: Post[];

  constructor() {
    const config = {
      startDate: new Date(2000, 0, 1),
      endDate: new Date(2018, 0, 11),
      minContentLength: 10,
      maxContentLength: 2000,
      minImages: 0,
      maxImages: 0.51,
      useLoremImages: true
    };

    this.postGenerator = new LoremPostGenerator(config);
  }

  ngOnInit() {
    this.posts = this.getPosts();
  }

  getPosts() {
    return this.postGenerator.generateAsync(100);
  }
}

import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { PostComponent } from '../post/post.component';
import { Post, LoremPostGenerator } from 'lorempostgen';

@Component({
  selector: 'app-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.scss']
})
export class StreamComponent implements OnInit {
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
    this.getPosts().subscribe(results => (this.posts = results));
  }

  getPosts() {
    return this.postGenerator.generateStream(100);
  }
}

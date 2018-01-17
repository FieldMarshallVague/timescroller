import { Subscription, Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';

import {PostComponent } from '../post/post.component';
import { Post, LoremPostGenerator } from 'lorempostgen';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-flat',
  templateUrl: './flat.component.html',
  styleUrls: ['./flat.component.scss']
})
export class FlatComponent implements OnInit {
  postGenerator: LoremPostGenerator;
  posts: Observable<Post[]>;

  constructor() {
    const config = {
        startDate: new Date(2000, 0, 1),
        endDate: new Date(2018, 0, 11),
        minContentLength: 10,
        maxContentLength: 3000,
        minImages: 0,
        maxImages: 2,
        useLoremImages: true
    };

    this.postGenerator = new LoremPostGenerator(config);
  }

  ngOnInit() {

    this.posts = this.getPosts();


  }

  getPosts() {

    return Observable.create((observer) => {
      const genPosts = this.postGenerator.generate(10);
      genPosts.sort((a: Post, b: Post) => {
        if (a.creationDate > b.creationDate) {
          return -1;
        } else if (a.creationDate < b.creationDate) {
          return 1;
        } else {
          return 0;
        }
      });

      console.log(genPosts);

      return observer.next(genPosts);
    });
  }

}

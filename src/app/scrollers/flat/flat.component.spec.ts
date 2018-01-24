import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlatComponent } from './flat.component';
import { PostComponent } from '../post/post.component';
import { Post, LoremPostGenerator } from 'lorempostgen';

describe('FlatComponent', () => {
  let component: FlatComponent;
  let fixture: ComponentFixture<FlatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

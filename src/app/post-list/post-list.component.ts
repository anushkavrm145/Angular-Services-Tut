import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrl: './post-list.component.css',
  providers:[PostService]
})
export class PostListComponent implements OnInit {

  postList:Array<any>=[];
  constructor(private postService: PostService){
    this.postList=postService.postList

  }

  ngOnInit(): void {
      
  }

}

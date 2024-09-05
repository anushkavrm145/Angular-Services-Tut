import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';
import { Post } from '../models/post';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css',
  providers: [PostService]
})
export class PostComponent implements OnInit{
  posts: Array<any>=[];
  constructor(private postService: PostService){
    // let postService=new PostService()
    this.posts= postService.postList;
  }
  ngOnInit(): void {
      
  }
  addNewData(){
    let newPost:Post = {
      id: 7,
      postTitle:"Post 7"
    }
    this.postService.addPost(newPost);
  }

}

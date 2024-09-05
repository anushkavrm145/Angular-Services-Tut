import { Injectable } from "@angular/core"
export interface Post {
    id: number;
    postTitle: string;
  }
  
export class PostService{
    @Injectable(
       { providedIn: 'root'}
    )
    postList:Post[] =[
        {id:1,postTitle:"Post 1"},
        {id:2,postTitle:"Post 2"},
        {id:3,postTitle:"Post 3"},
        {id:4,postTitle:"Post 4"},
        {id:5,postTitle:"Post 5"},
        {id:6,postTitle:"Post 6"},
    ]
    

    addPost(data:Post){
        this.postList.push(data);
    }
} 
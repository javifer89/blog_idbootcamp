import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {
arrPost : Post[] = []


  constructor() {
  }


  createPost(newPost: Post) : void{
   this.arrPost.push(newPost);
  }

  getAll() :Post[] {
  return this.arrPost;
  }


  getByCategory(category: string): Post {
    let postSeleccionado: Post;
    for (let post of this.arrPost) {
      if (post.categoria === category) {
        postSeleccionado = post;
      }
    }
    return postSeleccionado;
  }

  getByCategory2(category: string): Post | undefined {
  return this.arrPost.find(post => post.categoria === category )
}


}

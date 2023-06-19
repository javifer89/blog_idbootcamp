import { Component, inject } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';
import { BlogPostService } from 'src/app/services/blog-post.service';

@Component({
  selector: 'lista-posts',
  templateUrl: './lista-posts.component.html',
  styleUrls: ['./lista-posts.component.css'],
})
export class ListaPostsComponent {
  blogPostService = inject(BlogPostService);
  postOrdenados: Post[];

  constructor() {
    this.postOrdenados = [{
      titulo: '',
      texto: '',
      autor: '',
      imagen: '',
      fecha: '',
      categoria: '',
    },
  ];
}

ngOnInit() {
  this.postOrdenados = this.blogPostService.getAll();
  console.log(this.postOrdenados);
}
  // onGetByCategory(): Post | undefined {
  //   return this.postOrdenados = this.blogPostService.getByCategory2(category);
  // }
}

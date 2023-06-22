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
  categorias: string[] = this.blogPostService
    .getAll()
    .map((post) => post.categoria);

  constructor() {
    this.postOrdenados = [
      {
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
    this.getPosts();
  }

  onGetByCategory(event: any) {
    const categoria = event.target ? event.target.value : event
    if (categoria) {
      const posts = this.blogPostService.getAll();
      this.postOrdenados = posts.filter((post) => post.categoria === categoria);
    } else {
      this.getPosts();
    }
  }


  getPosts() {
    this.postOrdenados = this.blogPostService.getAll();
  }
}

// ### REVISAR
// async ngOnInit() {
//   try {
//     const response = await this.usersService.getAllUsers();
//   } catch (error) {
//     console.log(error);
//   }

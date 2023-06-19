import { Component, inject } from '@angular/core';
import { Post } from 'src/app/interfaces/post.interface';
import { BlogPostService } from 'src/app/services/blog-post.service';
import { firstValueFrom } from 'rxjs';

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
    onGetByCategory(categoria: string) {

      this.blogPostService.getByCategory(categoria)
     ;
   }
}


  // ### REVISAR
  // async ngOnInit() {
  //   try {
  //     const response = await this.usersService.getAllUsers();
  //   } catch (error) {
  //     console.log(error);
  //   }

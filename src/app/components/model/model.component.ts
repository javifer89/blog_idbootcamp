import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Post } from 'src/app/interfaces/post.interface';
import { BlogPostService } from 'src/app/services/blog-post.service';

@Component({
  selector: 'model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css'],
})
export class ModelComponent {
  blogPostService = inject(BlogPostService);
  formulario: FormGroup;

  constructor() {
    this.formulario = new FormGroup({
      titulo: new FormControl(),
      texto: new FormControl(),
      autor: new FormControl(),
      imagen: new FormControl(),
      fecha: new FormControl(),
      categoria: new FormControl(),
    });
  }

  async onSubmit() {
    const response = await this.blogPostService.createPost(this.formulario.value);
    console.log(response);
  }

  //  onCreatePost() {   // CORREGIR capturar en el servicio el OUTPUT y añadir al array el nuevo post
  //    this.postPublicado = this.blogPostService.createPost(newPost);
  //  }
}

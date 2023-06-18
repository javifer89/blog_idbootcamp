import { Component, EventEmitter, Output, inject } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
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

  @Output() postPublicado: EventEmitter<Post>;

  constructor() {
    this.formulario = new FormGroup({
      titulo: new FormControl(),
      Text: new FormControl(),
      autor: new FormControl(),
      imagen: new FormControl(),
      fecha: new FormControl(),
      categoria: new FormControl(),
    });
    this.postPublicado = new EventEmitter();
  }


  onSubmit() {
    this.postPublicado.emit(this.formulario.value);
    console.log(this.postPublicado)
  }

  // onCreatePost() {  // CORREGIR capturar en el servicio el OUTPUT y añadir al array el nuevo post
  //   this.postPublicado = this.blogPostService.createPost(newPost: Post);
  // }
}

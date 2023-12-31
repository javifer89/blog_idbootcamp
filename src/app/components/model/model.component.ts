import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  }

}

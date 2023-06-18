import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root'
})
export class BlogPostService {
arrPost: Post[]


  constructor() {
    this.arrPost = [
      {
        titulo: 'Pizza prosciutto',
        texto: 'La mejor pizza prosciutto que he probado en mi vida.',
        autor: 'Javi',
        imagen:
          'https://s3-eu-west-1.amazonaws.com/straus/media/products2/de81d86a57484f75935f267cf321f10a.jpg',
        fecha: '22-5-23',
        categoria: 'comida',
      },
      {
        titulo: 'Viaje a China',
        texto:
          'Un viaje super interesante en el que pudimos conocer una gran cantidad de costumbres de la cultura asiática, así como su gastronomía',
        autor: 'Pablo',
        imagen:
          'https://a.cdn-hotels.com/gdcs/production48/d512/0c281436-7022-4d50-beff-2c64308c4dbb.jpg',
        fecha: '21-3-23',
        categoria: 'viajes',
      },
      {
        titulo: 'Ford Mustang GT',
        texto:
          'Un clásico dentro de los coches deportivos que destaca por su aspecto salvaje.',
        autor: 'Javi',
        imagen:
          'https://www.hdcarwallpapers.com/walls/ford_mustang_gt_fastback_2018_4k-HD.jpg',
        fecha: '22-4-23',
        categoria: 'coches',
      },
      {
        titulo: 'Game of thrones',
        texto:
          'Una serie que te enganchará desde el primer capítulo y que te trasladará a la época medieval en la que se desarrolla toda la historia',
        autor: 'Laura',
        imagen:
          'http://thedrawshop.com/wp-content/uploads/2013/08/game-of-thrones-season-4.jpg',
        fecha: '22-6-23',
        categoria: 'series',
      },
    ];
    }



  createPost(newPost: Post) : void{ //mover al formulario?
   this.arrPost.push(newPost);
  }

  getAll() :Post[] {
  return this.arrPost;
  }


  // getByCategory(category: string): Post {
  //   let postSeleccionado: Post;
  //   for (let post of this.arrPost) {
  //     if (post.categoria === category) {
  //       postSeleccionado = post;
  //       return postSeleccionado;
  //     }
  //     return this.arrPost
  //   }
  // }

  getByCategory2(category: string): Post | undefined {
  return this.arrPost.find(post => post.categoria === category )
}


  onPostPublicado($event: any){
		this.arrPost.push($event);
	}

}

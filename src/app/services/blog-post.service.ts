import { Injectable } from '@angular/core';
import { Post } from '../interfaces/post.interface';

@Injectable({
  providedIn: 'root',
})
export class BlogPostService {
  arrPost: Post[];

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

  createPost(newPost: Post): void {
    //mover al formulario?
    this.arrPost.push(newPost);
  }

  getAll(): Post[] {
    return this.arrPost;
  }

  getByCategory(category: string): Post | undefined {
    return this.arrPost.find((post) => post.categoria === category);
  }

  getByCategory2(category: string): Post[] | undefined {
    return this.arrPost.filter((post) => post.categoria === category);
  }

  onPostPublicado($event: any) {
    this.arrPost.push($event);
  }

}


//LOCAL STORAGE


//   saveLocalStorage() {
//   localStorage.setItem('post', 'Pizza prosciutto');
// }


// ### **Recuperar datos guardados en el navegador**

// this.dato = localStorage.getItem('post');`

// console.log(this.dato);`



// ### **Guardar objetos el navegador**

// Para guardar un objeto en LocalStorage, antes debemos convertirlo a JSON string, pare ello utilizaremos JSON.stringify() como se muestra en la siguiente instrucción:

// localStorage.setItem('post', JSON.stringify(this.post));`


// ### **Recuperar objetos guardados en el navegador**

// Para recuperar un objeto almacenado en LocalStorage será necesario convertir el JSON string a un objeto, para ello utilizaremos JSON.parse() como se muestra en la siguiente instrucción:

// this.datoPost = JSON.parse(localStorage.getItem('post'));`

// console.log(this.datoUsuario);`


// ### **Borrar datos guardados en el LocalStorage**

// Para borrar un elemento del LocalStorage utilizaremos la siguiente instrucción:

// localStorage.removeItem('post');`

/// Para borrar todos los elementos del LocalStorage utilizaremos la siguiente instrucción

// localStorage.clear();`

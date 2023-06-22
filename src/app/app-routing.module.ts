import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPostsComponent } from './components/lista-posts/lista-posts.component';
import { ModelComponent } from './components/model/model.component';

const routes: Routes = [
  {path:'', component: ListaPostsComponent},
  { path: 'posts', component: ListaPostsComponent },
  { path: 'new', component: ModelComponent },
  {path:'**', redirectTo: '/blog'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

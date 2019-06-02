import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule} from '@angular/router';
import {UsersComponent} from './users/users.component';
import {DetailsComponent } from './details/details.component';
import {PostsComponent} from './posts/posts.component';

const routes:Routes=[
  {
    path:'users',
    component:UsersComponent
  },
  {
    path: 'details/:id',
    component:DetailsComponent
  },
  {
    path:'posts',
    component:PostsComponent
  },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule {


 }

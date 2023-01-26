import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page/page-not-found/page-not-found.component';

const routes: Routes = [
  // {
  //   path: 'landing',
  //   loadChildren: () => import('./page/landing/landing.module').then(m => m.LandingModule)
  // },
  {
    path: 'news',
    loadChildren: () => import('./page/news/news.module').then(m => m.NewsModule)
  },
  { path: '', redirectTo: '/news', pathMatch: 'full' },
  // { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

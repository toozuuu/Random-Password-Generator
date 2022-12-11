import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    // viewer web. this contains the header and router-outlet
    path: '',
    loadChildren: () => import('./layouts/public/public.module').then(m => m.PublicModule)
  },
  {
    // This contains all the common components and style guide.
    path: 'docs',
    loadChildren: () => import('./docs/docs.module').then(m => m.DocsModule)
  },
  {
    path: '**',
    redirectTo: 'public',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

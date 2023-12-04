// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'character-list',
    loadChildren: () =>
      import('./character-list/character-list.module').then(
        (m) => m.CharacterListPageModule
      ),
  },
  {
    path: '',
    redirectTo: 'character-list',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

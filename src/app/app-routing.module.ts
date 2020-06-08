import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePageModule } from './home/home.module';

const routes: Routes = [
  { path: '', redirectTo: 'recipes', pathMatch: 'full' },
  {path: '', redirectTo:'home', pathMatch: 'full' },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => HomePageModule)
  },
  {
    path: 'recipes',
      children:[
        {
          path: '',
          loadChildren: () => import('./recipes/recipes.module').then( m => m.RecipesPageModule)
        },
        {
          path: ':recipeId',
          loadChildren: () => import('./recipes/recipe-detail/recipe-detail.module').then( m => m.RecipeDetailPageModule)
        }
      ]
  },
  {
    path: 'recipes/:userId',
    loadChildren: () => import('./recipes/user-recipes/user-recipes.module').then( m => m.UserRecipesPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipesService } from '../recipes.service';
import { Recipe } from '../recipe.model';
import { LoadingController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
  loadedRecipe : Recipe;
  public selectedId;
  constructor(
    private activatedRoute: ActivatedRoute,
    private recipesService : RecipesService,
    private loadingController: LoadingController,
    private route: Router,
    private alertCtr: AlertController
    ) {}
  
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('recipeId')){
        return;
      }
      const recipeId = paramMap.get('recipeId');
      this.loadedRecipe = this.recipesService.getRecipe(recipeId);
      console.log(this.loadedRecipe);
      this.loadData();
    });
  }
  async loadData(): Promise<void> {
    const loading = await this.loadingController.create({
      message: 'Loading recipes...'
    });

    await loading.present();

    setTimeout(() => {

      loading.dismiss();
    }, 500);
  }
  goToRecipes(){
    let recipeId = this.loadedRecipe;
    let selectedId = recipeId.id ? recipeId.id : '';
    this.route.navigate(['/recipes', {id: selectedId}]);
  }
  onDeleteRecipe(){
    this.alertCtr.create({
      header: 'Are you sure?', 
      message: 'Do you really want to delete the recipe?',
      buttons:[{
        text:'Cancel',
        role:'cancel'
      },
      {
        text:'Delete',
        handler: () => {
          this.recipesService.deleteRecipe(this.loadedRecipe.id);
          this.route.navigate(['/recipes']);
        }
      }]
    })
    .then(alertEl => {
      alertEl.present();
    });
  }
}

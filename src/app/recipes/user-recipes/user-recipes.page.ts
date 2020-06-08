import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipesPage } from '../recipes.page';

@Component({
  selector: 'app-user-recipes',
  templateUrl: './user-recipes.page.html',
  styleUrls: ['./user-recipes.page.scss'],
})
export class UserRecipesPage implements OnInit {

  constructor(private activatedRoute: ActivatedRoute,private getRec: RecipesPage) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('UserId')){
        return;
      }
      const UsrRecId = paramMap.get('UserId');
    });
  }

}

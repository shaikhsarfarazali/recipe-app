import { Injectable } from '@angular/core';
import {Recipe} from './recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {

  public items : any = [];
  private recipes: Recipe[];

  constructor() {
    this.recipes = [
      {
        id: 'r1',
        title: 'Shawarma',
        imageUrl:'https://upload.wikimedia.org/wikipedia/commons/a/a6/%D7%A9%D7%95%D7%95%D7%90%D7%A8%D7%9E%D7%94_%D7%A6%D7%9E%D7%97%D7%95%D7%A0%D7%99%D7%AA_%D7%91%D7%91%D7%92%D7%98.JPG',
        ingredients:{'For The Chicken':
                      ['1/2 c. extra-virgin olive oil', ' Juice of 1 lemon', ' 3 cloves garlic, minced', ' 2 tsp. kosher salt', ' 1 tsp. ground cumin'],
                    'For Yogurt Sauce':
                      ['1/2 c. Greek yogurt', ' Juice of 1/2 lemon', ' 1 tbsp. extra-virgin olive oil', ' 2 cloves garlic, smashed and minced', ' Kosher salt'],
                    'For Serving':
                      ['Pitas, warmed', ' Chopped romaine', ' Cherry tomatoes, halved', ' Cucumber, thinly sliced']
                    }
      },
      {
        id: 'r2',
        title: 'Mutton',
        imageUrl:'https://upload.wikimedia.org/wikipedia/commons/9/9c/Mutton_Coconut_Fry.JPG',
        ingredients:{
          '6 Serving':
            ['500 gm mutton', ' 2 tablespoon coriander powder', ' 4 onion', ' 2 teaspoon garlic paste', 
            ' 4 clove', ' 5 green cardamom', ' 1 cinnamon stick', ' salt As required', ' 2 cup water', 
            ' 4 tablespoon ghee', ' 2 cup yoghurt (curd)', ' 2 teaspoon ginger paste', 
            ' 2 teaspoon red chilli powder', ' 3 tomato', ' 8 peppercorns', ' 1 teaspoon garam masala powder', 
            ' 1/2 teaspoon turmeric'
            ],
          'For Garnishing':
            ['1 handful coriander leaves']
      }
      },
      {
        id: 'r3',
        title: 'Butter Chicken',
        imageUrl:'https://upload.wikimedia.org/wikipedia/commons/5/56/Butter_Chicken.jpg',
        ingredients:{
          '5 Serving':
            ['500 grams chicken',
              '500 grams tomato',
              '2 green chilli',
              '1/2 tablespoon dried fenugreek leaves',
              '3/4 teaspoon salt',
              '3 teaspoon butter',
              '1/2 teaspoon sugar'
            ],
          'For Marination':
            ['1/4 teaspoon red chilli',
              '1/2 tablespoon ginger paste',
              '1/2 tablespoon red chilli powder',
              '1/2 cup thick sour curd',
              '1/2 tablespoon garlic paste',
              '1 tablespoon tandoori masala'],
          'For Garnishing':
            ['1/4 cup fresh cream']
  
        }
      },
      {
        id: 'r4',
        title: 'Shahi Paneer',
        imageUrl:'https://upload.wikimedia.org/wikipedia/commons/1/10/Shahi_Paneer_Masala.JPG',
        ingredients:{
          '4 Serving':
            ['500 gm paneer',
              '1 inch ginger',
              '3 green cardamom',
              '1 teaspoon red chilli',
              '1 teaspoon garam masala powder',
              '1 1/2 cup tomato puree',
              '1 cup water',
              '1/2 cup almonds',
              '2 onion',
              '3 green chilli',
              '1/2 cup yoghurt (curd)',
              '6 tablespoon ghee',
              '1 cup milk',
              '2 pinches salt',
              '1/2 cup cashews'],
          'For Garnishing':
            ['1 handful coriander leaves',
              '2 tablespoon fresh cream'
            ]
      }
      },
      {
        id: 'r5',
        title: 'Brownie',
        imageUrl:'https://upload.wikimedia.org/wikipedia/commons/e/e7/Chocolate_brownie_in_Turku.jpg',
        ingredients:{
          '4 Serving':
            ['3 and 1/4 tablespoon all purpose flour',
              '3 and 1/4 tablespoon yoghurt (curd)',
              '1/4 teaspoon baking soda',
              '3/4 tablespoon chocolate chips',
              '3 and 1/4 tablespoon vegetable oil',
              '3 and 1/4 tablespoon sugar',
              '1 and 1/2 tablespoon cocoa powder',
              '1/2 teaspoon vanilla essence'],
          'For Garnishing':
            ['3/4 tablespoon walnuts',]
      }
      },
      {
        id: 'r6',
        title: 'Cheese Sandwitch',
        imageUrl:'https://static.toiimg.com/thumb/60324921.cms?imgsize=99099&width=809&height=740',
        ingredients:{
          '4 Serving':
            ['8 bread slices',
              '4 teaspoon butter'],
          'For Filling':
            ['2/3 teaspoon salt',
              '1 and 1/3 tablespoon basil',
              '1 and 1/4 capsicum (green pepper)',
              '2/3 cup cream cheese',
              '1 and 1/4 tomato',
              '2/3 teaspoon mixed herbs',
              '2/3 teaspoon chilli flakes'
            ]
      }
      },
      {
        id: 'r7',
        title: 'Pasta Chatpata',
        imageUrl:'https://www.thespruceeats.com/thmb/ypz__MdC_uwxRiNj4EfYzdVVCWU=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/GettyImages-885397466-5c0cc0634cedfd00012758a7.jpg',
        ingredients:{
          '5 Serving':
            ['250 gm pasta fusili',
              '3 potato',
              '2 tomato',
              '4 green chilli',
              '1 teaspoon red chilli powder',
              'salt as required',
              '5 cup cold water',
              '100 gm kala chana',
              '1 onion',
              '100 gm paneer',
              '2 bunch coriander leaves',
              '2 teaspoon chaat masala',
              '5 drops lemon juice'],
          'How to make Pasta Chatpata':
            ['To make this delicious pasta recipe, boil 3 cups of water and add 1 cup of pasta fusili to it and cook for 10 minutes.',
              'After the pasta boils, strain and rinse in fresh cold water and keep it aside. Soak chana for 3-4 hours. Pressure cook for 20-25 minutes, in 4-5 glasses of water.',
              'Drain chana and pour into serving bowl. Mix potaoes, paneer, onion and tomatoes with chana. Add boiled fusili, lime juice, salt, chili powder, chaat masala, green chillies and coriander leaves.',
              'Mix well, refrigerate and serve chilled.'
            ]
      }
      }
    ];
    // this.items = [
    //   { title: "one" },
    //   { title: "two" },
    //   { title: "three" },
    //   { title: "four" },
    //   { title: "five" },
    //   { title: "six" }
    // ];
  }

  getAllRecipes(){
    return [...this.recipes];
  }

  getRecipe(recipeId: string){
    return {
      ...this.recipes.find(recipe=>{
        return recipe.id === recipeId;
      })
    };
  }
  filterItems(searchTerm) {
    return this.recipes.filter(item => {
      return item.title.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
    });
  }
  deleteRecipe(recipeId: string){
    this.recipes = this.recipes.filter(recipe => {
      return recipe.id !== recipeId;
    })
  }
}

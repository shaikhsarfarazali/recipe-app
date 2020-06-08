import { Component, OnInit } from '@angular/core';
import { Recipe, User } from './recipe.model';
import { RecipesService } from './recipes.service';
import { LoadingController, AlertController } from '@ionic/angular';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes : Recipe[];
  public searchTerm: string = "";
  public items: any;
  public getId;


  public counter : number = 1;
  recDetail : Array<User>;
  selectedImage: any;
  heading:string;

  // image upload
  fileData: File = null;
  public previewUrl: any;
  message: string;

  //validation part
  public recname:string;


  //filter recipes
  searchItem: string;
  public item: any;
  dontShow: boolean;
  

  //user recipe
  public title: string;
  public description: string;
  public image: any;

  //hide or show recipe
  public load: boolean = false;
  public buttonName:string;
  public icon:string;

  constructor(private loadingController: LoadingController, 
    private recipesServices: RecipesService,
    private activatedRoute: ActivatedRoute,
    private route: Router,
    private alertCtrl: AlertController
    ) { 
  }

  ngOnInit() {
    this.recipes = this.recipesServices.getAllRecipes();
    this.setFilteredItems();
    this.loadData();
    this.activatedRoute.paramMap.subscribe((param: ParamMap) => {
      let id = parseInt(param.get('recipeId'));
      this.getId = id;
    });
  }

  setFilteredItems() {
    this.items = this.recipesServices.filterItems(this.searchTerm);
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
 
  btnClicked(){
    this.load = !this.load;
    if(this.load){
      this.buttonName = "Hide Recipe";
      this.icon = 'eye-off-sharp'
    }
    else{
      this.buttonName = "Add Recipe"
      this.icon = 'eye-sharp'
    }
  }
  
  // image validation & upload
  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
    const file = fileInput.target.files[0];
    const  fileType = file['type'];
    const validImageTypes = ['image/gif', 'image/jpeg', 'image/png'];
    if (!validImageTypes.includes(fileType)) {
      this.alertCtrl.create({
        header: 'Image Invalid', 
        message: 'Only Image are supported.',
        buttons:[{
          text:'OK',
          role:'OK'
        }]
    })
      .then(alertEl => {
        alertEl.present();
      });
        this.image = null;
        return;
    }
    if(file.size > 1024000){
      this.alertCtrl.create({
        header: 'Invalid Image', 
        message: 'Image must be less then 1MB.',
        buttons:[{
          text:'OK',
          role:'OK'
        }]
    })
      .then(alertEl => {
        alertEl.present();
      });
        this.image = null;
        return;
    }
    this.preview();
  }

  //preview
  preview() {
    var mimeType = this.fileData.type;
    if(mimeType.length <= 102400){
      const reader = new FileReader();      
      reader.readAsDataURL(this.fileData); 
      reader.onload = (_event) => { 
      this.previewUrl = reader.result;
      }
    }
  }
  //recipe added
  userRecipe(Title, Image, Description, id = this.counter++){
    console.log(Title, Image, Description,id);
    try{
      let collect : User = { id, Title, Image:this.previewUrl, Description};
      this.recDetail.push(collect);
      this.load = false;
      localStorage.setItem('usersRecipes',(JSON.stringify(this.recDetail)));
      // if(/^[A-Za-z- ]+$/.test(recName) != true){
      //   this.alertCtrl.create({
      //     header: 'Recipe Name Invalid', 
      //     message: 'Please Enter Only Character',
      //     buttons:[{
      //       text:'OK',
      //       role:'OK'
      //     }]
      // })
      //   .then(alertEl => {
      //     alertEl.present();
      //   });
      //   this.recname = null;
      //   return;
      // }
      // else if(this.recipe_name == ""){
      //   this.alertCtrl.create({
      //     header: 'Recipe Name Is Empty', 
      //     message: 'Please Enter Recipe Name.',
      //     buttons:[{
      //       text:'OK',
      //       role:'OK'
      //     }]
      // })
      //   .then(alertEl => {
      //     alertEl.present();
      //   });
      // }
      // else if(this.image==null){
      //   this.alertCtrl.create({
      //     header: 'Recipe Image Is Empty', 
      //     message: 'Please Select An Image.',
      //     buttons:[{
      //       text:'OK',
      //       role:'OK'
      //     }]
      // })
      //   .then(alertEl => {
      //     alertEl.present();
      //   });
      //     return;
      // }

      // else if(recIng==""){
      //   this.alertCtrl.create({
      //     header: 'Ingredient Required', 
      //     message: 'Please Enter Recipe Ingredient.',
      //     buttons:[{
      //       text:'Ok',
      //       role:'OK'
      //     }]
      // })
      //   .then(alertEl => {
      //     alertEl.present();
      //   });
      // }
      // else{
      //   let collect : User = { recId, recName, recImg:this.previewUrl, recIng};
      //   this.recDetail.push(collect);
      //   localStorage.setItem('usersRecipes',(JSON.stringify(this.recDetail)));
      // }
      
    }

    catch(e){
      console.log("Local Storage is full, Please empty data");
    }
  }
}

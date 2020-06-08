import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { debounceTime } from "rxjs/operators";
import { HomeService } from './home.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  searchTerm: string = '';
  searchControl: FormControl;
  items: any;
  searching: any = false;

  constructor(public navCtrl: NavController, private dataService: HomeService) {
    this.searchControl = new FormControl();
  }
  ionViewDidLoad() {

    this.setFilteredItems();

    this.searchControl.valueChanges.pipe(debounceTime(700)).subscribe(search => {

      this.searchTerm = search;
        this.searching = false;
        this.setFilteredItems();

    });


}

onSearchInput(){
    this.searching = true;
}


  setFilteredItems() {
    this.items = this.dataService.filterItems(this.searchTerm);
  }

  text = "Ready to create an app?";

  myVal: string = "";
  myVal1: string = "";
  onChangeText(){
    this.myVal1 = this.myVal;

  }
}

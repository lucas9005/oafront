import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  images: any[];
  openedState: boolean;
  openedId: string;
  openedDescription: string;

  constructor() {
    this.images = [];
    this.openedState = false;
    this.openedId = null;
    this.openedDescription = null;
  }

  ngOnInit() {
    //Estos datos se van a consumir desde una API en un futuro
    this.images.push({id:'1', description:'Imagen 1'});
    this.images.push({id:'2', description:'Imagen 2'});
    this.images.push({id:'3', description:'Imagen 3'});
    this.images.push({id:'4', description:'Imagen 4'});
    this.images.push({id:'5', description:'Imagen 5'});
    this.images.push({id:'6', description:'Imagen 6'});
    this.images.push({id:'7', description:'Imagen 7'});
    this.images.push({id:'8', description:'Imagen 8'});
    this.images.push({id:'9', description:'Imagen 9'});
    this.images.push({id:'10', description:'Imagen 10'});
    this.images.push({id:'11', description:'Imagen 11'});
    this.images.push({id:'12', description:'Imagen 12'});
    this.images.push({id:'13', description:'Imagen 13'});
    this.images.push({id:'14', description:'Imagen 14'});
    this.images.push({id:'15', description:'Imagen 15'});
    this.images.push({id:'16', description:'Imagen 16'});
    this.images.push({id:'17', description:'Imagen 17'});
    this.images.push({id:'18', description:'Imagen 18'});
    this.images.push({id:'19', description:'Imagen 19'});
    this.images.push({id:'20', description:'Imagen 20'});
    this.images.push({id:'21', description:'Imagen 21'});
    this.images.push({id:'22', description:'Imagen 22'});
    this.images.push({id:'23', description:'Imagen 23'});
    this.images.push({id:'24', description:'Imagen 24'});
    this.images.push({id:'25', description:'Imagen 25'});
    this.images.push({id:'26', description:'Imagen 26'});
    this.images.push({id:'27', description:'Imagen 27'});
    this.images.push({id:'28', description:'Imagen 28'});
  }

  setOpenedStateTrue(openedId, openedDescription){
    this.openedState = true;
    this.openedId = openedId;
    this.openedDescription = openedDescription;
  }

  setOpenedStateFalse(){
    this.openedState = false;
    this.openedId = null;
    this.openedDescription = null;
  }
}

    

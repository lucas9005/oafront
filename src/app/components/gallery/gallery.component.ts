import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  images: any[];
  openedState: Boolean;
  openedSrc: string;
  openedAlt: string;

  constructor() {
    this.images = [];
    this.openedState = false;
    this.openedSrc = null;
    this.openedAlt = null;
  }

  ngOnInit() {
    //Estos datos se van a consumir desde una API en un futuro
    this.images.push({src:'../../../assets/1.jpg', alt:'Alt Imagen 1'});
    this.images.push({src:'../../../assets/2.jpg', alt:'Alt Imagen 2'});
    this.images.push({src:'../../../assets/3.jpg', alt:'Alt Imagen 3'});
    this.images.push({src:'../../../assets/4.jpg', alt:'Alt Imagen 4'});
    this.images.push({src:'../../../assets/5.jpg', alt:'Alt Imagen 5'});
    this.images.push({src:'../../../assets/6.jpg', alt:'Alt Imagen 6'});
    this.images.push({src:'../../../assets/7.jpg', alt:'Alt Imagen 7'});
    this.images.push({src:'../../../assets/8.jpg', alt:'Alt Imagen 8'});
    this.images.push({src:'../../../assets/9.jpg', alt:'Alt Imagen 9'});
    this.images.push({src:'../../../assets/10.jpg', alt:'Alt Imagen 10'});
    this.images.push({src:'../../../assets/11.jpg', alt:'Alt Imagen 11'});
    this.images.push({src:'../../../assets/12.jpg', alt:'Alt Imagen 12'});
    this.images.push({src:'../../../assets/13.jpg', alt:'Alt Imagen 13'});
    this.images.push({src:'../../../assets/14.jpg', alt:'Alt Imagen 14'});
    this.images.push({src:'../../../assets/15.jpg', alt:'Alt Imagen 15'});
    this.images.push({src:'../../../assets/16.jpg', alt:'Alt Imagen 16'});
    this.images.push({src:'../../../assets/17.jpg', alt:'Alt Imagen 17'});
    this.images.push({src:'../../../assets/18.jpg', alt:'Alt Imagen 18'});
    this.images.push({src:'../../../assets/19.jpg', alt:'Alt Imagen 19'});
    this.images.push({src:'../../../assets/20.jpg', alt:'Alt Imagen 20'});
    this.images.push({src:'../../../assets/21.jpg', alt:'Alt Imagen 21'});
    this.images.push({src:'../../../assets/22.jpg', alt:'Alt Imagen 22'});
    this.images.push({src:'../../../assets/23.jpg', alt:'Alt Imagen 23'});
    this.images.push({src:'../../../assets/24.jpg', alt:'Alt Imagen 24'});
    this.images.push({src:'../../../assets/25.jpg', alt:'Alt Imagen 25'});
    this.images.push({src:'../../../assets/26.jpg', alt:'Alt Imagen 26'});
    this.images.push({src:'../../../assets/27.jpg', alt:'Alt Imagen 27'});
    this.images.push({src:'../../../assets/28.jpg', alt:'Alt Imagen 28'});
  }

  setOpenedStateTrue(openedSrc, openedAlt){
    this.openedState = true;
    this.openedSrc = openedSrc;
    this.openedAlt = openedAlt;
  }

  setOpenedStateFalse(){
    this.openedState = false;
    this.openedSrc = null;
    this.openedAlt = null;
  }
}

    

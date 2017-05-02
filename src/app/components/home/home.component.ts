import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  news: any[];

  constructor() {
    this.news = [];
  }

  ngOnInit() {
    //Estos datos se van a consumir desde una API en un futuro
    this.news.push({title:'Titulo 1', text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis vero aperiam eveniet quis voluptatibus unde et saepe exercitationem molestiae dicta neque enim officia quod, quaerat ullam atque laboriosam in eligendi. Perspiciatis vero aperiam eveniet quis voluptatibus unde et saepe exercitationem molestiae dicta neque enim officia quod, quaerat ullam atque laboriosam in eligendi.', timestamp: '01/01/1900 00:00'});
    this.news.push({title:'Titulo 2', text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis vero aperiam eveniet quis voluptatibus unde et saepe exercitationem molestiae dicta neque enim officia quod, quaerat ullam atque laboriosam in eligendi.', timestamp: '01/01/1900 00:00'});
    this.news.push({title:'Titulo 3', text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis vero aperiam eveniet quis voluptatibus unde et saepe exercitationem molestiae dicta neque enim officia quod, quaerat ullam atque laboriosam in eligendi. Perspiciatis vero aperiam eveniet quis voluptatibus unde et saepe exercitationem molestiae dicta neque enim officia quod, quaerat ullam atque laboriosam in eligendi.', timestamp: '01/01/1900 00:00'});
    this.news.push({title:'Titulo 4', text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis vero aperiam eveniet quis voluptatibus unde et saepe exercitationem molestiae dicta neque enim officia quod, quaerat ullam atque laboriosam in eligendi.', timestamp: '01/01/1900 00:00'});
    this.news.push({title:'Titulo 5', text:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis vero aperiam eveniet quis voluptatibus unde et saepe exercitationem molestiae dicta neque enim officia quod, quaerat ullam atque laboriosam in eligendi. Perspiciatis vero aperiam eveniet quis voluptatibus unde et saepe exercitationem molestiae dicta neque enim officia quod, quaerat ullam atque laboriosam in eligendi.', timestamp: '01/01/1900 00:00'});
  }
}

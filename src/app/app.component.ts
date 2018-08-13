import { Component } from '@angular/core';
import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AppService]
})
export class AppComponent {
  title = 'challenge-task';

 dSource=[

{
  "id": 1,
  "title": "title1",
  "image": "assets/model.PNG",
},
{
  "id": 2,
  "title": "title2",
  "image": "assets/model.PNG",
},
{
  "id": 3,
  "title": "title3",
  "image": "assets/model.PNG",
}

];

//console.log(this.http.get('https://jsonplaceholder.typicode.com/todos/1');

}

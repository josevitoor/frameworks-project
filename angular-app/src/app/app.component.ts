import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: '<result [votes]="vote"></result>',
  //templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  vote = [{ 'option': 'Sim', 'count': 6 }, { 'option': 'Não', 'count': 2 }];
  title = 'angular-app';
}

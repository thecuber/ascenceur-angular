import { Component } from '@angular/core';
import { Player, State } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  players: Player[] = [{ name: 'Joueur', score: 20 }, { name: 'Tweekz', score: -10 }];

  state: State = State.WAITING;

  constructor() { }

  addPlayer() {
    var newplayer = { name: 'Joueur ' + (this.players.length + 1), score: 0 };
    this.players.push(newplayer);
  }

}

import { Component } from '@angular/core';
import { Player, State } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  players: Player[] = [{ name: 'Joueur', score: 20 }, { name: 'Tweekz', score: -10  }];

  state: State = State.WAITING;

  maxRounds !: number;
  goingUp !: boolean;

  currentRound !: number; 

  constructor() { }

  addPlayer() {
    var newplayer = { name: 'Joueur ' + (this.players.length + 1), score: 0 };
    this.players.push(newplayer);
  }

  action(){
    switch(this.state){
      case State.WAITING:
        this.state = State.PREDICTING;
        this.startGame();
        break;
    }
  }

  startGame(){
    this.maxRounds = Math.floor((52 - 1) / this.players.length);
    this.goingUp = true;
    this.currentRound = 0;
    this.players.forEach((player) => {
      player.rounds = [];
    });
    this.startRound();
  }

  startRound(){
    if(this.currentRound == this.maxRounds)
      this.goingUp = false;
    this.currentRound += this.goingUp ? 1 : -1;
    if(this.currentRound == 0){
      this.state = State.GAME_END;
    }
    this.players.forEach((player) => {
      if(player.currentRound)
        player.rounds?.push(player.currentRound);
      player.currentRound = {roundScore: 0, prediction: 0, output: 0};
    });
  }

}

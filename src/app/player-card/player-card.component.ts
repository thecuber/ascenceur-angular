import { Component, ElementRef, EventEmitter, Input, OnInit, ViewChild } from '@angular/core';
import { Player, State } from '../model';

@Component({
  selector: 'app-player-card',
  templateUrl: './player-card.component.html',
  styleUrls: ['./player-card.component.css']
})
export class PlayerCardComponent implements OnInit {

  @Input()
  player !: Player;

  @Input()
  gameState !: State;

  @ViewChild('nameInput')
  nameInput !: ElementRef;  

  constructor() { }

  ngOnInit(): void {
  }

  onCardClick(){
    /*switch(this.gameState){
      case State.WAITING:   
        this.nameInput.nativeElement.focus();
      break;

    }*/
  }

}

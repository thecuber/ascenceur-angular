import { Component, Input, OnInit } from '@angular/core';
import { Player } from '../model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  cardColor: any;
  
  @Input()
  player: Player = {name: '', score: 0};

  constructor() { 
    this.cardColor = 'rgb(' + Math.random() * 255 + ', ' + Math.random() * 255 + ', ' + Math.random() * 255 + ')'; 
  }

  hasPlayer(){
    return this.player.name != '';
  }

  ngOnInit(): void {
  }

}

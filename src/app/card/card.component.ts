import { animate, AnimationEvent, state, style, transition, trigger } from '@angular/animations';
import { Component, ContentChild, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, TemplateRef } from '@angular/core';
import { Player } from '../model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [
    trigger('rotate', [
      state('open', style({
        transform: 'rotateY(0deg)'
      })),
      state('close', style({
        transform: 'rotateY(180deg)'
      })),
      state('close-reverse', style({
        transform: 'rotateY(-180deg)'
      })),
      transition('open => close', animate(100)),
      transition('close => close-reverse', animate(0)),
      transition('close-reverse => open', animate(100))
    ])
  ]
})
export class CardComponent implements OnInit {

  @Input()
  cardColor: string = 'rgb(' + Math.random() * 255 + ', ' + Math.random() * 255 + ', ' + Math.random() * 255 + ')';

  //Event fire a la fin du rotate
  @Output()
  animationMade : EventEmitter<void> = new EventEmitter;

  animationIndex: number = 0;

  states = ['open', 'close', 'close-reverse', 'open'];

  @ContentChild('headerTemplate')
  headerTemplate !: TemplateRef<any>;
  @ContentChild('midTemplate')
  midTemplate !: TemplateRef<any>;
  @ContentChild('footerTemplate')
  footerTemplate !: TemplateRef<any>;

  ngOnInit(): void {

  }


  eventEnd($event: AnimationEvent) {
    if($event.fromState == 'void')
      return;
    if(this.animationIndex == 0)
      return;
    if(this.animationIndex == this.states.length - 1){
      this.animationIndex = 0;
      this.animationMade.emit();
    }else{
      this.animationIndex += 1;
    }
    
  }

}

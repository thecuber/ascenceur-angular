import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-addcard',
  templateUrl: './addcard.component.html',
  styleUrls: ['./addcard.component.css']
})
export class AddCardComponent implements OnInit {

  constructor() { }

  @Output()
  onClicked: EventEmitter<void> = new EventEmitter();

  ngOnInit(): void {
  }

}

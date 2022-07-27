import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Player } from '../model';

@Component({
  selector: 'app-namedialog',
  templateUrl: './namedialog.component.html',
  styleUrls: ['./namedialog.component.css']
})
export class NamedialogComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<NamedialogComponent>, @Inject(MAT_DIALOG_DATA) public data: Player) {

   }

  ngOnInit(): void {
  }

  close(b: boolean){
    this.dialogRef.close(b);
  }

}

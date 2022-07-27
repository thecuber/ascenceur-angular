import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Player } from './model';
import { NamedialogComponent } from './namedialog/namedialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  players: Player[] = [{ name: 'Joueur', score: 20 }, { name: 'Tweekz', score: -10 }];

  constructor(public dialog: MatDialog) { }

  addPlayer() {
    var newplayer = { name: 'Joueur ' + (this.players.length + 1), score: 0 };
    this.players.push(newplayer);
    this.openForm(newplayer);
  }

  openForm(player: Player) {
    const dialogRef = this.dialog.open(NamedialogComponent, {
      data: player
    });
    dialogRef.afterClosed().subscribe((r: boolean) => {
      console.log(r);
      if (r) {

      }
    });
  }

}

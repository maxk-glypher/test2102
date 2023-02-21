import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { LittleCoreService } from 'src/app/services/little-core/little-core.service';
import { Player } from 'src/app/services/little-core/types';

@Component({
  selector: 'app-splash-page',
  templateUrl: './splash-page.component.html',
  styleUrls: ['./splash-page.component.scss'],
})
export class SplashPageComponent implements OnInit {
  players: Player[] = [];
  activePlayers: Player[] = [];

  playersSubscription: Subscription | undefined;

  constructor(private littleCoreService: LittleCoreService) {}

  ngOnInit(): void {
    this.playersSubscription = this.littleCoreService.players.subscribe(
      (players: Player[]) => (this.players = [...players])
    );
  }

  ngOnDestroy(): void {
    this.playersSubscription?.unsubscribe();
  }

  toggleActive(index: number) {
    this.players[index].isActive = !this.players[index].isActive;
    this.activePlayers = this.players.filter(
      (player: Player) => player.isActive
    );
  }
}

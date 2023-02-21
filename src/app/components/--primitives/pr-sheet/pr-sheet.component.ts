import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { LittleCoreService } from 'src/app/services/little-core/little-core.service';
import { Player, Stats } from 'src/app/services/little-core/types';

@Component({
  selector: 'app-pr-sheet',
  templateUrl: './pr-sheet.component.html',
  styleUrls: ['./pr-sheet.component.scss'],
})
export class PrSheetComponent implements OnChanges {
  @Input() players: Player[] = [];
  playersStats: Stats[] = [];

  constructor(private littleCoreService: LittleCoreService) {}

  async ngOnChanges(changes: SimpleChanges): Promise<void> {
    if (changes.players?.currentValue?.length) {
      this.playersStats = await this.littleCoreService.getStats(
        this.players.map((player: Player) => player.id)
      );
      console.log(this.playersStats, 'this.playersStats', this.players);
    }
  }
}

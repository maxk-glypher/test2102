import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { playerStatsPremap } from './hepler';
import { PlayerBE, StatsBE, Player, Stats } from './types';

@Injectable({
  providedIn: 'root',
})
export class LittleCoreService {
  endpoint: string = 'https://www.balldontlie.io/api/v1/';
  players = new BehaviorSubject<Player[]>([]);

  constructor() {
    this.fillData();
  }

  //
  // API
  //
  async fillData() {
    this.players.next(await this.getPlayers());
  }

  async getPlayers() {
    const response = await fetch(`${this.endpoint}players?per_page=100`, {
      method: 'GET',
    });
    const players = await response.json();
    return players.data.map((player: PlayerBE) => this.playerMapper(player));
  }

  async getStats(ids: number[]) {
    const response = await fetch(
      `${this.endpoint}stats?postseason=true&per_page=100${this.clarifyPlayers(
        ids
      )}`,
      {
        method: 'GET',
      }
    );
    const playersStats = (await response.text()) as any;
    playerStatsPremap(playersStats);
    return playersStats.data.map((playerStats: StatsBE) =>
      this.playerStatsMapper(playerStats)
    );
  }

  //
  // methods
  //

  clarifyPlayers(ids: number[]) {
    return ids.reduce(
      (playersParams: string, id: number) => `${playersParams}&player_id=${id}`,
      ''
    );
  }

  //
  // Mappers
  //

  playerMapper(playerBE: PlayerBE): Player {
    return {
      id: playerBE.id,
      isActive: false,
      name: `${playerBE.first_name} ${playerBE.last_name}`,
      teamTag: playerBE.team?.abbreviation,
      teamName: playerBE.team?.name,
    };
  }

  playerStatsMapper(playerStatsBE: StatsBE): Stats {
    return {
      id: playerStatsBE.player.id,
      fg: playerStatsBE.ft_pct,
      min: playerStatsBE.min,
      pts: playerStatsBE.pts,
    };
  }
}

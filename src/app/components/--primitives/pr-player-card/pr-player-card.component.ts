import { Component, HostBinding, Input, OnInit } from '@angular/core';
import { Player } from 'src/app/services/little-core/types';

@Component({
  selector: 'app-pr-player-card',
  templateUrl: './pr-player-card.component.html',
  styleUrls: ['./pr-player-card.component.scss'],
})
export class PrPlayerCardComponent implements OnInit {
  @Input() player: Player = {} as Player;
  @HostBinding('class.active') @Input() isActive: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}

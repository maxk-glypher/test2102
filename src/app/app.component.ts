import { Component } from '@angular/core';
import { LittleCoreService } from './services/little-core/little-core.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'test2023';

  constructor(private littleCoreService: LittleCoreService) {}
}


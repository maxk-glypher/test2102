import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrPlayerCardComponent } from './pr-player-card.component';

describe('PrPlayerCardComponent', () => {
  let component: PrPlayerCardComponent;
  let fixture: ComponentFixture<PrPlayerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrPlayerCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrPlayerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

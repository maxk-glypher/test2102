import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrSheetComponent } from './pr-sheet.component';

describe('PrSheetComponent', () => {
  let component: PrSheetComponent;
  let fixture: ComponentFixture<PrSheetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrSheetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrSheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

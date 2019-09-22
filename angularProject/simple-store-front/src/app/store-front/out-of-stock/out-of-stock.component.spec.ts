import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OutOfStockComponent } from './out-of-stock.component';
import { MatDialogModule, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('OutOfStockComponent', () => {
  let component: OutOfStockComponent;
  let fixture: ComponentFixture<OutOfStockComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MatDialogModule, BrowserAnimationsModule],
      declarations: [ OutOfStockComponent ],
    providers:[{ provide: MatDialogRef, useValue: {} }]    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OutOfStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

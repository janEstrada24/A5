import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaulellsComponent } from './taulells.component';

describe('TaulellsComponent', () => {
  let component: TaulellsComponent;
  let fixture: ComponentFixture<TaulellsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaulellsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaulellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrarEquipsComponent } from './entrar-equips.component';

describe('EntrarEquipsComponent', () => {
  let component: EntrarEquipsComponent;
  let fixture: ComponentFixture<EntrarEquipsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrarEquipsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntrarEquipsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainApiComponent } from './main-api.component';

describe('MainApiComponent', () => {
  let component: MainApiComponent;
  let fixture: ComponentFixture<MainApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactuComponent } from './contactu.component';

describe('ContactuComponent', () => {
  let component: ContactuComponent;
  let fixture: ComponentFixture<ContactuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

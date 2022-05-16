import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitarComponent } from './citar.component';

describe('CitarComponent', () => {
  let component: CitarComponent;
  let fixture: ComponentFixture<CitarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

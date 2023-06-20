import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetEditComponent } from './pet-edit.component';

describe('PetEditComponent', () => {
  let component: PetEditComponent;
  let fixture: ComponentFixture<PetEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PetEditComponent]
    });
    fixture = TestBed.createComponent(PetEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

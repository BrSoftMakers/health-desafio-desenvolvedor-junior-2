import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PetCreateComponent } from './pet-create.component';

describe('PetCreateComponent', () => {
  let component: PetCreateComponent;
  let fixture: ComponentFixture<PetCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PetCreateComponent]
    });
    fixture = TestBed.createComponent(PetCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

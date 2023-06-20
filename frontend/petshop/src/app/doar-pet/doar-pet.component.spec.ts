import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoarPetComponent } from './doar-pet.component';

describe('DoarPetComponent', () => {
  let component: DoarPetComponent;
  let fixture: ComponentFixture<DoarPetComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoarPetComponent]
    });
    fixture = TestBed.createComponent(DoarPetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

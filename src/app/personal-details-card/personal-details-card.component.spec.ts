import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalDetailsCardComponent } from './personal-details-card.component';

describe('PersonalDetailsCardComponent', () => {
  let component: PersonalDetailsCardComponent;
  let fixture: ComponentFixture<PersonalDetailsCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalDetailsCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalDetailsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

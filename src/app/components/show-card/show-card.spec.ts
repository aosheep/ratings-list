import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCard } from './show-card';

describe('ShowCard', () => {
  let component: ShowCard;
  let fixture: ComponentFixture<ShowCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

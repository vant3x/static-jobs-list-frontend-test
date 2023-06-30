import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDetailJobComponent } from './card-detail-job.component';

describe('CardDetailJobComponent', () => {
  let component: CardDetailJobComponent;
  let fixture: ComponentFixture<CardDetailJobComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CardDetailJobComponent]
    });
    fixture = TestBed.createComponent(CardDetailJobComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

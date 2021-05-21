import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateitComponent } from './rateit.component';

describe('RateitComponent', () => {
  let component: RateitComponent;
  let fixture: ComponentFixture<RateitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RateitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RateitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

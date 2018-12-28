import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundraisingProgressComponent } from './fundraising-progress.component';

describe('FundraisingProgressComponent', () => {
  let component: FundraisingProgressComponent;
  let fixture: ComponentFixture<FundraisingProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundraisingProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundraisingProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

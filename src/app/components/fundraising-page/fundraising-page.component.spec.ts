import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FundraisingPageComponent } from './fundraising-page.component';

describe('FundraisingPageComponent', () => {
  let component: FundraisingPageComponent;
  let fixture: ComponentFixture<FundraisingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FundraisingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FundraisingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

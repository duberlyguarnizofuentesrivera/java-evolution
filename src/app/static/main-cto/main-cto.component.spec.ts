import {ComponentFixture, TestBed} from '@angular/core/testing';

import {MainCtoComponent} from './main-cto.component';

describe('MainCtoComponent', () => {
  let component: MainCtoComponent;
  let fixture: ComponentFixture<MainCtoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainCtoComponent]
    });
    fixture = TestBed.createComponent(MainCtoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

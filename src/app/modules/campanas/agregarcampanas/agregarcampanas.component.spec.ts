import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarcampanasComponent } from './agregarcampanas.component';

describe('AgregarcampanasComponent', () => {
  let component: AgregarcampanasComponent;
  let fixture: ComponentFixture<AgregarcampanasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarcampanasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarcampanasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

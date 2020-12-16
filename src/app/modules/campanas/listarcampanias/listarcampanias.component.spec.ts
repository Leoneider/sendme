import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarcampaniasComponent } from './listarcampanias.component';

describe('ListarcampaniasComponent', () => {
  let component: ListarcampaniasComponent;
  let fixture: ComponentFixture<ListarcampaniasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListarcampaniasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarcampaniasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

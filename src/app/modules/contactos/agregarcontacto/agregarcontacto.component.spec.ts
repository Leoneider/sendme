import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarcontactoComponent } from './agregarcontacto.component';

describe('AgregarcontactoComponent', () => {
  let component: AgregarcontactoComponent;
  let fixture: ComponentFixture<AgregarcontactoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgregarcontactoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgregarcontactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

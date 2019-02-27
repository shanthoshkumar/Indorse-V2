import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { create_serviceComponent } from './create_service.component';

describe('ServiceComponent', () => {
  let component: create_serviceComponent;
  let fixture: ComponentFixture<create_serviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ create_serviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(create_serviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

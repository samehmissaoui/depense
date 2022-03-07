import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursRxjsComponent } from './cours-rxjs.component';

describe('CoursRxjsComponent', () => {
  let component: CoursRxjsComponent;
  let fixture: ComponentFixture<CoursRxjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoursRxjsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursRxjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

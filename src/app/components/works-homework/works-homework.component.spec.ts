import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorksHomeworkComponent } from './works-homework.component';

describe('WorksHomeworkComponent', () => {
  let component: WorksHomeworkComponent;
  let fixture: ComponentFixture<WorksHomeworkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorksHomeworkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorksHomeworkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

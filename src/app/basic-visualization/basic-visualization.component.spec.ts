import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicVisualizationComponent } from './basic-visualization.component';

describe('BasicVisualizationComponent', () => {
  let component: BasicVisualizationComponent;
  let fixture: ComponentFixture<BasicVisualizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicVisualizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicVisualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

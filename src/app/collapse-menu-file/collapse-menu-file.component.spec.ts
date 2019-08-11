import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapseMenuFileComponent } from './collapse-menu-file.component';

describe('CollapseMenuFileComponent', () => {
  let component: CollapseMenuFileComponent;
  let fixture: ComponentFixture<CollapseMenuFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollapseMenuFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapseMenuFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

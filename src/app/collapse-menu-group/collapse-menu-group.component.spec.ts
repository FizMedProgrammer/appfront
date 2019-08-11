import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapseMenuGroupComponent } from './collapse-menu-group.component';

describe('CollapseMenuGroupComponent', () => {
  let component: CollapseMenuGroupComponent;
  let fixture: ComponentFixture<CollapseMenuGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollapseMenuGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapseMenuGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

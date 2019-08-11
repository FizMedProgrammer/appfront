import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollapseMenuCategoryComponent } from './collapse-menu-category.component';

describe('CollapseMenuCategoryComponent', () => {
  let component: CollapseMenuCategoryComponent;
  let fixture: ComponentFixture<CollapseMenuCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollapseMenuCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollapseMenuCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

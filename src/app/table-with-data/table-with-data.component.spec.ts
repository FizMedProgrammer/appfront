import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableWithDataComponent } from './table-with-data.component';

describe('TableWithDataComponent', () => {
  let component: TableWithDataComponent;
  let fixture: ComponentFixture<TableWithDataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableWithDataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableWithDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

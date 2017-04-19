import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodesTypeListComponent } from './nodes-type-list.component';

describe('NodesTypeListComponent', () => {
  let component: NodesTypeListComponent;
  let fixture: ComponentFixture<NodesTypeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodesTypeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodesTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

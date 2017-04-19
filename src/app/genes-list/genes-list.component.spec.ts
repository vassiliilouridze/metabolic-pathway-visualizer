import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenesListComponent } from './genes-list.component';

describe('GenesListComponent', () => {
  let component: GenesListComponent;
  let fixture: ComponentFixture<GenesListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenesListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

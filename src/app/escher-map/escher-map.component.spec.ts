import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EscherMapComponent } from './escher-map.component';

describe('HomeComponent', () => {
  let component: EscherMapComponent;
  let fixture: ComponentFixture<EscherMapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscherMapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EscherMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

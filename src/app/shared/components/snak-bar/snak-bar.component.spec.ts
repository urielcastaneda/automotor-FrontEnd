import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnakBarComponent } from './snak-bar.component';

describe('SnakBarComponent', () => {
  let component: SnakBarComponent;
  let fixture: ComponentFixture<SnakBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnakBarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnakBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

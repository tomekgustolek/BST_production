import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanerNotloggedComponent } from './planer-notlogged.component';

describe('PlanerNotloggedComponent', () => {
  let component: PlanerNotloggedComponent;
  let fixture: ComponentFixture<PlanerNotloggedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanerNotloggedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanerNotloggedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

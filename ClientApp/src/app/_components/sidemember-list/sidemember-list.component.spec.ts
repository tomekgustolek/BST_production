import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidememberListComponent } from './sidemember-list.component';

describe('SidememberListComponent', () => {
  let component: SidememberListComponent;
  let fixture: ComponentFixture<SidememberListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidememberListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidememberListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

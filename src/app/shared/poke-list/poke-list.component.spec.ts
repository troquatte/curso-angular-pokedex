import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeListComponent } from './poke-list.component';

describe('PokeListComponent', () => {
  let component: PokeListComponent;
  let fixture: ComponentFixture<PokeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

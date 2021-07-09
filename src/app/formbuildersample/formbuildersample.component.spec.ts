import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormbuildersampleComponent } from './formbuildersample.component';

describe('FormbuildersampleComponent', () => {
  let component: FormbuildersampleComponent;
  let fixture: ComponentFixture<FormbuildersampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormbuildersampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormbuildersampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

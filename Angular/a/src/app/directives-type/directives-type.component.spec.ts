import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectivesTypeComponent } from './directives-type.component';

describe('DirectivesTypeComponent', () => {
  let component: DirectivesTypeComponent;
  let fixture: ComponentFixture<DirectivesTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectivesTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectivesTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

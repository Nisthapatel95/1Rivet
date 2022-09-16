import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AttributeTypesComponent } from './attribute-types.component';

describe('AttributeTypesComponent', () => {
  let component: AttributeTypesComponent;
  let fixture: ComponentFixture<AttributeTypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AttributeTypesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AttributeTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

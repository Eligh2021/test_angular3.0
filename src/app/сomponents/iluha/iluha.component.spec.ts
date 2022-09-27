import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IluhaComponent } from './iluha.component';

describe('IluhaComponent', () => {
  let component: IluhaComponent;
  let fixture: ComponentFixture<IluhaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IluhaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IluhaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompLifeCycleComponent } from './comp-life-cycle.component';

describe('CompLifeCycleComponent', () => {
  let component: CompLifeCycleComponent;
  let fixture: ComponentFixture<CompLifeCycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompLifeCycleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CompLifeCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

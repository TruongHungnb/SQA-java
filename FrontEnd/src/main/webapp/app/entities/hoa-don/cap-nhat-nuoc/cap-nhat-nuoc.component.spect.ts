import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapNhatNuocComponent } from './cap-nhat-nuoc.component';

describe('CapNhatNuocComponent', () => {
  let component: CapNhatNuocComponent;
  let fixture: ComponentFixture<CapNhatNuocComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CapNhatNuocComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CapNhatNuocComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TinhTienComponent } from './tinh-tien.component';

describe('TinhTienComponent', () => {
  let component: TinhTienComponent;
  let fixture: ComponentFixture<TinhTienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TinhTienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TinhTienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

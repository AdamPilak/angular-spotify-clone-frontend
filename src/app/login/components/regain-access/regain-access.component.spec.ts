import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegainAccessComponent } from './regain-access.component';

describe('RegainAccessComponent', () => {
  let component: RegainAccessComponent;
  let fixture: ComponentFixture<RegainAccessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegainAccessComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegainAccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

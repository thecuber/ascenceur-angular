import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamedialogComponent } from './namedialog.component';

describe('NamedialogComponent', () => {
  let component: NamedialogComponent;
  let fixture: ComponentFixture<NamedialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NamedialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NamedialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

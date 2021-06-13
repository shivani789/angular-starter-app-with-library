import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicLibraryComponent } from './magic-library.component';

describe('MagicLibraryComponent', () => {
  let component: MagicLibraryComponent;
  let fixture: ComponentFixture<MagicLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MagicLibraryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

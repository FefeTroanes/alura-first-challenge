import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OutputBoxComponent } from './output-box.component';

describe('OutputBoxComponent', () => {
  let component: OutputBoxComponent;
  let fixture: ComponentFixture<OutputBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OutputBoxComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OutputBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

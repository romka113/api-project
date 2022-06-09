import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeityklaComponent } from './keitykla.component';

describe('KeityklaComponent', () => {
  let component: KeityklaComponent;
  let fixture: ComponentFixture<KeityklaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeityklaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeityklaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

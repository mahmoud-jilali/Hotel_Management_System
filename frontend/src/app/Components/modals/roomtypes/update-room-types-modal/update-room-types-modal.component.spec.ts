import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateRoomTypesModalComponent } from './update-room-types-modal.component';

describe('UpdateRoomTypesModalComponent', () => {
  let component: UpdateRoomTypesModalComponent;
  let fixture: ComponentFixture<UpdateRoomTypesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateRoomTypesModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateRoomTypesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

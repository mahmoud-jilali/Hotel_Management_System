import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteRoomTypesModalComponent } from './delete-room-types-modal.component';

describe('DeleteRoomTypesModalComponent', () => {
  let component: DeleteRoomTypesModalComponent;
  let fixture: ComponentFixture<DeleteRoomTypesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeleteRoomTypesModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeleteRoomTypesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

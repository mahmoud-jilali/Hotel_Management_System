import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateRoomTypesModalComponent } from './create-room-types-modal.component';

describe('CreateRoomTypesModalComponent', () => {
  let component: CreateRoomTypesModalComponent;
  let fixture: ComponentFixture<CreateRoomTypesModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateRoomTypesModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateRoomTypesModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

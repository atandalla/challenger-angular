import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotEditComponent } from './bot-edit.component';

describe('BotEditComponent', () => {
  let component: BotEditComponent;
  let fixture: ComponentFixture<BotEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BotEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

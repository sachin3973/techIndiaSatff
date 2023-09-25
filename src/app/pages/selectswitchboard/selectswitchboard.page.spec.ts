import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectswitchboardPage } from './selectswitchboard.page';

describe('SelectswitchboardPage', () => {
  let component: SelectswitchboardPage;
  let fixture: ComponentFixture<SelectswitchboardPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(SelectswitchboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

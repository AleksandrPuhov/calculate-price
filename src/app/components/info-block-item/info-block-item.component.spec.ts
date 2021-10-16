import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoBlockItemComponent } from './info-block-item.component';

describe('InfoBlockItemComponent', () => {
  let component: InfoBlockItemComponent;
  let fixture: ComponentFixture<InfoBlockItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoBlockItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoBlockItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

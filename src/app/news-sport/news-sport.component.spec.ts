import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsSportComponent } from './news-sport.component';

describe('NewsSportComponent', () => {
  let component: NewsSportComponent;
  let fixture: ComponentFixture<NewsSportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsSportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsSportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

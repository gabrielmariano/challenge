import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCep } from './list-cep';

describe('ListCep', () => {
  let component: ListCep;
  let fixture: ComponentFixture<ListCep>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListCep]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListCep);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

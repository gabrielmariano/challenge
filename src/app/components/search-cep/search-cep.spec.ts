import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCep } from './search-cep';

describe('SearchCep', () => {
  let component: SearchCep;
  let fixture: ComponentFixture<SearchCep>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchCep]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchCep);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

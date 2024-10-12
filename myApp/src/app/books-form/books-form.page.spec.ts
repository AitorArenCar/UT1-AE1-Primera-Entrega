import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BooksFormPage } from './books-form.page';

describe('booksformPage', () => {
  let component: BooksFormPage;
  let fixture: ComponentFixture<BooksFormPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksFormPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

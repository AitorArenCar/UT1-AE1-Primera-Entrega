import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BooksFormPageRoutingModule } from './books-form-routing.module';

import { BooksFormPage } from './books-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    BooksFormPageRoutingModule
  ],
  declarations: [BooksFormPage]
})
export class BooksFormPageModule {}

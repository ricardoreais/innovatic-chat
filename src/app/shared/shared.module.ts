import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatChipsModule } from '@angular/material/chips';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
     // Reactive forms.
     ReactiveFormsModule,
     // Angular material exports.
     MatInputModule,
     MatButtonModule,
     MatIconModule,
     MatSidenavModule,
     MatListModule,
     MatCardModule,
     MatSnackBarModule,
     MatChipsModule
  ]
})
export class SharedModule { }

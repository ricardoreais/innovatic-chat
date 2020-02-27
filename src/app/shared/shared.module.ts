import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

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
  ]
})
export class SharedModule { }

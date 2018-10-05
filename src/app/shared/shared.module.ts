import { NgModule } from '@angular/core';
import {
  MatButtonModule, MatCheckboxModule, MatAutocompleteModule,
  MatSidenavModule, MatToolbarModule, MatExpansionModule,
  MatIconModule, MatListModule, MatCardModule,
  MatInputModule, MatGridListModule, MatTooltipModule,
  MatTableModule, MatPaginatorModule, MatChipsModule,
  MatSelectModule, MatDialogModule, MatRadioModule,
  MatSortModule, MatProgressSpinnerModule, MatSnackBarModule,
  MatMenuModule, MatTabsModule, MatDatepickerModule,
  MatNativeDateModule
} from '@angular/material';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms'

@NgModule({
  imports: [
    MatButtonModule, MatCheckboxModule, MatAutocompleteModule,
    MatSidenavModule, MatToolbarModule, MatExpansionModule,
    MatIconModule, MatListModule, MatCardModule,
    MatInputModule, MatGridListModule, MatTooltipModule,
    MatTableModule, MatPaginatorModule, MatChipsModule,
    MatSelectModule, MatDialogModule, MatRadioModule,
    MatSortModule, MatProgressSpinnerModule, MatSnackBarModule,
    MatMenuModule, MatTabsModule, MatDatepickerModule,
    MatNativeDateModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [],
  exports: [
    MatButtonModule, MatCheckboxModule, MatAutocompleteModule,
    MatSidenavModule, MatToolbarModule, MatExpansionModule,
    MatIconModule, MatListModule, MatCardModule,
    MatInputModule, MatGridListModule, MatTooltipModule,
    MatTableModule, MatPaginatorModule, MatChipsModule,
    MatSelectModule, MatDialogModule, MatRadioModule,
    MatSortModule, MatProgressSpinnerModule, MatSnackBarModule,
    MatMenuModule, MatTabsModule, MatDatepickerModule,
    MatNativeDateModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule { }

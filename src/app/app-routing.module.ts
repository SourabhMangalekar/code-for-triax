import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeatBookingComponent } from './seat-booking/seat-booking.component';

const routes: Routes = [
  { path: "", redirectTo: "book-seats", pathMatch: "full" },
  { path: "book-seats", component: SeatBookingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

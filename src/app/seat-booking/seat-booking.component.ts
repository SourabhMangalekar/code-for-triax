import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-seat-booking',
  templateUrl: './seat-booking.component.html',
  styleUrls: ['./seat-booking.component.scss']
})
export class SeatBookingComponent implements OnInit {

  seats = [
    ['a1', 'b1', 'c1', 'd1', 'e1', 'f1', 'g1', 'h1'],
    ['a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2'],
    ['a3', 'b3', 'c3', 'd3', 'e3', 'f3', 'g3', 'h3'],
  ];
  bookedSeats: any = [];
  numberOfSeats: any = '';

  constructor() { }

  ngOnInit(): void {
    console.log(this.seats);
    this.bookedSeats = []
    console.log(this.bookedSeats);
  }


  allocateSeats(numberOfSeats: number) {
    if (numberOfSeats <= (24 - this.bookedSeats.length)) {
      if (numberOfSeats == 4) {
        let seatsAvailable = false;
        for (let i = 0; i < this.seats.length; i++) {
          console.log(this.seats[i]);
          let row = this.seats[i];
          console.log(!this.bookedSeats.includes(...row.slice(2, 6)));
          if (!this.bookedSeats.includes(...row.slice(2, 6))) {
            seatsAvailable = true;
            this.bookedSeats.push(...row.slice(2, 6))
            break
          }
        }
        if (!seatsAvailable) {
          this.allocateSeats(2);
          this.allocateSeats(2);
        }
      }

      if (numberOfSeats == 2) {
        console.log("2Called");
        let seatsAvailable = false;
        for (let i = 0; i < this.seats.length; i++) {
          let row = this.seats[i];
          if (!this.bookedSeats.includes(...row.slice(0, 2))) {
            seatsAvailable = true;
            this.bookedSeats.push(...row.slice(0, 2))
            break
          } else if (!this.bookedSeats.includes(...row.slice(6, 8))) {
            seatsAvailable = true;
            this.bookedSeats.push(...row.slice(6, 8))
            break
          }
        }
        if (!seatsAvailable) {
          this.allocateSeats(1);
          this.allocateSeats(1);
        }
      }

      if (numberOfSeats == 3) {
        console.log("3Called");
        let seatsAvailable = false;
        for (let i = 0; i < this.seats.length; i++) {
          let row = this.seats[i];
          if (!this.bookedSeats.includes(...row.slice(2, 5))) {
            seatsAvailable = true;
            this.bookedSeats.push(...row.slice(2, 5))
            break
          } else if (!this.bookedSeats.includes(...row.slice(3, 6))) {
            seatsAvailable = true;
            this.bookedSeats.push(...row.slice(3, 6))
            break
          }
        }
        if (!seatsAvailable) {
          this.allocateSeats(2);
          this.allocateSeats(1);
        }
      }

      if (numberOfSeats == 1) {
        console.log("1Called");
        let seatsAvailable = false;
        for (let i = 0; i < this.seats.length; i++) {
          let row = this.seats[i];
          for (let j = 0; j < row.length; j++) {
            const seat = row[j];
            if (!this.bookedSeats.includes(seat)) {
              console.log("1st seat", seat);
              seatsAvailable = true;
              return this.bookedSeats.push(seat)

            }
          }
        }

        if (!seatsAvailable) {
          window.alert("Sorry, No more seats available");
          return
        }
      }
    }
    else {
      window.alert(`Sorry, total seat(s) available: ${24 - this.bookedSeats.length}`);
      return
    }
    console.log(this.bookedSeats);
  }


}

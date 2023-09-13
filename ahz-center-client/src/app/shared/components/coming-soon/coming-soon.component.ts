import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-coming-soon',
  templateUrl: './coming-soon.component.html',
  styleUrls: ['./coming-soon.component.scss'],
})
export class ComingSoonComponent implements OnInit {
  countdown: { days: number; hours: number; minutes: number; seconds: number } =
    { days: 0, hours: 0, minutes: 0, seconds: 0 };
  @Input() title: string = '';
  coming_soon: string = 'Coming Soon';
  constructor() {}

  ngOnInit(): void {
    // Set the date to count down to
    this.coming_soon = this.title ? 'coming soon' : 'Coming Soon';
    const countDownDate = new Date('Dec 24, 2023 12:00:00').getTime();

    // Update the countdown every second
    setInterval(() => {
      // Get the current date and time
      const now = new Date().getTime();

      // Calculate the time remaining
      const timeRemaining = countDownDate - now;

      // Calculate the days, hours, minutes, and seconds remaining
      this.countdown = {
        days: Math.floor(timeRemaining / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((timeRemaining % (1000 * 60)) / 1000),
      };
    }, 1000);
  }
}

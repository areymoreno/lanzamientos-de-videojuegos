import { Component } from '@angular/core';

@Component({
  selector: 'app-holiday-banner',
  templateUrl: './holiday-banner.component.html'
})
export class HolidayBannerComponent {
  holidayVisible = false;

  constructor() {
    const startDate = new Date('2025-12-10');
    const endDate = new Date('2026-01-05');
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    this.holidayVisible = today >= startDate && today <= endDate;
  }
}


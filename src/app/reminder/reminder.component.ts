import { Component } from '@angular/core';

import{ Reminder, reminders } from '../reminder';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.css']
})
export class ReminderComponent {
  reminders = [...reminders];
}

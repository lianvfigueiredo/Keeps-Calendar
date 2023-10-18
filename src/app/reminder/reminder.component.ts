import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{ Reminder, reminders } from '../reminder';
import{ Day } from '../day'

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.css']
})
export class ReminderComponent implements OnInit{
  reminder : Reminder | null = null;
  teste: number | null | undefined = null;
  // reminders = [...reminders];
  day : Day | null = new Day("", 0);
  // let i = 1;
  // day : Day;
  // reminder = new Reminder(1);

  idOfDay: string | null = null;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.idOfDay = this.route.snapshot.paramMap.get('item.id');
    this.reminder = new Reminder(this.idOfDay);
    this.day = Day.getDayById(this.idOfDay);
    const a = this.day?.teste;
    this.teste = a
  }
  
  
}
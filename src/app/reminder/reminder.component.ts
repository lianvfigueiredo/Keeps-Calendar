import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import{ Reminder, reminders } from '../reminder';
import{ Day } from '../day'
import { Router } from '@angular/router';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.css']
})
export class ReminderComponent implements OnInit{
  reminder : Reminder | null = null;
  teste: number | null | undefined = null;
  // reminders = [...reminders];
  teste2: string | null = null;
  day : Day | null = new Day("", 0, null);

  idOfDay: string | null = null;

  constructor(private router: Router, private route: ActivatedRoute) {}


  ngOnInit() {
    this.idOfDay = this.route.snapshot.paramMap.get('item.id');
    this.day = Day.getDayById(this.idOfDay);
    const a = this.day?.teste;
    this.teste = a;
    // setTimeout(() => {this.teste2 = escrever();}, 50);
  }

  saveAndNavigateBack(){
    const ano = this.day?.date?.getFullYear() || 0;
    const mes = this.day?.date?.getMonth() || 0;
    const dia = this.day?.date?.getDay();
    const hora = new Date().getHours();
    const minutos = new Date().getMinutes();
    this.reminder = new Reminder(new Date(ano, mes, dia, hora, minutos), this.idOfDay);
    console.log(this.reminder.idByDate);

    this.router.navigate(['/']);
  }
}

// const escrever = () => {
//   const alertbox = window.prompt("Please enter something: ")
//   return alertbox;
// }

// const alertbox = window.prompt("Please enter something: ")
import { Component } from '@angular/core';
import { Day } from '../day';
import { Reminder } from '../reminder';

@Component({
  selector: 'app-month',
  templateUrl: './month.component.html',
  styleUrls: ['./month.component.css']
})
export class MonthComponent {

  
  monthName = monthName;
  mes = new Date().getMonth();
  ano = new Date().getFullYear();
  arrDias = popular(this.mes, this.ano);
  data = this.arrDias;

  add(){
    this.ano = new Date(this.ano, this.mes +1).getFullYear();
    this.mes = new Date(this.ano, this.mes +1).getMonth();
    const arrDias = popular(this.mes, this.ano);
    this.data = arrDias;
  }

  take(){
    this.ano = new Date(this.ano, this.mes -1).getFullYear();
    this.mes = new Date(this.ano, this.mes -1).getMonth();
    const arrDias = popular(this.mes, this.ano);
    this.data = arrDias;
  }


  reminders = Reminder.reminders;
  // console.log(reminders.day)
}

const popular = (mes: number, ano: number) => {
  let dia = 1;
  const diaQueComeca = new Date(ano, mes).getDay();
  const diaQueTermina = new Date(ano, mes + 1, 0).getDate();
  const semana: { dias: (Day)[] }[] = [{ dias: [] }];
  
  // Deixa os espaços iniciais em branco
  for (dia; dia <= diaQueComeca; dia++) {
    semana[0].dias.push(new Day("", 0, null));
  }
  // Completa os restantes
  for (dia = 1; semana[0].dias.length < 7; dia++) {
    semana[0].dias.push(new Day(`${dia}-${mes}-${ano}`, dia, new Date(ano, mes, dia)));
  }
  // Popula o mês
  let j = 1
  for (j; j < 6 && dia <= diaQueTermina; j++) {
    semana.push({ dias: [] });
    for (dia; semana[j].dias.length < 7 && dia <= diaQueTermina; dia++) {
      semana[j].dias.push(new Day(`${dia}-${mes}-${ano}`, dia,  new Date(ano, mes, dia)));
    }
  }
  // Deixa os espaços restantes em branco
  for(; semana[j - 1].dias.length < 7; ){
    semana[j - 1].dias.push(new Day("", 0, null));
  }
  return semana;

  
}

const monthName= ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
                  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

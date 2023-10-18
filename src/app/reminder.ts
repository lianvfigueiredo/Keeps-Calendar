export class Reminder {
    id: number;
    date: Date;
    reminder: string;
    color: ReminderColor;


    constructor(id: number, date: Date, reminder: string, color: ReminderColor) {
        this.id = id;
        this.date = date;
        this.reminder = reminder;
        this.color = color;
    }
}

export const reminders = [];

enum ReminderColor {
    Red = 'red',
    Blue = 'blue',
    Green = 'green',
    Yellow = 'yellow',
}
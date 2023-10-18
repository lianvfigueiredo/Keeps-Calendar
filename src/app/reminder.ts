export class Reminder {
    static reminders: Reminder[] = []
    idByDate: Date | null;
    day: string | null = null;
    reminder: string | null = null;
    color: ReminderColor | null = null;


    constructor(idByDate: Date | null, day: string | null, /*date: Date, reminder: string, color: ReminderColor*/) {
        this.idByDate = idByDate;
        this.day = day;
        Reminder.reminders.push(this);
        // this.date = date;
        // this.reminder = reminder;
        // this.color = color;
    }
}

export const reminders = [];

enum ReminderColor {
    Red = 'red',
    Blue = 'blue',
    Green = 'green',
    Yellow = 'yellow',
}
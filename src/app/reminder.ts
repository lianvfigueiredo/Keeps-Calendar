export class Reminder {
    id: string | null;
    date: Date | null = null;
    reminder: string | null = null;
    color: ReminderColor | null = null;


    constructor(id: string | null, /*date: Date, reminder: string, color: ReminderColor*/) {
        this.id = id;
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
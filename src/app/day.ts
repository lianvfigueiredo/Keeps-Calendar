import { Reminder } from './reminder'

export class Day{
    id : string;
    dayOfMonth : number | null = null;
    reminder : Reminder | null = null;
    date: Date | null = null
    private _teste: number | null = null;
    static arrOfDays : Day[] = [];
    
    

    constructor(id: string, dayOfMonth: number, date: Date | null){
        this.id = id;
        this.dayOfMonth = dayOfMonth;
        this._teste = dayOfMonth + 100
        this.date = date;
        Day.arrOfDays.push(this)
    }
    

    public get teste(): number | null{
        return typeof this._teste === "number" ? this._teste : null;
        
    }

    static getDayById(id: string | null): Day | null{
        const foundDay = Day.arrOfDays.find(element => (element.id == id));
        return foundDay || null;
    }
}
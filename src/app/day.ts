export class Day{
    id : string;
    dayOfMonth: number;
    private _teste: number | null = null;
    static arrOfDays : Day[] = [];
    

    constructor(id: string, dayOfMonth: number){
        this.id = id;
        this.dayOfMonth = dayOfMonth;
        this._teste = dayOfMonth + 100
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
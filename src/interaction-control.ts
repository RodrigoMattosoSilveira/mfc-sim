export class IterationControlC {
    private _ppp = 0;
    private _orders = 0;
    private _pickTime = 0;
    private _packTime = 0;
    private _labelTime = 0;
    private _deliveryTime = 0;
    private _readyTime = 0;
    private _workTime:  number;
    private _nextHourBreak = 0;
    private _nextShiftBreak = 0;

    get ppp(): number {
        return this._ppp;
    }

    set ppp(value: number) {
        this._ppp = value;
    }

    get orders(): number {
        return this._orders;
    }

    set orders(value: number) {
        this._orders = value;
    }

    get pickTime(): number {
        return this._pickTime;
    }

    set pickTime(value: number) {
        this._pickTime = value;
    }

    get packTime(): number {
        return this._packTime;
    }

    set packTime(value: number) {
        this._packTime = value;
    }

    get labelTime(): number {
        return this._labelTime;
    }

    set labelTime(value: number) {
        this._labelTime = value;
    }

    get deliveryTime(): number {
        return this._deliveryTime;
    }

    set deliveryTime(value: number) {
        this._deliveryTime = value;
    }

    get readyTime(): number {
        return this._readyTime;
    }

    set readyTime(value: number) {
        this._readyTime = value;
    }

    get workTime(): number {
        return this._workTime;
    }

    set workTime(value: number) {
        this._workTime = value;
    }

    get nextHourBreak(): number {
        return this._nextHourBreak;
    }

    set nextHourBreak(value: number) {
        this._nextHourBreak = value;
    }

    get nextShiftBreak(): number {
        return this._nextShiftBreak;
    }

    set nextShiftBreak(value: number) {
        this._nextShiftBreak = value;
    }

    constructor(ppp: number, WORK_TIME_BEFORE_NEXT_HOUR_BREAK: number, WORK_TIME_BEFORE_NEXT_SHIFT_BREAK: number) {
        this.ppp = ppp;
        this.orders = 0;
        this.pickTime = 0;
        this.packTime = 0;
        this.labelTime = 0;
        this.deliveryTime = 0;
        this.readyTime = 0;
        this.workTime = 0;
        this.nextHourBreak = WORK_TIME_BEFORE_NEXT_HOUR_BREAK;
        this.nextShiftBreak = WORK_TIME_BEFORE_NEXT_SHIFT_BREAK;
     }
}
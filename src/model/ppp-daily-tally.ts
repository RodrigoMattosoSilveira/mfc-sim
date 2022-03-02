import { nanoid } from 'nanoid';
import {ParametersT} from "../types";

export class PppDailyTally {
    private _pppId: string;
    private _orders: number;
    private _workTime: number;
    private _hourBreakDuration: number;
    private _shiftBreakDuration: number;
    private _nextHourBreak: number;
    private _nextShiftBreak: number;

    get pppId(): string {
        return this._pppId;
    }

    set pppId(value: string) {
        this._pppId = value;
    }

    get orders(): number {
        return this._orders;
    }

    set orders(value: number) {
        this._orders = value;
    }

    get workTime(): number {
        return this._workTime;
    }

    set workTime(value: number) {
        this._workTime = value;
    }

    get hourBreakDuration(): number {
        return this._hourBreakDuration;
    }

    set hourBreakDuration(value: number) {
        this._hourBreakDuration = value;
    }

    get shiftBreakDuration(): number {
        return this._shiftBreakDuration;
    }

    set shiftBreakDuration(value: number) {
        this._shiftBreakDuration = value;
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

    constructor(parameters: ParametersT) {
        this.pppId = nanoid();
        this._orders = 0;
        this.workTime = 0;
        this.hourBreakDuration = 0;
        this.shiftBreakDuration = 0;
        this.nextHourBreak = 3600 - parameters.HOUR_BREAK_DURATION;
        this.nextShiftBreak = parameters.SHIFT_WORK_DURATION/parameters.SHIFT_BREAKS_PER_SHIFT;
    }
}
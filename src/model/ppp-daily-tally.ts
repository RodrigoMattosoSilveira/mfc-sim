import { nanoid } from 'nanoid';
import {ParametersT} from "../types";

export class PppDailyTally {
    private _pppId: string;
    private _orders: number;
    private _workTime: number;
    private _hourBreaTotalTime: number;
    private _shiftBreakTotalTime: number;
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

    get hourBreaTotalTime(): number {
        return this._hourBreaTotalTime;
    }

    set hourBreaTotalTime(value: number) {
        this._hourBreaTotalTime = value;
    }

    get shiftBreakTotalTime(): number {
        return this._shiftBreakTotalTime;
    }

    set shiftBreakTotalTime(value: number) {
        this._shiftBreakTotalTime = value;
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
        this.hourBreaTotalTime = 0;
        this.shiftBreakTotalTime = 0;
        this.nextHourBreak = 3600 - parameters.HOUR_BREAK_DURATION;
        this.nextShiftBreak = parameters.SHIFT_WORK_DURATION/2;
    }
}
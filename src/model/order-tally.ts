import pp = jasmine.pp;
import {nanoid} from "nanoid";

export class OrderTally {
    private _orderId: string;
    private _pppId: string;
    private _orderTime: number;
    private _pickTime: number;
    private _packTime: number;
    private _labelTime: number;
    private _deliveryTime: number;
    private _readyTime: number;

    get orderId(): string {
        return this._orderId;
    }

    set orderId(value: string) {
        this._orderId = value;
    }

    get pppId(): string {
        return this._pppId;
    }

    set pppId(value: string) {
        this._pppId = value;
    }

    get orderTime(): number {
        return this._orderTime;
    }

    set orderTime(value: number) {
        this._orderTime = value;
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

    constructor (pppId: string) {
        this.pppId = pppId;
        this.orderId = nanoid();
        this.orderTime = 0;
        this.pickTime = 0;
        this.packTime = 0;
        this.labelTime = 0;
        this.deliveryTime = 0;
        this.readyTime = 0;
    }
}
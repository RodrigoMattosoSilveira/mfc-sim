import {readParameters} from "./read-parameters";
import {OrderTally} from "./model/order-tally";
import {nanoid} from "nanoid";
import {JSMArgumentsT, ParametersT} from "./types";
import {atOrderStation} from "./at-order-station";


const request = require('supertest');
describe('at-order-station', () => {
    let parameters: ParametersT;
    let order: OrderTally;
    let jsmArguments: JSMArgumentsT;

    beforeAll(async () => {
        parameters = await readParameters();
        jsmArguments = {
            parameters: parameters,
            ppp: null,
            order: null
        }

        // simulate this order fulfillment step
        atOrderStation(jsmArguments);
    });
    it(`creates a PPP Tally`, async () => {
         expect(jsmArguments.ppp).not.toBeNull()
    });
    it(`creates a Order Tally`, async () => {
        expect(jsmArguments.order).not.toBeNull()
    });
    it(`order time is not zero`, async () => {
        expect(jsmArguments.order.orderTime).toBeGreaterThan(0)
    });
    it(`order time is within boundaries`, async () => {
        let min = parameters.TIME_TO_WALK_TO_ORDER_STATION_MIN + parameters.TIME_TO_WAIT_BETWEEN_ORDERS_MIN;
        let max = parameters.TIME_TO_WALK_TO_ORDER_STATION_MAX + parameters.TIME_TO_WAIT_BETWEEN_ORDERS_MAX;
        expect(jsmArguments.order.orderTime).toBeGreaterThanOrEqual(min)
        expect(jsmArguments.order.orderTime).toBeLessThanOrEqual(max)
    });
//     TODO write tests to validate the breaks; I did it manually using G-Sheet
});
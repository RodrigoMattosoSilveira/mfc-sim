import {readParameters} from "./read-parameters";
import {OrderTally} from "./model/order-tally";
import {nanoid} from "nanoid";
import {JSMArgumentsT, ParametersT} from "./types";
import {PppDailyTally} from "./model/ppp-daily-tally";
import {atDeliveryStation} from "./at-delivery-station";
import {atInventoryStation} from "./at-inventory-station";


const request = require('supertest');
describe('at-pick-station', () => {
    let parameters: ParametersT;
    let order: OrderTally;
    let jsmArguments: JSMArgumentsT;

    beforeAll(async () => {
        parameters = await readParameters();
        order = new OrderTally(nanoid())
        jsmArguments = {
            parameters: parameters,
            ppp: null,
            order: order
        }

        // simulate this order fulfillment step
        atInventoryStation(jsmArguments);
    });
    it(`pick time is not zero`, async () => {
        expect(jsmArguments.order.pickTime).toBeGreaterThan(0)
    });
    it(`pick time is within boundaries`, async () => {
        let min = parameters.TIME_TO_WALK_TO_INVENTORY_AREA_MIN + parameters.TIME_TO_PICK_ITEM_MIN;
        let max = parameters.TIME_TO_WALK_TO_INVENTORY_AREA_MAX + parameters.TIME_TO_PICK_ITEM_MAX;
        expect(jsmArguments.order.pickTime).toBeGreaterThanOrEqual(min)
        expect(jsmArguments.order.pickTime).toBeLessThanOrEqual(max)
    });

});
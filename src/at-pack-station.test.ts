import {readParameters} from "./read-parameters";
import {OrderTally} from "./model/order-tally";
import {nanoid} from "nanoid";
import {JSMArgumentsT, ParametersT} from "./types";
import {PppDailyTally} from "./model/ppp-daily-tally";
import {atDeliveryStation} from "./at-delivery-station";
import {atInventoryStation} from "./at-inventory-station";
import {atLabelStation} from "./at-label-station";
import {atPackStatiom} from "./at-pack-station";


const request = require('supertest');
describe('at-pack-station', () => {
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
        atPackStatiom(jsmArguments);
    });
    it(`pack time is not zero`, async () => {
        expect(jsmArguments.order.packTime).toBeGreaterThan(0)
    });
    it(`pack time is within boundaries`, async () => {
        let min = parameters.TIME_TO_WALK_TO_PACKING_STATION_MIN + parameters.TIME_TO_SELECT_PACKING_RESOURCES_MIN + parameters.TIME_TO_PACK_ORDER_MIN;
        let max = parameters.TIME_TO_WALK_TO_PACKING_STATION_MAX + parameters.TIME_TO_SELECT_PACKING_RESOURCES_MAX + parameters.TIME_TO_PACK_ORDER_MAX;
        expect(jsmArguments.order.packTime).toBeGreaterThanOrEqual(min)
        expect(jsmArguments.order.packTime).toBeLessThanOrEqual(max)
    });

});
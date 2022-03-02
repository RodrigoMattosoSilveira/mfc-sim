import {readParameters} from "./read-parameters";
import {OrderTally} from "./model/order-tally";
import {nanoid} from "nanoid";
import {JSMArgumentsT, ParametersT} from "./types";
import {PppDailyTally} from "./model/ppp-daily-tally";
import {atDeliveryStation} from "./at-delivery-station";
import {atInventoryStation} from "./at-inventory-station";
import {atLabelStation} from "./at-label-station";


const request = require('supertest');
describe('at-label-station', () => {
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
        atLabelStation(jsmArguments);
    });
    it(`label time is not zero`, async () => {
        expect(jsmArguments.order.labelTime).toBeGreaterThan(0)
    });
    it(`label time is within boundaries`, async () => {
        let min = parameters.TIME_TO_WALK_TO_LABELING_STATION_MIN + parameters.TIME_TO_PRINT_LABEL_MIN + parameters.TIME_TO_LABEL_ORDER_MIN;
        let max = parameters.TIME_TO_WALK_TO_LABELING_STATION_MAX+ parameters.TIME_TO_PRINT_LABEL_MAX + parameters.TIME_TO_LABEL_ORDER_MAX;
        expect(jsmArguments.order.labelTime).toBeGreaterThanOrEqual(min)
        expect(jsmArguments.order.labelTime).toBeLessThanOrEqual(max)
    });

});
import {readParameters} from "./read-parameters";
import {OrderTally} from "./model/order-tally";
import {nanoid} from "nanoid";
import {JSMArgumentsT, ParametersT} from "./types";
import {atDeliveryStation} from "./at-delivery-station";
import {atOrderStation} from "./at-order-station";
import {atInventoryStation} from "./at-inventory-station";
import {atPackStatiom} from "./at-pack-station";
import {atLabelStation} from "./at-label-station";


const request = require('supertest');
describe('at-delivery-station', () => {
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
        };
        // Simulate the order fulfillment steps
        atOrderStation(jsmArguments);
        atInventoryStation(jsmArguments);
        atPackStatiom(jsmArguments);
        atLabelStation(jsmArguments);

        // simulate this order fulfillment step
        atDeliveryStation(jsmArguments);
    });
    it(`delivery time is not zero`, async () => {
        expect(jsmArguments.order.deliveryTime).toBeGreaterThan(0)
    });
    it(`delivery time is within boundaries`, async () => {
        let min = parameters.TIME_TO_WALK_TO_DELIVERY_AREA_MIN + parameters.TIME_TO_PLACE_ORDER_AT_DELIVERY_AREA_MIN;
        let max = parameters.TIME_TO_WALK_TO_DELIVERY_AREA_MAX + parameters.TIME_TO_PLACE_ORDER_AT_DELIVERY_AREA_MAX;
        expect(jsmArguments.order.deliveryTime).toBeGreaterThanOrEqual(min)
        expect(jsmArguments.order.deliveryTime).toBeLessThanOrEqual(max)
    });
    it(`PPP Tally number of orders updated`, async () => {
        expect(jsmArguments.ppp.orders).toEqual(1)
    });
    it(`PPP Tally worked hours updated`, async () => {
        let orderWorkTime: number = 0;
        orderWorkTime += jsmArguments.order.orderTime;
        orderWorkTime += jsmArguments.order.pickTime;
        orderWorkTime += jsmArguments.order.packTime;
        orderWorkTime += jsmArguments.order.labelTime;
        orderWorkTime += jsmArguments.order.deliveryTime;
        expect(jsmArguments.ppp.workTime).toEqual(orderWorkTime)
    });
});
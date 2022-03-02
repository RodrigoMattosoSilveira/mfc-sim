import {JSMArgumentsT, ParametersT} from "./types";
import random from "random";
import {PppDailyTally} from "./model/ppp-daily-tally";
import {OrderTally} from "./model/order-tally";
import {nanoid} from "nanoid";

export const atOrderStation = (jsmArguments: JSMArgumentsT): void => {
    let p: ParametersT = jsmArguments.parameters;

    // Create a PPP tally, if necessary
    if (!jsmArguments.ppp) {
        // initialize the PPP tally
        jsmArguments.ppp = new PppDailyTally(p);
        console.log(`I, ${ jsmArguments.ppp.pppId}, checked in and am at the order station`);
    }

    // Destroy existing order, if it exists, and get a new order tally
    if (jsmArguments.order)  { delete jsmArguments.order }

    jsmArguments.order = new OrderTally(jsmArguments.ppp.pppId);
    jsmArguments.order.orderId = nanoid();

    // walk to the order station
    let time_to_walk_to_order_station = random.int(p.TIME_TO_WALK_TO_ORDER_STATION_MIN,p.TIME_TO_WALK_TO_ORDER_STATION_MAX);
    jsmArguments.order.orderTime += time_to_walk_to_order_station;
    // console.log('I walked to the order station area in: ' + time_to_walk_to_order_station + ' seconds');

    // Wait until an order is ready
    let time_to_wait_between_orders = random.int(p.TIME_TO_WAIT_BETWEEN_ORDERS_MIN,p.TIME_TO_WAIT_BETWEEN_ORDERS_MAX);
    jsmArguments.order.orderTime += time_to_wait_between_orders;
    // console.log('I was read for the next order in: ' + time_to_wait_between_orders + ' seconds');
}
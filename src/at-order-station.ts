import {JSMArgumentsT, ParametersT} from "./types";
import random from "random";
import {PppDailyTally} from "./model/ppp-daily-tally";
import {OrderTally} from "./model/order-tally";
import {nanoid} from "nanoid";

export const atOrderStation = (jsmArguments: JSMArgumentsT): boolean => {
    let p: ParametersT = jsmArguments.parameters;

    // Destroy existing order, if it exists, and get a new order tally
    if (jsmArguments.order)  { delete jsmArguments.order }

    // Create a PPP tally, if necessary
    if (!jsmArguments.ppp) {
        // initialize the PPP tally
        jsmArguments.ppp = new PppDailyTally(p);
        // console.log(`I, ${ jsmArguments.ppp.pppId}, checked in and am at the order station`);
    }

    // Before handling a new order, check whether the PPP worked a full shift, enough to take a shift break or an hour
    // break
    if (jsmArguments.ppp.workTime > jsmArguments.parameters.SHIFT_WORK_DURATION) {
        // PPP worked a full shift, end their work
        console.log(`I, ${ jsmArguments.ppp.pppId}, am done with my shift's work`);
        return false;
    } else {
        if (jsmArguments.ppp.workTime > jsmArguments.ppp.nextShiftBreak) {
            // PPP PPP worked a full partial shift, take a shift break
            console.log(`I, ${ jsmArguments.ppp.pppId}, am taking a shift break`);
            jsmArguments.ppp.workTime += jsmArguments.parameters.SHIFT_BREAK_DURATION;
            jsmArguments.ppp.nextShiftBreak = jsmArguments.ppp.workTime + jsmArguments.parameters.SHIFT_WORK_DURATION;
            jsmArguments.ppp.nextHourBreak  = jsmArguments.ppp.workTime + (3600 - jsmArguments.parameters.HOUR_BREAK_DURATION);
        } else {
            if (jsmArguments.ppp.workTime > jsmArguments.ppp.nextHourBreak) {
                // PPP PPP worked almost an hour, take an hour break
                console.log(`I, ${ jsmArguments.ppp.pppId}, am taking an hour break`);
                jsmArguments.ppp.workTime += jsmArguments.parameters.HOUR_BREAK_DURATION;
                jsmArguments.ppp.nextHourBreak  = jsmArguments.ppp.workTime + (3600 - jsmArguments.parameters.HOUR_BREAK_DURATION);
            }
        }
    }

    jsmArguments.order = new OrderTally(jsmArguments.ppp.pppId);
    jsmArguments.order.orderId = nanoid();
    jsmArguments.order.items = calculateRandomOrderItems(); // TODO this is a hack, ask someone who knows it to help me

    // walk to the order station
    let time_to_walk_to_order_station = random.int(p.TIME_TO_WALK_TO_ORDER_STATION_MIN,p.TIME_TO_WALK_TO_ORDER_STATION_MAX);
    jsmArguments.order.orderTime += time_to_walk_to_order_station;
    // console.log('I walked to the order station area in: ' + time_to_walk_to_order_station + ' seconds');

    // Wait until an order is ready
    let time_to_wait_between_orders = random.int(p.TIME_TO_WAIT_BETWEEN_ORDERS_MIN,p.TIME_TO_WAIT_BETWEEN_ORDERS_MAX);
    jsmArguments.order.orderTime += time_to_wait_between_orders;
    // console.log('I was read for the next order in: ' + time_to_wait_between_orders + ' seconds');

    return true;
}
// TODO this is a hack, ask someone who knows it to help me select the correct method
const calculateRandomOrderItems = (): number => {
    let rnd = random.pareto(1.160964)();
    let orderItems = Math.floor(random.pareto(1.160964)());
    if (orderItems > 12 ) {
        orderItems = 12
    } else {
        if (orderItems > 3 && orderItems < 12) {
            orderItems = 6
        } else {
            orderItems = 1
        }
    }
    return orderItems;
}

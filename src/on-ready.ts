import {ParametersT} from "./types";
import random from "random";

export const readyF = (parameters: ParametersT): void => {
    // walk to the order station
    let time_to_walk_to_order_station = random.int(parameters.TIME_TO_WALK_TO_ORDER_STATION_MIN,parameters.TIME_TO_WALK_TO_ORDER_STATION_MAX);
    console.log('I walked to the order station area in: ' + time_to_walk_to_order_station + ' seconds');

    // Print label
    let time_to_wait_between_orders = random.int(parameters.TIME_TO_WAIT_BETWEEN_ORDERS_MIN,parameters.TIME_TO_WAIT_BETWEEN_ORDERS_MAX);
    console.log('I was read for the next order in: ' + time_to_wait_between_orders + ' seconds');
}
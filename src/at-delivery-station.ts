import {JSMArgumentsT, ParametersT} from "./types";

const random = require("random");

export const atDeliveryStation = (jsmArguments: JSMArgumentsT): void => {
    let parameters: ParametersT = jsmArguments.parameters;

    // walk to the delivery area
    let time_to_walk_to_delivery_area = random.int(parameters.TIME_TO_WALK_TO_DELIVERY_AREA_MIN,parameters.TIME_TO_WALK_TO_DELIVERY_AREA_MAX);
    jsmArguments.order.deliveryTime += time_to_walk_to_delivery_area;
    // console.log('I walked to the delivery area area in: ' + time_to_walk_to_delivery_area + ' seconds');

    // Place the order
    let time_to_place_order = random.int(parameters.TIME_TO_PLACE_ORDER_AT_DELIVERY_AREA_MIN,parameters.TIME_TO_PLACE_ORDER_AT_DELIVERY_AREA_MAX);
    jsmArguments.order.deliveryTime += time_to_place_order;
    // console.log('I placed the order in the delivery area in: ' + time_to_place_order + ' seconds');

    // The PPP PnO this order. Update the PPP tally
    let orderWorkTime: number = 0;
    jsmArguments.ppp.orders++;
    orderWorkTime += jsmArguments.order.orderTime;
    orderWorkTime += jsmArguments.order.pickTime;
    orderWorkTime += jsmArguments.order.packTime;
    orderWorkTime += jsmArguments.order.labelTime;
    orderWorkTime += jsmArguments.order.deliveryTime;
    jsmArguments.order.workTime = orderWorkTime;
    jsmArguments.ppp.workTime += orderWorkTime;

    //  The PPP is done with this order, record the order
    console.log(`OrderTally,${ jsmArguments.order.orderId},${ jsmArguments.order.orderTime},${ jsmArguments.order.pickTime},${ jsmArguments.order.packTime},${ jsmArguments.order.labelTime},${ jsmArguments.order.deliveryTime},${ jsmArguments.order.workTime}`)
}
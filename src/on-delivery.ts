import {ParametersT} from "./types";

const random = require("random");

export const deliveryF = (parameters: ParametersT): void => {
     // walk to the delivery area
    let time_to_walk_to_delivery_area = random.int(parameters.TIME_TO_WALK_TO_DELIVERY_AREA_MIN,parameters.TIME_TO_WALK_TO_DELIVERY_AREA_MAX);
    console.log('I walked to the delivery area area in: ' + time_to_walk_to_delivery_area + ' seconds');

    // Place the order
    let time_to_print_label = random.int(parameters.TIME_TO_PLACE_ORDER_AT_DELIVERY_AREA_MIN,parameters.TIME_TO_PLACE_ORDER_AT_DELIVERY_AREA_MAX);
    console.log('I placed the order in the delivery area in: ' + time_to_print_label + ' seconds');
}
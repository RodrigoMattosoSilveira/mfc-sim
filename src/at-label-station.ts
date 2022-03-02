import {JSMArgumentsT, ParametersT} from "./types";

const random = require("random");

export const atLabelStation = (jsmArguments: JSMArgumentsT): void => {
    let parameters: ParametersT = jsmArguments.parameters;

    // walk to the lableing station
    let time_to_walk_to_labeling_station = random.int(parameters.TIME_TO_WALK_TO_LABELING_STATION_MIN,parameters.TIME_TO_WALK_TO_LABELING_STATION_MAX);
    jsmArguments.order.labelTime += time_to_walk_to_labeling_station;
    // console.log('I walked to the labeling station area in: ' + time_to_walk_to_labeling_station + ' seconds');

    // Print label
    let time_to_print_label = random.int(parameters.TIME_TO_PRINT_LABEL_MIN,parameters.TIME_TO_PRINT_LABEL_MAX);
    jsmArguments.order.labelTime += time_to_print_label;
    // console.log('I printed the label in: ' + time_to_print_label + ' seconds');

    // Label the oder
    let time_to_label_order = random.int(parameters.TIME_TO_LABEL_ORDER_MIN,parameters.TIME_TO_LABEL_ORDER_MAX);
    jsmArguments.order.labelTime += time_to_label_order;
    // console.log('I labeled the other in: ' + time_to_label_order + ' seconds');
}
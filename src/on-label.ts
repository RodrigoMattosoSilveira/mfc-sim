import {ParametersT} from "./types";

const random = require("random");

export const labelF = (parameters: ParametersT): void => {
    // walk to the lableing station
    let time_to_walk_to_labeling_station = random.int(parameters.TIME_TO_WALK_TO_LABELING_STATION_MIN,parameters.TIME_TO_WALK_TO_LABELING_STATION_MAX);
    console.log('I walked to the labeling station area in: ' + time_to_walk_to_labeling_station + ' seconds');

    // Print label
    let time_to_print_label = random.int(parameters.TIME_TO_PRINT_LABEL_MIN,parameters.TIME_TO_PRINT_LABEL_MAX);
    console.log('I printed the label in: ' + time_to_print_label + ' seconds');

    // Label the oder
    let time_to_label_order = random.int(parameters.TIME_TO_LABEL_ORDER_MIN,parameters.TIME_TO_LABEL_ORDER_MAX);
    console.log('I labeled the other in: ' + time_to_label_order + ' seconds');
}
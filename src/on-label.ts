import {IterationControlT, ParametersT} from "./types";
import {IterationControlC} from "./interaction-control";

const random = require("random");

export const labelF = (parameters: ParametersT, interactionControl: IterationControlC): boolean => {
    let labelTime: number = 0;

    // walk to the lableing station
    let time_to_walk_to_labeling_station = random.int(parameters.TIME_TO_WALK_TO_LABELING_STATION_MIN,parameters.TIME_TO_WALK_TO_LABELING_STATION_MAX);
    // console.log('I walked to the labeling station area in: ' + time_to_walk_to_labeling_station + ' seconds');
    labelTime += time_to_walk_to_labeling_station;

    // Print label
    let time_to_print_label = random.int(parameters.TIME_TO_PRINT_LABEL_MIN,parameters.TIME_TO_PRINT_LABEL_MAX);
    // console.log('I printed the label in: ' + time_to_print_label + ' seconds');
    labelTime += time_to_print_label;

    // Label the oder
    let time_to_label_order = random.int(parameters.TIME_TO_LABEL_ORDER_MIN,parameters.TIME_TO_LABEL_ORDER_MAX);
    console.log('I labeled the order in: ' + time_to_label_order + ' seconds');
    labelTime += time_to_label_order;

    interactionControl.labelTime += labelTime;
    interactionControl.workTime += labelTime;

    return true;
}
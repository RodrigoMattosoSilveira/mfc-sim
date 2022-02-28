import {IterationControlT, ParametersT} from "./types";
import {IterationControlC} from "./interaction-control";

const random = require("random");

export const packF = (parameters: ParametersT, interactionControl: IterationControlC): boolean => {
    let packTime: number = 0;

    // walk to the packing station
     let time_to_walk_to_packing_station = random.int(parameters.TIME_TO_WALK_TO_PACKING_STATION_MIN,parameters.TIME_TO_WALK_TO_PACKING_STATION_MAX);
    // console.log('I walked to the packing station area in: ' + time_to_walk_to_paking_station + ' seconds');
    packTime += time_to_walk_to_packing_station;

    // Get packing resources
    let time_to_get_packing_resources = random.int(parameters.TIME_TO_SELECT_PACKING_RESOURCES_MIN,parameters.TIME_TO_SELECT_PACKING_RESOURCES_MAX);
    // console.log('I got packing resources in: ' + time_to_get_packing_resources + ' seconds');
    packTime += time_to_get_packing_resources;

    // Pack the order
    let time_to_pack_order = random.int(parameters.TIME_TO_PACK_ORDER_MIN,parameters.TIME_TO_PACK_ORDER_MAX);
    // console.log('I packed the other in: ' + time_to_pack_order + ' seconds');
    packTime += time_to_get_packing_resources;

    interactionControl.packTime += packTime;
    interactionControl.workTime += packTime;

    return true;
}
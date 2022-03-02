import {ParametersT} from "./types";

const random = require("random");

export const pickF = (parameters: ParametersT): void => {
    // walk to the inventory area
    let time_to_walk_to_inventory_area = random.int(parameters.TIME_TO_WALK_TO_INVENTORY_AREA_MIN,parameters.TIME_TO_WALK_TO_INVENTORY_AREA_MAX);
    console.log('I walked to the inventory area in: ' + time_to_walk_to_inventory_area + ' seconds');

    // pick an order item
    let time_to_pick_item = random.int(parameters.TIME_TO_PICK_ITEM_MIN,parameters.TIME_TO_PICK_ITEM_MAX);
    console.log('I picked an order item in: ' + time_to_pick_item + ' seconds');
}
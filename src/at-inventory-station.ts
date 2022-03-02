import {JSMArgumentsT, ParametersT} from "./types";
import { nanoid } from 'nanoid';
import {OrderTally} from "./model/order-tally";

const random = require("random");

export const atInventoryStation = (jsmArguments: JSMArgumentsT): void => {
    let parameters: ParametersT = jsmArguments.parameters;

    // walk to the inventory area
    let time_to_walk_to_inventory_area = random.int(parameters.TIME_TO_WALK_TO_INVENTORY_AREA_MIN,parameters.TIME_TO_WALK_TO_INVENTORY_AREA_MAX);
    jsmArguments.order.pickTime += time_to_walk_to_inventory_area;
    // console.log('I walked to the inventory area in: ' + time_to_walk_to_inventory_area + ' seconds');

    // pick an order item
    let time_to_pick_item = random.int(parameters.TIME_TO_PICK_ITEM_MIN,parameters.TIME_TO_PICK_ITEM_MAX);
    jsmArguments.order.pickTime += time_to_pick_item;
    // console.log('I picked an order item in: ' + time_to_pick_item + ' seconds');
 }
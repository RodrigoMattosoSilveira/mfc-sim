import {IterationControlT, ParametersT} from "./types";
import random from "random";
import {IterationControlC} from "./interaction-control";

export const readyF = (parameters: ParametersT, interactionControl:  IterationControlC): boolean => {
    let readyTime: number = 0;
    let returnValue: boolean = true;

    // walk to the order station
    let time_to_walk_to_order_station = random.int(parameters.TIME_TO_WALK_TO_ORDER_STATION_MIN,parameters.TIME_TO_WALK_TO_ORDER_STATION_MAX);
    // console.log('I walked to the order station area in: ' + time_to_walk_to_order_station + ' seconds');
    readyTime += time_to_walk_to_order_station;

    interactionControl.readyTime += readyTime;

    // TODO abstract these into a class
    interactionControl.workTime += readyTime;

    // before starting the next iteration, assert whether it is over, or the PPP is require to take a break
    if (interactionControl.workTime >= parameters.SHIFT_WORK_DURATION) {
        // We completed this iteration, return false to stop it
        returnValue = false;
    } else {
        if (interactionControl.nextShiftBreak >= interactionControl.nextShiftBreak) {
            // Take a shift break
            readyTime +=  parameters.SHIFT_BREAK_DURATION;
            interactionControl.nextShiftBreak += readyTime;
            interactionControl.workTime += readyTime;
        } else {
            if (interactionControl.nextHourBreak >= interactionControl.nextHourBreak) {
                // take an hour bread
                readyTime +=  parameters.HOUR_BREAK_DURATION;
                interactionControl.nextHourBreak += readyTime;
                interactionControl.workTime += readyTime;
            }
        }
    }

    // Ready for next order
    let time_to_wait_between_orders = random.int(parameters.TIME_TO_WAIT_BETWEEN_ORDERS_MIN,parameters.TIME_TO_WAIT_BETWEEN_ORDERS_MAX);
    console.log('I was read for the next order in: ' + time_to_wait_between_orders + ' seconds');

    return returnValue;
}
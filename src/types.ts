import {PppDailyTally} from "./model/ppp-daily-tally";
import {OrderTally} from "./model/order-tally";

export type ParametersT = {
    ITERATIONS: number,
    SHIFT_WORK_DURATION: number,
    SHIFT_BREAK_DURATION: number,
    HOUR_BREAK_DURATION: number,
    TIME_TO_WALK_TO_INVENTORY_AREA_MIN: number,
    TIME_TO_WALK_TO_INVENTORY_AREA_MAX: number,
    TIME_TO_PICK_ITEM_MIN: number,
    TIME_TO_PICK_ITEM_MAX: number
    TIME_TO_WALK_TO_PACKING_STATION_MIN: number,
    TIME_TO_WALK_TO_PACKING_STATION_MAX: number,
    TIME_TO_SELECT_PACKING_RESOURCES_MIN: number,
    TIME_TO_SELECT_PACKING_RESOURCES_MAX: number,
    TIME_TO_PACK_ORDER_MIN: number,
    TIME_TO_PACK_ORDER_MAX: number,
    TIME_TO_WALK_TO_LABELING_STATION_MIN: number,
    TIME_TO_WALK_TO_LABELING_STATION_MAX: number,
    TIME_TO_PRINT_LABEL_MIN: number,
    TIME_TO_PRINT_LABEL_MAX: number,
    TIME_TO_LABEL_ORDER_MIN: number,
    TIME_TO_LABEL_ORDER_MAX: number,
    TIME_TO_WALK_TO_DELIVERY_AREA_MIN: number,
    TIME_TO_WALK_TO_DELIVERY_AREA_MAX: number,
    TIME_TO_PLACE_ORDER_AT_DELIVERY_AREA_MIN: number,
    TIME_TO_PLACE_ORDER_AT_DELIVERY_AREA_MAX: number,
    TIME_TO_WALK_TO_ORDER_STATION_MIN: number,
    TIME_TO_WALK_TO_ORDER_STATION_MAX: number,
    TIME_TO_WAIT_BETWEEN_ORDERS_MIN: number,
    TIME_TO_WAIT_BETWEEN_ORDERS_MAX: number
}

export type JSMArgumentsT = {
    parameters: ParametersT | null,
    ppp: PppDailyTally | null,
    order: OrderTally | null
}
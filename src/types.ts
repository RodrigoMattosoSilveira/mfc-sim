export type ParametersT = {
    PPPS: number,
    ITERATIONS: number,
    SHIFT_WORK_DURATION: number,
    SHIFT_BREAK_DURATION: number,
    HOUR_BREAK_DURATION: number,
    WORK_TIME_BEFORE_NEXT_SHIFT_BREAK: number,
    WORK_TIME_BEFORE_NEXT_HOUR_BREAK: number,
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

export type PickingT =
{
    TIME_TO_WALK_TO_INVENTORY_AREA: number,
    TIME_TO_PICK_ITEM: number
}

export type PackingT =
{
    TIME_TO_WALK_TO_PACKING_STATION: number,
    TIME_TO_SELECT_PACKING_RESOURCES: number,
    TIME_TO_PACK_ORDER_MAX: number,
}

export type LabelingT =
    {
        TIME_TO_WALK_TO_LABELING_STATION: number,
        TIME_TO_PRINT_LABEL: number,
        TIME_TO_LABEL_ORDER: number,
    }

export type DeliveryT =
    {
        TIME_TO_WALK_TO_DELIVERY_AREA: number,
        TIME_TO_PLACE_ORDER_AT_DELIVERY_AREA: number,
    }

export type ReadyT =
    {
        TIME_TO_WALK_TO_ORDER_STATION_MIN: number,
        TIME_TO_WALK_TO_ORDER_STATION_MAX: number,
        TIME_TO_WAIT_BETWEEN_ORDERS_MIN: number,
        TIME_TO_WAIT_BETWEEN_ORDERS_MAX: number
    }

// One per PPP collects the iteration's attributes
export type IterationControlT = {
    ppp: number,
    orders: number,
    pickTime: number,
    packTime: number,
    labelTime: number,
    deliveryTime: number,
    readyTime: number,
    workTime:  number,
    nextHourBreak: number,
    nextShiftBreak: number
}
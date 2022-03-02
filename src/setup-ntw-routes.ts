
const StateMachine = require('javascript-state-machine');
import {atInventoryStation} from "./at-inventory-station";
import {atPackStatiom} from "./at-pack-station";
import {atLabelStation} from "./at-label-station";
import {atDeliveryStation} from "./at-delivery-station";
import {atOrderStation} from "./at-order-station";
import {JSMArgumentsT, ParametersT} from "./types";

export const setupNetworkRoutes = (): any => {
    return new StateMachine({
      // https://github.com/jakesgordon/javascript-state-machine/issues/130
      // init: 'pick',
      transitions: [
        { name: 'checkin',   from: 'none',              to: 'orderStation' },
        { name: 'pick',      from: 'orderStation',      to: 'inventoryStation' },
        { name: 'pack',      from: 'inventoryStation',  to: 'packStation'  },
        { name: 'label',     from: 'packStation',       to: 'labelStation'    },
        { name: 'deliver',   from: 'labelStation',      to: 'deliverStation' },
        { name: 'ready',     from: 'deliverStation',    to: 'orderStation' }
      ],
      methods: {
        onCheckin:   function(lifecycle: any, jsmArguments: JSMArgumentsT) { atOrderStation(jsmArguments);  },
        onPick:      function(lifecycle: any, jsmArguments: JSMArgumentsT) { atInventoryStation(jsmArguments); },
        onPack:      function(lifecycle: any, jsmArguments: JSMArgumentsT) { atPackStatiom(jsmArguments); },
        onLabel:     function(lifecycle: any, jsmArguments: JSMArgumentsT) { atLabelStation(jsmArguments) },
        onDeliver:   function(lifecycle: any, jsmArguments: JSMArgumentsT) { atDeliveryStation(jsmArguments) },
        onReady:     function(lifecycle: any, jsmArguments: JSMArgumentsT) { return atOrderStation(jsmArguments) },
      }
    });
}
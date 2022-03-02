
const StateMachine = require('javascript-state-machine');
import {logF} from "./on-log";
import {pickF} from "./on-pick";
import {packF} from "./on-pack";
import {labelF} from "./on-label";
import {deliveryF} from "./on-delivery";
import {readyF} from "./on-ready";
import {ParametersT} from "./types";

export const setupNetworkRoutes = (parameters: ParametersT): any => {
    return new StateMachine({
      // https://github.com/jakesgordon/javascript-state-machine/issues/130
      // init: 'pick',
      transitions: [
        { name: 'log',       from: 'none',           to: 'orderStation' },
        { name: 'pick',      from: 'orderStation',   to: 'inventoryArea' },
        { name: 'pack',      from: 'inventoryArea',  to: 'packStation'  },
        { name: 'label',     from: 'packStation',    to: 'labelStation'    },
        { name: 'deliver',   from: 'labelStation',   to: 'deliverStation' },
        { name: 'ready',     from: 'deliverStation', to: 'orderStation' }
      ],
      methods: {
        onLog:       function() { logF(parameters);  },
        onPick:      function() { pickF(parameters); },
        onPack:      function() { packF(parameters); },
        onLabel:     function() { labelF(parameters) },
        onDeliver:   function() { deliveryF(parameters) },
        onReady:     function() { readyF(parameters) },
      }
    });
}
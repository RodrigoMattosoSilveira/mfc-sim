import {IterationControlC} from "./interaction-control";

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
      init: 'log',
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
        onPick:      function(lifecycle: any, iteractionControl: IterationControlC) { pickF(parameters, iteractionControl); },
        onPack:      function(lifecycle: any, iteractionControl: IterationControlC) { packF(parameters, iteractionControl); },
        onLabel:     function(lifecycle: any, iteractionControl: IterationControlC) { labelF(parameters, iteractionControl) },
        onDeliver:   function(lifecycle: any, iteractionControl: IterationControlC) { deliveryF(parameters, iteractionControl) },
        onReady:     function(lifecycle: any, iteractionControl: IterationControlC) { readyF(parameters, iteractionControl)},
      }
    });
}
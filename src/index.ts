const StateMachine = require('javascript-state-machine');
const random = require('random')

export {}

// Start the state machine

console.log(`MFC Simulation Started`);

const fsm = new StateMachine({
  // https://github.com/jakesgordon/javascript-state-machine/issues/130
  // init: 'pick',
  transitions: [
    { name: 'log',      from: 'none',   to: 'orderStation' },
    { name: 'pick',      from: 'orderStation',   to: 'inventoryArea' },
    { name: 'pack',      from: 'inventoryArea',  to: 'packStation'  },
    { name: 'label',     from: 'packStation',    to: 'labelStation'    },
    { name: 'deliver',   from: 'labelStation',   to: 'deliverStation' },
    { name: 'available', from: 'deliverStation', to: 'orderStation' }
  ],
  methods: {
    onLog:      function() { console.log('I logged in and am at the order station') },
    onPick:      function() {
      console.log('I walked to the inventory area')
      let n = random.int(2,6);
      console.log('I picked an order item in: ' + n + ' seconds');
    },
    onPack:      function() { console.log('I walked to the packing station') },
    onLabel:     function() { console.log('I walked to the label station') },
    onDeliver:   function() { console.log('I walked to the delivery area') },
    onAvailable: function() { console.log('I walked to the order station') },
  }
});

fsm.log();
console.log(`fsm.state: I'm at the ` + fsm.state);
fsm.pick();
console.log(`fsm.state: I'm at the ` + fsm.state);
fsm.pack();
console.log(`fsm.state: I'm at the ` + fsm.state);
fsm.label();
console.log(`fsm.state: I'm at the ` + fsm.state);
fsm.deliver();
console.log(`fsm.state: I'm at the ` + fsm.state);
fsm.available;
console.log(`fsm.state: I'm at the ` + fsm.state);

console.log(`MFC Simulation Ended`);
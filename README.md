# TypeScript Node.js Template
This is a utility to run simulations for Ohi MFCs. 

## Using it

```zsh
# Development
yarn watch

# Test
yarn test

# Production
yarn build
npm start
```

# Approach
## Monte Carlo Simulation
Monte Carlo Simulation is a mathematical technique used to estimate the possible outcomes of an uncertain event. It was invented by John von Neumann and Stanislaw Ulam during World War II to improve decision making under uncertain conditions. It was named after a well-known casino town, called Monaco, since the element of chance is core to the modeling approach, similar to a game of roulette.
## Approach
I will build a MCS model to simulate one or more PPP fulfilling an order by executing a series of discrete operations, consisting of walking to a station, performing an operation, and repeating this process until the PPP executes all operations required to fullfill an order.
## Technology
I will use the [javascript-state-machine](https://www.npmjs.com/package/javascript-state-machine) state machine package to define the MFC network and its routes. I'll use the [grosso-modo](https://github.com/hville/grosso-modo#grosso-modo) random number generator package to aid in the simulation. 
## Details
I'll use the `state machine` to define the order fulfillment states and transitions, and the `random number generator` to simulate the time to walk between stations, and execute operations at these stations:
* **_transition_**: from order station to inventory:
  * `rng`: time_to_walk_to_location_1
  * `rng`: time_to_walk_to_location_i, when picking multiple items for an order;
* **_transition_**: from inventory to inventory
  * `rng`: time_to_pick_item
* **_transition_**: from inventory to packing station
  * `rng`: time_to_walk_to_packing_station
  * `rng`: time_to_select_packing_material
  * `rng`: time_to_pack_order
* **_transition_**: from packing station to label station
  * `rng`: time_to_walk_to_label_station
    `rng`: time_to_type_print_label
  * `rng`: time_to_label_order
* **_transition_**: from label station to delivery station
  * `rng`: time_to_walk_to_delivery_station
  * `rng`: time_to_type_print_label
  * `rng`: time_to_label_order
* **_transition_**: from label delivery to order station
  * `rng`: time_to_walk_to_order_station 

Additional simulated values:
* order inter arrival time
* number of items per order
* number of PPP

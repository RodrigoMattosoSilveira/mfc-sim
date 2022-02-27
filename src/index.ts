import {calculateIterationF} from "./calculate-interation";
import {ParametersT} from "./types";
import {readParms} from "./read-parms";
import {setupNetworkRoutes} from "./setup-ntw-routes";

// Start the state machine
console.log(`MFC Simulation Started`);

let parameters: ParametersT = readParms();
const fsm = setupNetworkRoutes(parameters);
calculateIterationF(fsm, parameters);

console.log(`MFC Simulation Ended`);

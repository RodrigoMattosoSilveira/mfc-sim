import {calculateIterationF} from "./calculate-interation";
import {ParametersT} from "./types";
import {readParameters} from "./read-parameters";
import {setupNetworkRoutes} from "./setup-ntw-routes";

let parameters: ParametersT;
readParameters()
    .then((resp: ParametersT) => {
        // console.log(`Parameters: ${JSON.stringify(resp)}`)

        // Start the state machine
        console.log(`MFC Simulation Started`);
        parameters = resp
        const fsm = setupNetworkRoutes(parameters);
        calculateIterationF(fsm, parameters);

        console.log(`MFC Simulation Ended`);
    })
    .catch((err: any) => console.error('Unable to read parameters file', err));

import {JSMArgumentsT, ParametersT} from "./types";
import {PppTallyCsv} from "./io/ppp-tally-csv";
import {setupNetworkRoutes} from "./setup-ntw-routes";

export const calculateIterationF = (fsm: any, parameters: ParametersT): void => {
    const jsmArguments: JSMArgumentsT = {
        parameters:  parameters,
        ppp: null,
        order:  null
    }
    const pppTallyCsv = new PppTallyCsv();
    let pppTallyLine = `lineType,pppId,orders,workTime\n`
    pppTallyCsv.writeLine(pppTallyLine);

    for (let i: number = 0; i < parameters.ITERATIONS; i++) {
        const fsm = setupNetworkRoutes();
        fsm.checkin(jsmArguments);
        while (true) {
            // console.log(`fsm.state: I'm at the ` + fsm.state);
            fsm.pick(jsmArguments);
            // console.log(`fsm.state: I'm at the ` + fsm.state);
            fsm.pack(jsmArguments);
            // console.log(`fsm.state: I'm at the ` + fsm.state);
            fsm.label(jsmArguments);
            // console.log(`fsm.state: I'm at the ` + fsm.state);
            fsm.deliver(jsmArguments);
            // console.log(`fsm.state: I'm at the ` + fsm.state);
            if (!fsm.ready(jsmArguments)) {break;}
            // console.log(`fsm.state: I'm at the ` + fsm.state);
        }

        pppTallyLine = `PPPTally, ${jsmArguments.ppp.pppId},${jsmArguments.ppp.orders},${jsmArguments.ppp.workTime}\n`
        pppTallyCsv.writeLine(pppTallyLine);
        console.log(`PPPTally, ${jsmArguments.ppp.pppId},${jsmArguments.ppp.orders},${jsmArguments.ppp.workTime}`);
        delete jsmArguments.ppp;
    }
}

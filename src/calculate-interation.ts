import {JSMArgumentsT, ParametersT} from "./types";
import {PppDailyTally} from "./model/ppp-daily-tally";
import {OrderTally} from "./model/order-tally";

export const calculateIterationF = (fsm: any, parameters: ParametersT): void => {
    const jsmArguments: JSMArgumentsT = {
        parameters:  parameters,
        ppp: null,
        order:  null
    }
    let ppp = jsmArguments.ppp;

    fsm.checkin(jsmArguments);
    for (let i: number = 0; i < 10; i++) {
        // console.log(`fsm.state: I'm at the ` + fsm.state);
        fsm.pick(jsmArguments);
        // console.log(`fsm.state: I'm at the ` + fsm.state);
        fsm.pack(jsmArguments);
        // console.log(`fsm.state: I'm at the ` + fsm.state);
        fsm.label(jsmArguments);
        // console.log(`fsm.state: I'm at the ` + fsm.state);
        fsm.deliver(jsmArguments);
        // console.log(`fsm.state: I'm at the ` + fsm.state);
        fsm.ready(jsmArguments);
        // console.log(`fsm.state: I'm at the ` + fsm.state);
    }

    console.log(`PPPTally, ${jsmArguments.ppp.pppId},${jsmArguments.ppp.orders},${jsmArguments.ppp.workTime}`)
}

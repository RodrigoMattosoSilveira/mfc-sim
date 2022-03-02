import {JSMArgumentsT, ParametersT} from "./types";

export const calculateIterationF = (fsm: any, parameters: ParametersT): void => {
    const jsmArguments: JSMArgumentsT = {
        parameters:  parameters,
        ppp: null,
        order:  null
    }

    fsm.checkin(jsmArguments);
    for (let i: number = 0; i < 200; i++) {
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

    console.log(`PPPTally, ${jsmArguments.ppp.pppId},${jsmArguments.ppp.orders},${jsmArguments.ppp.workTime}`)
}

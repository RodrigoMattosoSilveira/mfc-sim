import {ParametersT, IterationControlT} from "./types";
import {IterationControlC} from "./interaction-control";

export const calculateIterationF = (fsm: any, parameters: ParametersT): void => {
    let iterationControlA: IterationControlC[] = [];
    for (let i: number = 0; i <= parameters.ITERATIONS; i++) {
        let iterationControl = new IterationControlC(i, parameters.WORK_TIME_BEFORE_NEXT_HOUR_BREAK, parameters.WORK_TIME_BEFORE_NEXT_SHIFT_BREAK)
        iterationControlA.push(iterationControl);
        fsm.log();
        for (let i: number =0; i <= parameters.PPPS; i++) {
            fsm.pick(iterationControl);
            // console.log(`fsm.state: I'm at the ` + fsm.state);
            fsm.pack(iterationControl);
            // console.log(`fsm.state: I'm at the ` + fsm.state);
            fsm.label(iterationControl);
            // console.log(`fsm.state: I'm at the ` + fsm.state);
            fsm.deliver(iterationControl);
            // console.log(`fsm.state: I'm at the ` + fsm.state);
           if (!(fsm.ready(iterationControl))) {
               break;
           }
            // console.log(`fsm.state: I'm at the ` + fsm.state);
        }
        console.log (`Interaction; ${i} PPP: ${iterationControl.ppp}, Orders:  ${iterationControl.orders}`, )
    }
}
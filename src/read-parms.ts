const fs = require('fs');
import {ParametersT} from './types'

export const readParms = (): ParametersT => {
    let rawData = fs.readFileSync("./src/parameters.json", { encoding: "utf8", flag: "r" });
    return JSON.parse(rawData);
}
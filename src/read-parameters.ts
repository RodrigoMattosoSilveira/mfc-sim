
const fs = require('fs');
import {ParametersT} from './types'

// export async const readParms = (): ParametersT => {
//     let rawData = fs.readFileSync("./src/parameters.json", { encoding: "utf8", flag: "r" });
//     return JSON.parse(rawData);
// }

export async function readParameters(): Promise<ParametersT> {
    const fsPromises = require('fs').promises;
    const data = await fsPromises.readFile('./src/parameters.json')
        .catch((err: any) => console.error('Failed to read parameter file', err));

    return JSON.parse(data.toString());
}
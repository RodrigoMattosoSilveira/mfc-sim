
const fs = require('fs');
import {ParametersT} from './types'

//https://dev.to/starpebble/async-await-with-nodejs-file-system-1aa2#:~:text=readFile%20%28%29%20returns%20a%20promise%20to%20await%20upon,thenable.%20Try%20and%20figure%20out%20error%20handling%20yourself.
export async function readParameters(): Promise<ParametersT> {
    const fsPromises = require('fs').promises;
    const data = await fsPromises.readFile('./src/parameters.json')
        .catch((err: any) => console.error('Failed to read parameter file', err));

    return JSON.parse(data.toString());
}
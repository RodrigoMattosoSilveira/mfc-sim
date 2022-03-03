import {promises as fsPromises} from "fs";

const fs = require('fs');
import {ParametersT} from './types'

//https://dev.to/starpebble/async-await-with-nodejs-file-system-1aa2#:~:text=readFile%20%28%29%20returns%20a%20promise%20to%20await%20upon,thenable.%20Try%20and%20figure%20out%20error%20handling%20yourself.
// https://blog.logrocket.com/reading-writing-json-files-nodejs-complete-tutorial/#:~:text=readFileSync%20is%20another%20built-in%20method%20for%20reading%20files,code%20until%20all%20the%20data%20has%20been%20read.
export async function readParameters(): Promise<ParametersT> {
    const fsPromises = require('fs').promises;
    const data = await fsPromises.readFile('./src/parameters.json')
        .catch((err: any) => console.error('Failed to read parameter file', err));

    return JSON.parse(data.toString());
}

// TODO use this pattern to get rid of the promisses above
// export const readSomething = async () => {
//
// }
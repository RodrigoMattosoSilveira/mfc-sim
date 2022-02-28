import {ParametersT} from "./types";
import {readParameters} from "./read-parameters";

const request = require('supertest');
describe('Read Parameters File', () => {
    let parameters: ParametersT;
    beforeAll(async () => {
        parameters = await readParameters();
    });
    it(`Reads the file successfully`, async () => {
        expect(parameters).not.toBeNull()
    });
});
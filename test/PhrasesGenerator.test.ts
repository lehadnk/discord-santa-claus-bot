import {expect} from "chai";
import {PhrasesGenerator} from "../src/PhrasesGenerator";

describe('Test PhrasesGeneratorGenerator.ts', () => {
    it('should return random phrase', () => {
        let phrases = new PhrasesGenerator();
        expect(phrases.getOne('123')).to.be.string;
    });
});
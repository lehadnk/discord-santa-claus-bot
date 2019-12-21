import {expect} from "chai";
import {PhrasesGenerator} from "../src/PhrasesGenerator";
import {Locker} from "../src/Locker";

describe('Test Locker.ts', () => {
    it('should lock', () => {
        let locker = new Locker(10000);
        locker.lockForMember('123');
        expect(locker.isLockedForMember('123')).to.be.true;
    });

    it('should release lock', () => {
        let locker = new Locker(10);
        locker.lockForMember('123');
        expect(locker.isLockedForMember('123')).to.be.true;
        setTimeout(() => {
            expect(locker.isLockedForMember('123')).to.be.false;
        }, 20);
    });
});
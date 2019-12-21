import {expect} from "chai";
import {PhrasesGenerator} from "../src/PhrasesGenerator";
import {Locker} from "../src/Locker";

describe('Test Locker.ts', () => {
    it('should lock', () => {
        let locker = new Locker(10000);
        locker.lockForMember('456','123');
        expect(locker.isLockedForMember('456', '123')).to.be.true;
    });

    it('should release lock', () => {
        let locker = new Locker(10);
        locker.lockForMember('test-guild', '123');
        expect(locker.isLockedForMember('test-guild', '123')).to.be.true;
        setTimeout(() => {
            expect(locker.isLockedForMember('test-guild', '123')).to.be.false;
        }, 20);
    });

    it('tests not blocking in the other guild', () => {
        let locker = new Locker(10);
        locker.lockForMember('test-guild', '123');
        expect(locker.isLockedForMember('another-guild', '123')).to.be.false;
    });

    it('tests not blocking another member', () => {
        let locker = new Locker(10);
        locker.lockForMember('test-guild', '123');
        expect(locker.isLockedForMember('test-guild', '222')).to.be.false;
    });
});
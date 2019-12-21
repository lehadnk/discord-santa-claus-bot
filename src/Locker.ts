export class Locker {
    private lock: Map<string, void> = new Map<string, void>();
    private readonly lockPeriod: number;

    constructor(lockPeriod: number) {
        this.lockPeriod = lockPeriod;
    }


    public lockForMember(member_id: string): void
    {
        this.lock.set(member_id);
        setTimeout(() => {
            this.lock.delete(member_id);
        }, this.lockPeriod);
    }

    public isLockedForMember(member_id: string): boolean
    {
        return this.lock.has(member_id);
    }
}
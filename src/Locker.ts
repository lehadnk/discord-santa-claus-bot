export class Locker {
    private lock: Map<string, void> = new Map<string, void>();
    private readonly lockPeriod: number;

    constructor(lockPeriod: number) {
        this.lockPeriod = lockPeriod;
    }


    public lockForMember(guild_id: string, member_id: string): void
    {
        this.lock.set(guild_id+member_id);
        setTimeout(() => {
            this.lock.delete(guild_id+member_id);
        }, this.lockPeriod);
    }

    public isLockedForMember(guild_id, member_id: string): boolean
    {
        return this.lock.has(guild_id+member_id);
    }
}
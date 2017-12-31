import { Injectable } from '@angular/core';
import Gun from 'gun/gun';


export class GunServiceConfig {
    public peers: string[];
    public modules: any;

    constructor(config: {peers: string[], modules: any}) {
        this.peers.push(...config.peers);
        Object.keys(config.modules).forEach((key) => {
            this.modules[key] = config.modules[key];
        });
    }
}

@Injectable()
export class NgGunService {
    private readonly _gun: any;

    constructor(config: GunServiceConfig) {
        this._gun = Gun(config.peers, config.modules);
    }

    public get gun() {
        return this._gun;
    }
}

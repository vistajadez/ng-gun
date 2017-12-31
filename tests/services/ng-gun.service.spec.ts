import { inject, TestBed } from '@angular/core/testing';
import { NgGunService, GunServiceConfig } from '../../src/ng-gun';

describe('NgGunService', () => {

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                NgGunService,
                {provide: GunServiceConfig, useValue: {peers: [], modules: {}}}
            ]
        });
    });

    it('should provide the Gun instance',
        inject([NgGunService],
            (gunService: NgGunService) => {
                expect(gunService.gun).toBeDefined();
            })
    );

});

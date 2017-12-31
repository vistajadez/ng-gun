import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgGunService, GunServiceConfig } from '../services/ng-gun.service';

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [NgGunService]
})
export class NgGunModule {
    public static forRoot(config: GunServiceConfig): ModuleWithProviders {
        return {
            ngModule: NgGunModule,
            providers: [
                NgGunService,
                {
                    provide: GunServiceConfig,
                    useValue: config
                }
            ]
        };
    }
}

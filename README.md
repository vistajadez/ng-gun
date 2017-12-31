# ng-gun
>Expose the GUN database to Angular applications.

A simple, lightweight service to expose GUN to your Angular applications.

## <a name="configuration"></a>Configuration
You can pass configuration to `ng-gun` when it is initially injected into your application.
Configuration is simply an object with a `peers` array and a `modules` object:
```javascript
const gunConfig = {
  peers: [],
  modules: {}  
};
```
You can configure with peers and modules as described in the GUN documentation:
```javascript
const gunConfig = {
    peers: ['http://yourdomain.com/gun'],
    modules: {
        s3: {
            key: '123',
            secret: '456',
            bucket: 'myapp'
          }
    }
}
```

Inject `ng-gun` in the root component of your application, passing in your configuration:
```javascript
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { NgGunModule } from 'ng-gun';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgGunModule.forRoot(gunConfig)
  ],
  providers: [HasIdGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

## <a name="Using"></a>Using
Use in your components as with any service. The service exposes the single GUN instance as "gun":
```javascript
import { Component, OnInit } from '@angular/core';
import { NgGunService } from 'ng-gun';

@Component({
  selector: 'app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.scss']
})
export class HomeComponent implements OnInit{
    constructor(private gunService: NgGunService) { }
    
    ngOnInit() {
        let test = this.gunService.gun.get('test');
        test.put({name: 'foo'});
    }
}
```

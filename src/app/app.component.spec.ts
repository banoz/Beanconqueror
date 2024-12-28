import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { TestBed, waitForAsync } from '@angular/core/testing';

import { AngularDelegate, ModalController } from '@ionic/angular';
import { RouterTestingModule } from '@angular/router/testing';

import { AppComponent } from './app.component';
import { TranslateModule } from '@ngx-translate/core';
import { Storage } from '@ionic/storage';
import { AndroidPermissions } from '@awesome-cordova-plugins/android-permissions/ngx';
import { IntentHandlerService } from 'src/services/intentHandler/intent-handler.service';
import { UIPreparationHelper } from 'src/services/uiPreparationHelper';

describe('AppComponent', () => {
  let statusBarSpy, platformReadySpy, platformSpy;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: AndroidPermissions },
        { provide: Storage },
        { provide: ModalController },
        { provide: AngularDelegate },
        { provide: IntentHandlerService, useValue: {} },
        { provide: UIPreparationHelper, useValue: {} },
      ],
      imports: [RouterTestingModule.withRoutes([]), TranslateModule.forRoot()],
    }).compileComponents();
  }));

  it('should create the app', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  /** it('should have menu labels', async () => {
    const fixture = await TestBed.createComponent(AppComponent);
    await fixture.detectChanges();
    const app = fixture.nativeElement;
    const menuItems = app.querySelectorAll('ion-label');
    expect(menuItems.length).toEqual(2);
    expect(menuItems[0].textContent).toContain('Home');
    expect(menuItems[1].textContent).toContain('List');
  });

  it('should have urls', async () => {
    const fixture = await TestBed.createComponent(AppComponent);
    await fixture.detectChanges();
    const app = fixture.nativeElement;
    const menuItems = app.querySelectorAll('ion-item');
    expect(menuItems.length).toEqual(2);
    expect(menuItems[0].getAttribute('ng-reflect-router-link')).toEqual('/home');
    expect(menuItems[1].getAttribute('ng-reflect-router-link')).toEqual('/list');
  });**/
});

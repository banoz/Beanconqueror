import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomePage } from './home.page';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { CommonModule } from '@angular/common';
import { IonicModule, ModalController, NavParams } from '@ionic/angular';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { File } from '@awesome-cordova-plugins/file/ngx';
import { Camera } from '@awesome-cordova-plugins/camera/ngx';
import { ImagePicker } from '@awesome-cordova-plugins/image-picker/ngx';
import { AndroidPermissions } from '@awesome-cordova-plugins/android-permissions/ngx';
import { UIHelper } from '../../services/uiHelper';
import { NavParamsMock, UIHelperMock } from '../../classes/mock';
import { RouterTestingModule } from '@angular/router/testing';
import { PipesModule } from 'src/pipes/pipes.module';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot(),
        FormsModule,
        CommonModule,
        IonicModule,
        RouterTestingModule,
        PipesModule,
      ],
      declarations: [HomePage],
      providers: [
        { provide: InAppBrowser },
        { provide: ModalController },
        { provide: NavParams, useClass: NavParamsMock },
        { provide: Storage },
        { provide: File },
        { provide: Camera },
        { provide: ImagePicker },
        { provide: AndroidPermissions },
        { provide: UIHelper, useClass: UIHelperMock },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

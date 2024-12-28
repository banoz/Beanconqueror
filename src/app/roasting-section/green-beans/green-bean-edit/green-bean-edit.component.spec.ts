import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { IonicModule, NavParams } from '@ionic/angular';

import { GreenBeanEditComponent } from './green-bean-edit.component';
import {
  NavParamsMock,
  UIHelperMock,
  UIImageMock,
} from '../../../../classes/mock';
import { Storage } from '@ionic/storage';
import { TranslateModule } from '@ngx-translate/core';
import { UIHelper } from '../../../../services/uiHelper';
import { UIImage } from '../../../../services/uiImage';

describe('GreenBeanEditComponent', () => {
  let component: GreenBeanEditComponent;
  let fixture: ComponentFixture<GreenBeanEditComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [GreenBeanEditComponent],
      imports: [IonicModule.forRoot(), TranslateModule.forRoot(), FormsModule],
      providers: [
        { provide: NavParams, useClass: NavParamsMock },
        { provide: Storage },
        {
          provide: UIHelper,
          useClass: UIHelperMock,
        },
        {
          provide: UIImage,
          useClass: UIImageMock,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GreenBeanEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

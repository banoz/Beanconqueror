import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StatisticPage } from './statistic.page';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { Storage } from '@ionic/storage';
import { CommonModule } from '@angular/common';
import { IonicModule, ModalController, NavParams } from '@ionic/angular';
import { NavParamsMock } from '../../classes/mock/NavParamsMock';
import { Router } from '@angular/router';
import { UIHelper } from '../../services/uiHelper';
import { UIHelperMock } from '../../classes/mock';
import { PipesModule } from 'src/pipes/pipes.module';

describe('StatisticPage', () => {
  let component: StatisticPage;
  let fixture: ComponentFixture<StatisticPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot(),
        FormsModule,
        CommonModule,
        IonicModule,
        PipesModule,
      ],
      declarations: [StatisticPage],
      providers: [
        { provide: ModalController },
        { provide: NavParams, useClass: NavParamsMock },
        { provide: Storage },
        { provide: UIHelper, useClass: UIHelperMock },
        { provide: Router },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatisticPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

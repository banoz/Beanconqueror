import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { BrewModalImportShotMeticulousComponent } from './brew-modal-import-shot-meticulous.component';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { TranslateServiceMock } from '../../../classes/mock';

describe('BrewModalImportShotMeticulousComponent', () => {
  let component: BrewModalImportShotMeticulousComponent;
  let fixture: ComponentFixture<BrewModalImportShotMeticulousComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [BrewModalImportShotMeticulousComponent],
      imports: [IonicModule.forRoot(), TranslateModule.forRoot(), FormsModule],
      providers: [
        {
          provide: TranslateService,
          useValue: TranslateServiceMock,
        },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(BrewModalImportShotMeticulousComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { IosPlatformService } from './ios-platform.service';
import { Storage } from '@ionic/storage';
import { TranslateModule } from '@ngx-translate/core';
import { IonicModule } from '@ionic/angular';

import { UIHelperMock } from '../../classes/mock';
import { UIHelper } from '../uiHelper';

describe('IosPlatformService', () => {
  let service: IosPlatformService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: Storage },
        {
          provide: UIHelper,
          useClass: UIHelperMock,
        },
      ],
      imports: [TranslateModule.forRoot(), IonicModule.forRoot()],
    });
    service = TestBed.inject(IosPlatformService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

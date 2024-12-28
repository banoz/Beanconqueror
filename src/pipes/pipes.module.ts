import { NgModule } from '@angular/core';
import { KeysPipe } from './keys';
import { EnumToArrayPipe } from './enumToArray';
import { FormatDatePipe } from './formatDate';
import { ToFixedPipe } from './toFixed';
import { BrewFieldVisiblePipe } from './brew/brewFieldVisible';
import { BrewFieldOrder } from './brew/brewFieldOrder';
import { BeanFieldVisiblePipe } from './bean/beanFieldVisible';
import { BrewFunction } from './brew/brewFunction';
import { BeanFunction } from './bean/beanFunction';
import { PreparationFunction } from './preparation/preparationFunction';
import { SettingFunction } from './setting/settingFunction';
import { MillFunction } from './mill/millFunction';

@NgModule({
  declarations: [
    EnumToArrayPipe,
    FormatDatePipe,
    KeysPipe,
    ToFixedPipe,
    BrewFieldVisiblePipe,
    BrewFieldOrder,
    BeanFieldVisiblePipe,
    BrewFunction,
    BeanFunction,
    PreparationFunction,
    SettingFunction,
    MillFunction,
  ],
  exports: [
    EnumToArrayPipe,
    FormatDatePipe,
    KeysPipe,
    ToFixedPipe,
    BrewFieldVisiblePipe,
    BrewFieldOrder,
    BeanFieldVisiblePipe,
    BrewFunction,
    BeanFunction,
    PreparationFunction,
    SettingFunction,
    MillFunction,
  ],
})
export class PipesModule {}

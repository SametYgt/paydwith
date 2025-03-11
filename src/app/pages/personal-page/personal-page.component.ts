import { Component } from '@angular/core';
import { PageBannerComponent } from './page-banner/page-banner.component';
import { PopularCountriesComponent } from '../../common/popular-countries/popular-countries.component';
import { ProtectingYourMoneyComponent } from '../../demos/currency-transfer-provider/protecting-your-money/protecting-your-money.component';
import { MoneyTransferComponent } from '../../common/money-transfer/money-transfer.component';
import { ServicesComponent } from '../../demos/currency-transfer-provider/services/services.component';
import { TranslateModule } from '@ngx-translate/core';
import { locale as english } from './i18n/en';
import { locale as turkish } from './i18n/tr';
import { PaydwithTranslationLoaderService } from '../../../../public/services/translation-loader.service';

@Component({
  selector: 'app-personal-page',
  imports: [
    PageBannerComponent,
    ServicesComponent,
    MoneyTransferComponent,
    ProtectingYourMoneyComponent,
    PopularCountriesComponent,
    TranslateModule,
  ],
  templateUrl: './personal-page.component.html',
  styleUrl: './personal-page.component.scss',
})
export class PersonalPageComponent {
  constructor(
    private paydwithTranslationLoaderService: PaydwithTranslationLoaderService
  ) {
    this.paydwithTranslationLoaderService.loadTranslations(english, turkish);
  }
}

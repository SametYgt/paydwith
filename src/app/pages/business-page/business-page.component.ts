import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PageBannerComponent } from './page-banner/page-banner.component';
import { FaqComponent } from '../../common/faq/faq.component';
import { MoneyTransferComponent } from '../../common/money-transfer/money-transfer.component';
import { KeyFeaturesComponent } from '../../common/key-features/key-features.component';
import { HowItWorksComponent } from '../../common/how-it-works/how-it-works.component';
import { TranslateModule } from '@ngx-translate/core';
import { locale as english } from './i18n/en';
import { locale as turkish } from './i18n/tr';
import { PaydwithTranslationLoaderService } from '../../../../public/services/translation-loader.service';

@Component({
  selector: 'app-business-page',
  imports: [
    RouterLink,
    PageBannerComponent,
    HowItWorksComponent,
    KeyFeaturesComponent,
    MoneyTransferComponent,
    FaqComponent,
    TranslateModule,
  ],
  templateUrl: './business-page.component.html',
  styleUrl: './business-page.component.scss',
})
export class BusinessPageComponent {
  constructor(
    private paydwithTranslationLoaderService: PaydwithTranslationLoaderService
  ) {
    this.paydwithTranslationLoaderService.loadTranslations(english, turkish);
  }
}

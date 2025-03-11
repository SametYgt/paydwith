import { Component } from '@angular/core';
import { PageBannerComponent } from './page-banner/page-banner.component';
import { HowItWorksComponent } from '../../common/how-it-works/how-it-works.component';
import { MoneyTransferComponent } from '../../common/money-transfer/money-transfer.component';
import { RatingsReviewsComponent } from '../../common/ratings-reviews/ratings-reviews.component';
import { TranslateModule } from '@ngx-translate/core';
import { locale as english } from './i18n/en';
import { locale as turkish } from './i18n/tr';
import { PaydwithTranslationLoaderService } from '../../../../public/services/translation-loader.service';

@Component({
  selector: 'app-how-it-works-page',
  imports: [
    PageBannerComponent,
    HowItWorksComponent,
    MoneyTransferComponent,
    RatingsReviewsComponent,
    TranslateModule,
  ],
  templateUrl: './how-it-works-page.component.html',
  styleUrl: './how-it-works-page.component.scss',
})
export class HowItWorksPageComponent {
  constructor(
    private paydwithTranslationLoaderService: PaydwithTranslationLoaderService
  ) {
    this.paydwithTranslationLoaderService.loadTranslations(english, turkish);
  }
}

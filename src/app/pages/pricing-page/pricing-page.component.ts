import { Component } from '@angular/core';
import { PageBannerComponent } from './page-banner/page-banner.component';
import { CompareWithOthersComponent } from '../../common/compare-with-others/compare-with-others.component';
import { CtaComponent } from '../../common/cta/cta.component';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { locale as english } from './i18n/en';
import { locale as turkish } from './i18n/tr';
import { PaydwithTranslationLoaderService } from '../../../../public/services/translation-loader.service';

@Component({
  selector: 'app-pricing-page',
  imports: [
    RouterLink,
    PageBannerComponent,
    CompareWithOthersComponent,
    CtaComponent,
    TranslateModule,
  ],
  templateUrl: './pricing-page.component.html',
  styleUrl: './pricing-page.component.scss',
})
export class PricingPageComponent {
  constructor(
    private paydwithTranslationLoaderService: PaydwithTranslationLoaderService
  ) {
    this.paydwithTranslationLoaderService.loadTranslations(english, turkish);
  }
}

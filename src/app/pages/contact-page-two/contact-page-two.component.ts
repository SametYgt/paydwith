import { Component } from '@angular/core';
import { PageBannerComponent } from './page-banner/page-banner.component';
import { TranslateModule } from '@ngx-translate/core';
import { locale as english } from './i18n/en';
import { locale as turkish } from './i18n/tr';
import { PaydwithTranslationLoaderService } from '../../../../public/services/translation-loader.service';
@Component({
  selector: 'app-contact-page-two',
  imports: [PageBannerComponent, TranslateModule],
  templateUrl: './contact-page-two.component.html',
  styleUrl: './contact-page-two.component.scss',
})
export class ContactPageTwoComponent {
  constructor(
    private paydwithTranslationLoaderService: PaydwithTranslationLoaderService
  ) {
    this.paydwithTranslationLoaderService.loadTranslations(english, turkish);
  }
}

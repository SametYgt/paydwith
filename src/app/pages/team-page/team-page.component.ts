import { Component } from '@angular/core';
import { PageBannerComponent } from './page-banner/page-banner.component';
import { CtaComponent } from '../../common/cta/cta.component';
import { TranslateModule } from '@ngx-translate/core';
import { locale as english } from './i18n/en';
import { locale as turkish } from './i18n/tr';
import { PaydwithTranslationLoaderService } from '../../../../public/services/translation-loader.service';

@Component({
  selector: 'app-team-page',
  imports: [PageBannerComponent, CtaComponent, TranslateModule],
  templateUrl: './team-page.component.html',
  styleUrl: './team-page.component.scss',
})
export class TeamPageComponent {
  constructor(
    private paydwithTranslationLoaderService: PaydwithTranslationLoaderService
  ) {
    this.paydwithTranslationLoaderService.loadTranslations(english, turkish);
  }
}

import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { PaydwithTranslationLoaderService } from '../../../../../public/services/translation-loader.service';
import { locale as english } from './i18n/en';
import { locale as turkish } from './i18n/tr';

@Component({
  selector: 'app-how-klob-works',
  imports: [TranslateModule],
  templateUrl: './how-klob-works.component.html',
  styleUrl: './how-klob-works.component.scss',
})
export class HowKlobWorksComponent {
  constructor(
    private paydwithTranslationLoaderService: PaydwithTranslationLoaderService
  ) {
    this.paydwithTranslationLoaderService.loadTranslations(english, turkish);
  }
}

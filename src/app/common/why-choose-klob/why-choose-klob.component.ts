import { Component } from '@angular/core';
import { PaydwithTranslationLoaderService } from '../../../../public/services/translation-loader.service';
import { TranslateModule } from '@ngx-translate/core';
import { locale as english } from './i18n/en';
import { locale as turkish } from './i18n/tr';

@Component({
  selector: 'app-why-choose-klob',
  imports: [TranslateModule],
  templateUrl: './why-choose-klob.component.html',
  styleUrl: './why-choose-klob.component.scss',
})
export class WhyChooseKlobComponent {
  constructor(
    private paydwithTranslationLoaderService: PaydwithTranslationLoaderService
  ) {
    this.paydwithTranslationLoaderService.loadTranslations(english, turkish);
  }
}

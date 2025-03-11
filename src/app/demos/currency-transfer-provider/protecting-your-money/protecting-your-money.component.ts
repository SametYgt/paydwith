import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { locale as english } from './i18n/en';
import { locale as turkish } from './i18n/tr';
import { PaydwithTranslationLoaderService } from '../../../../../public/services/translation-loader.service';

@Component({
  selector: 'app-protecting-your-money',
  imports: [TranslateModule],
  templateUrl: './protecting-your-money.component.html',
  styleUrl: './protecting-your-money.component.scss',
})
export class ProtectingYourMoneyComponent {
  constructor(
    private paydwithTranslationLoaderService: PaydwithTranslationLoaderService
  ) {
    this.paydwithTranslationLoaderService.loadTranslations(english, turkish);
  }
}

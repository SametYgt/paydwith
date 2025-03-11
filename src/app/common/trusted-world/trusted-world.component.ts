import { Component } from '@angular/core';
import { PaydwithTranslationLoaderService } from '../../../../public/services/translation-loader.service';
import { TranslateModule } from '@ngx-translate/core';
import { locale as english } from './i18n/en';
import { locale as turkish } from './i18n/tr';

@Component({
  selector: 'app-trusted-world',
  imports: [TranslateModule],
  templateUrl: './trusted-world.component.html',
  styleUrl: './trusted-world.component.scss',
})
export class TrustedWorldComponent {
  constructor(
    private paydwithTranslationLoaderService: PaydwithTranslationLoaderService
  ) {
    this.paydwithTranslationLoaderService.loadTranslations(english, turkish);
  }
}

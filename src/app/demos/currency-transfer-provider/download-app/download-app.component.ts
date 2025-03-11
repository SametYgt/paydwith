import { Component } from '@angular/core';
import { PaydwithTranslationLoaderService } from '../../../../../public/services/translation-loader.service';
import { TranslateModule } from '@ngx-translate/core';
import { locale as english } from './i18n/en';
import { locale as turkish } from './i18n/tr';

@Component({
  selector: 'app-download-app',
  imports: [TranslateModule],
  templateUrl: './download-app.component.html',
  styleUrl: './download-app.component.scss',
})
export class DownloadAppComponent {
  constructor(
    private paydwithTranslationLoaderService: PaydwithTranslationLoaderService
  ) {
    this.paydwithTranslationLoaderService.loadTranslations(english, turkish);
  }
}

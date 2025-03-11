import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { locale as english } from './i18n/en';
import { locale as turkish } from './i18n/tr';
import { TranslateModule } from '@ngx-translate/core';
import { PaydwithTranslationLoaderService } from '../../../../../public/services/translation-loader.service';

@Component({
  selector: 'app-services',
  imports: [RouterLink, TranslateModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  constructor(
    private paydwithTranslationLoaderService: PaydwithTranslationLoaderService
  ) {
    this.paydwithTranslationLoaderService.loadTranslations(english, turkish);
  }
}

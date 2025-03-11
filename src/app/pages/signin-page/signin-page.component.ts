import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { locale as english } from './i18n/en';
import { locale as turkish } from './i18n/tr';
import { PaydwithTranslationLoaderService } from '../../../../public/services/translation-loader.service';

@Component({
  selector: 'app-signin-page',
  imports: [RouterLink, TranslateModule],
  templateUrl: './signin-page.component.html',
  styleUrl: './signin-page.component.scss',
})
export class SigninPageComponent {
  constructor(
    private paydwithTranslationLoaderService: PaydwithTranslationLoaderService
  ) {
    this.paydwithTranslationLoaderService.loadTranslations(english, turkish);
  }
}

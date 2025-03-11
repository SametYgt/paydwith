import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { locale as english } from './i18n/en';
import { locale as turkish } from './i18n/tr';
import { PaydwithTranslationLoaderService } from '../../../../../public/services/translation-loader.service';

@Component({
  selector: 'app-payment-experiences',
  imports: [RouterLink, TranslateModule],
  templateUrl: './payment-experiences.component.html',
  styleUrl: './payment-experiences.component.scss',
})
export class PaymentExperiencesComponent {
  constructor(
    private paydwithTranslationLoaderService: PaydwithTranslationLoaderService
  ) {
    this.paydwithTranslationLoaderService.loadTranslations(english, turkish);
  }
}

import { Component } from '@angular/core';
import { locale as english } from './i18n/en';
import { locale as turkish } from './i18n/tr';
import { PaydwithTranslationLoaderService } from '../../../../public/services/translation-loader.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-reviews',
  imports: [TranslateModule],
  templateUrl: './reviews.component.html',
  styleUrl: './reviews.component.scss',
})
export class ReviewsComponent {
  constructor(
    private paydwithTranslationLoaderService: PaydwithTranslationLoaderService
  ) {
    this.paydwithTranslationLoaderService.loadTranslations(english, turkish);
  }
}

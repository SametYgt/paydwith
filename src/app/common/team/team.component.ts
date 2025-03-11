import { Component } from '@angular/core';
import { PaydwithTranslationLoaderService } from '../../../../public/services/translation-loader.service';
import { locale as english } from './i18n/en';
import { locale as turkish } from './i18n/tr';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-team',
  imports: [TranslateModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.scss',
})
export class TeamComponent {
  constructor(
    private paydwithTranslationLoaderService: PaydwithTranslationLoaderService
  ) {
    this.paydwithTranslationLoaderService.loadTranslations(english, turkish);
  }
}

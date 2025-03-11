import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { PaydwithTranslationLoaderService } from '../../../../public/services/translation-loader.service';
import { locale as english } from './i18n/en';
import { locale as turkish } from './i18n/tr';

@Component({
  selector: 'app-ready-to-talk',
  imports: [RouterLink, TranslateModule],
  templateUrl: './ready-to-talk.component.html',
  styleUrl: './ready-to-talk.component.scss',
})
export class ReadyToTalkComponent {
  constructor(
    private paydwithTranslationLoaderService: PaydwithTranslationLoaderService
  ) {
    this.paydwithTranslationLoaderService.loadTranslations(english, turkish);
  }
}

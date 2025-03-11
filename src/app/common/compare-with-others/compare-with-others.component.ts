import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { PaydwithTranslationLoaderService } from '../../../../public/services/translation-loader.service';
import { locale as english } from './i18n/en';
import { locale as turkish } from './i18n/tr';

@Component({
  selector: 'app-compare-with-others',
  imports: [NgClass, TranslateModule],
  templateUrl: './compare-with-others.component.html',
  styleUrl: './compare-with-others.component.scss',
})
export class CompareWithOthersComponent {
  constructor(
    public router: Router,
    private paydwithTranslationLoaderService: PaydwithTranslationLoaderService
  ) {
    this.paydwithTranslationLoaderService.loadTranslations(english, turkish);
  }
}

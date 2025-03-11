import { Component } from '@angular/core';
import { PageBannerComponent } from './page-banner/page-banner.component';
import { CtaComponent } from '../../common/cta/cta.component';
import { NgClass, NgFor } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { locale as english } from './i18n/en';
import { locale as turkish } from './i18n/tr';
import { PaydwithTranslationLoaderService } from '../../../../public/services/translation-loader.service';

@Component({
  selector: 'app-faq-page',
  imports: [PageBannerComponent, CtaComponent, NgFor, NgClass, TranslateModule],
  templateUrl: './faq-page.component.html',
  styleUrl: './faq-page.component.scss',
})
export class FaqPageComponent {
  accordionItems = [
    {
      titleKey: 'FAQPAGE.ITEMS.ITEM1.TITLE',
      contentKey: 'FAQPAGE.ITEMS.ITEM1.CONTENT',
      open: false,
    },
    {
      titleKey: 'FAQPAGE.ITEMS.ITEM2.TITLE',
      contentKey: 'FAQPAGE.ITEMS.ITEM2.CONTENT',
      open: false,
    },
    {
      titleKey: 'FAQPAGE.ITEMS.ITEM3.TITLE',
      contentKey: 'FAQPAGE.ITEMS.ITEM3.CONTENT',
      open: false,
    },
    {
      titleKey: 'FAQPAGE.ITEMS.ITEM4.TITLE',
      contentKey: 'FAQPAGE.ITEMS.ITEM4.CONTENT',
      open: false,
    },
    {
      titleKey: 'FAQPAGE.ITEMS.ITEM5.TITLE',
      contentKey: 'FAQPAGE.ITEMS.ITEM5.CONTENT',
      open: false,
    },
    {
      titleKey: 'FAQPAGE.ITEMS.ITEM6.TITLE',
      contentKey: 'FAQPAGE.ITEMS.ITEM6.CONTENT',
      open: false,
    },
    {
      titleKey: 'FAQPAGE.ITEMS.ITEM7.TITLE',
      contentKey: 'FAQPAGE.ITEMS.ITEM7.CONTENT',
      open: false,
    },
  ];

  selectedItem: any = null;
  toggleAccordionItem(item: any) {
    item.open = !item.open;
    if (this.selectedItem && this.selectedItem !== item) {
      this.selectedItem.open = false;
    }
    this.selectedItem = item;
  }

  constructor(
    private paydwithTranslationLoaderService: PaydwithTranslationLoaderService
  ) {
    this.paydwithTranslationLoaderService.loadTranslations(english, turkish);
  }
}

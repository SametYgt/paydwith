import { NgClass, NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { PaydwithTranslationLoaderService } from '../../../../public/services/translation-loader.service';
import { TranslateModule } from '@ngx-translate/core';
import { locale as english } from './i18n/en';
import { locale as turkish } from './i18n/tr';

@Component({
  selector: 'app-faq',
  imports: [NgFor, NgClass, TranslateModule],
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.scss',
})
export class FaqComponent {
  accordionItems = [
    {
      titleKey: 'FAQ.ITEMS.ITEM1.TITLE',
      contentKey: 'FAQ.ITEMS.ITEM1.CONTENT',
      content2Key: 'FAQ.ITEMS.ITEM1.CONTENT2',
      open: false,
    },
    {
      titleKey: 'FAQ.ITEMS.ITEM2.TITLE',
      contentKey: 'FAQ.ITEMS.ITEM2.CONTENT',
      content2Key: 'FAQ.ITEMS.ITEM2.CONTENT2',
      open: false,
    },
    {
      titleKey: 'FAQ.ITEMS.ITEM3.TITLE',
      contentKey: 'FAQ.ITEMS.ITEM3.CONTENT',
      content2Key: 'FAQ.ITEMS.ITEM3.CONTENT2',
      open: false,
    },
    {
      titleKey: 'FAQ.ITEMS.ITEM4.TITLE',
      contentKey: 'FAQ.ITEMS.ITEM4.CONTENT',
      content2Key: 'FAQ.ITEMS.ITEM4.CONTENT2',
      open: false,
    },
    {
      titleKey: 'FAQ.ITEMS.ITEM5.TITLE',
      contentKey: 'FAQ.ITEMS.ITEM5.CONTENT',
      content2Key: 'FAQ.ITEMS.ITEM5.CONTENT2',
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

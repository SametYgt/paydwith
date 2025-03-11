import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { locale as english } from './i18n/en';
import { locale as turkish } from './i18n/tr';
import { PaydwithTranslationLoaderService } from '../../../../public/services/translation-loader.service';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-success-story',
  imports: [CarouselModule, NgIf, TranslateModule],
  templateUrl: './success-story.component.html',
  styleUrl: './success-story.component.scss',
})
export class SuccessStoryComponent {
  // Owl Carousel
  successStorySlides: OwlOptions = {
    items: 1,
    nav: true,
    loop: true,
    margin: 25,
    dots: false,
    autoplay: true,
    smartSpeed: 500,
    autoplayHoverPause: true,
    navText: [
      "<i class='fas fa-chevron-left'></i>",
      "<i class='fas fa-chevron-right'></i>",
    ],
  };

  // Video Popup
  isOpen = false;
  openPopup(): void {
    this.isOpen = true;
  }
  closePopup(): void {
    this.isOpen = false;
  }

  constructor(
    private paydwithTranslationLoaderService: PaydwithTranslationLoaderService
  ) {
    this.paydwithTranslationLoaderService.loadTranslations(english, turkish);
  }
}

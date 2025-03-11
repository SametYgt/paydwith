import { NgStyle } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { PaydwithTranslationLoaderService } from '../../../../../public/services/translation-loader.service';
import { locale as english } from './i18n/en';
import { locale as turkish } from './i18n/tr';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-banner',
  imports: [RouterLink, CarouselModule, NgStyle, TranslateModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent {
  // Owl Carousel
  homeSlides: OwlOptions = {
    items: 1,
    nav: true,
    loop: true,
    margin: 25,
    dots: false,
    autoplay: true,
    smartSpeed: 500,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    autoplayHoverPause: true,
    navText: [
      "<i class='fas fa-chevron-left'></i>",
      "<i class='fas fa-chevron-right'></i>",
    ],
  };

  // BG Image Scroll
  backgroundPositionY = 0;
  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const scrollY = window.scrollY;
    this.backgroundPositionY = scrollY * 0.5; // Adjust the multiplier to control the speed of the parallax effect
  }

  constructor(
    private paydwithTranslationLoaderService: PaydwithTranslationLoaderService
  ) {
    this.paydwithTranslationLoaderService.loadTranslations(english, turkish);
  }
}

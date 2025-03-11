import { CommonModule, NgClass } from '@angular/common';
import { Component, HostListener, OnInit, HostBinding } from '@angular/core';
import {
  Router,
  RouterLink,
  RouterLinkActive,
  NavigationEnd,
} from '@angular/router';
import { TranslateService, TranslateModule } from '@ngx-translate/core';
import { PaydwithTranslationLoaderService } from '../../../../public/services/translation-loader.service';
import _ from 'lodash';
import { Subject } from 'rxjs';
import { locale as english } from './i18n/en';
import { locale as turkish } from './i18n/tr';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    NgClass,
    MatMenuModule,
    CommonModule,
    TranslateModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent implements OnInit {
  // Navbar Sticky
  isSticky: boolean = false;
  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const scrollPosition =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    if (scrollPosition >= 50) {
      this.isSticky = true;
    } else {
      this.isSticky = false;
    }
  }
  languages: any;
  selectedLanguage: any;
  private _unsubscribeAll: Subject<any>;
  currentUserSubject: any;

  @HostBinding('class.router-digital-banking')
  get isDigitalBanking() {
    return this.router.url === '/digital-banking';
  }

  constructor(
    public router: Router,
    private _translateService: TranslateService,
    private paydwithTranslationLoaderService: PaydwithTranslationLoaderService
  ) {
    this.paydwithTranslationLoaderService.loadTranslations(english, turkish);
    this.languages = [
      {
        id: 'en',
        title: 'English',
        flag: 'us',
      },
      {
        id: 'tr',
        title: 'Turkish',
        flag: 'tr',
      },
    ];

    // Set the private defaults
    this._unsubscribeAll = new Subject();
  }

  // Mean Trigger
  classApplied = false;
  toggleClass() {
    this.classApplied = !this.classApplied;
  }

  ngOnInit(): void {
    if (typeof window !== 'undefined' && localStorage) {
      const storedLanguage = localStorage.getItem('currentLanguage') || 'en';
      this.selectedLanguage = _.find(this.languages, { id: storedLanguage });
      this._translateService.use(storedLanguage);
    }
  }

  setLanguage(lang: any): void {
    this.selectedLanguage = lang;
    this._translateService.use(lang.id);
    localStorage.setItem('currentLanguage', lang.id);
  }
}

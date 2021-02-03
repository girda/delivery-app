import {Injectable} from '@angular/core';
import {ILanguage} from '../models/language.model';
import {IBaseResourceText} from '../models/base-resource-text.model';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MultiLanguageService {

  selectedLanguageId: number;
  languages: ILanguage[];
  private baseResourcesTexts: IBaseResourceText[] = [];


  // Подписчик на изменение языка
  private changingLanguageObservable = new Subject();
  changingLanguageSubscriber = this.changingLanguageObservable.asObservable();

  constructor() {
  }


  // Получение кода языка по его идентификатору
  getCodeLang(languageId: number): string {
    if (this.languages) {
      for (const language of this.languages) {
        if (language.id === languageId) {
          return language.code;
        }
      }
    }
    return null;
  }

  // Проверка является ли указанный язык - текущим
  isCurrentLang(languageId: number): boolean {
    return languageId === this.selectedLanguageId;
  }

  // Переключение языков
  selectLanguage(languageId: number): void {
    if (languageId !== this.selectedLanguageId) {
      this.selectedLanguageId = languageId;
      // this.localeDatePickerOptions();
      // this.localeGridOptions();
      this.changingLanguageObservable.next();
    }
  }

  // Сопоставление перевода для основного контента
  getTranslated(textCode: string): string {
    for (const baseResourceText of this.baseResourcesTexts) {
      if (baseResourceText.textCode === textCode &&
        baseResourceText.languageId === this.selectedLanguageId) {
        return baseResourceText.text;
      }
    }
    return textCode;
  }

}

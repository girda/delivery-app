import {IProductTranslations} from '../models/product-translations.model';
import {ICountryTranslations} from '../models/country.model';
import {IManufacturerTranslations} from '../models/manufacturer.model';
import {IPromotionTranslation} from '../models/promotion.model';
import {ICategoryTranslations} from '../models/category.model';
import {MultiLanguageService} from './multi-language.service';
import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductTranslationsService {
  constructor( private multiLanguageService: MultiLanguageService) {
  }

  // Метод для получении имени товара, получает массив переводов, возвращает строку с именем или плейсхолдером
  getProductName(languagePack: IProductTranslations[]): string {
    const productName = languagePack.find(lang => lang.languageCode.toLowerCase() === this.multiLanguageService.getCodeLang(this.multiLanguageService.selectedLanguageId)?.toLowerCase());
    return productName ? productName.name : 'Нет перевода для данного поля';
  }

  getCountryName(languagePack: ICountryTranslations[]): string {
    const countryName = languagePack.find(m => m.languageCode.toLowerCase() === this.multiLanguageService.getCodeLang(this.multiLanguageService.selectedLanguageId)?.toLowerCase());
    return countryName ? countryName.name : 'Нет перевода для данного поля';
  }

  getManufacturerName(languagePack: IManufacturerTranslations[]): string {
    const manufacturerName = languagePack.find(m => m.languageCode.toLowerCase() === this.multiLanguageService.getCodeLang(this.multiLanguageService.selectedLanguageId)?.toLowerCase());
    return manufacturerName ? manufacturerName.name : 'Нет перевода для данного поля';
  }

  getPromotionName(languagePack: IPromotionTranslation[]): string {
    const promotionName = languagePack.find(p => p.languageCode.toLowerCase() === this.multiLanguageService.getCodeLang(this.multiLanguageService.selectedLanguageId)?.toLowerCase());
    return promotionName ? promotionName.description : 'Нет перевода для данного поля';
  }

  getCategoryNameValue(languagePack: ICategoryTranslations[]): string {
    const categoryName = languagePack.find(c => c.languageCode.toLowerCase() === this.multiLanguageService.getCodeLang(this.multiLanguageService.selectedLanguageId)?.toLowerCase());
    return categoryName ? categoryName.name : 'Нет перевода для данного поля';
  }
}

export interface ICountry {
  id: number;
  code: string;
  translations: ICountryTranslations[];
}
export interface ICountryTranslations {
  languageCode: string;
  name: string;
  fullName: string;
}
export interface ICountryResponse {
  count: number;
  data: ICountry[];
  pageIndex: number;
  pageSize: number;
}

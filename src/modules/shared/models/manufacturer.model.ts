export interface IManufacturer {
  id: number;
  imageUrl: string;
  externalId: string;
  translations: IManufacturerTranslations[];
}
export interface IManufacturerShort {
  id: number;
  name: string;
}
export interface IManufacturerTranslations {
  description: string;
  languageCode: string;
  name: string;
}
export interface IManufacturerResponse {
  count: number;
  data: IManufacturer[];
}

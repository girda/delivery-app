export interface ICategory {
  id: number;
  parentId: number;
  externalId: string;
  position: number;
  categoryTranslations: ICategoryTranslations[];
}
export interface ICategoryShort {
  id: number;
  translations: ICategoryTranslations[];
}
export interface ICategoryTranslations {
  languageCode: string;
  name: string;
  description: string;
  seoDescription: string;
}
export interface ICategoryResponse {
  count: number;
  data: ICategory[];
}

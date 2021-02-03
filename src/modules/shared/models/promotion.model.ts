export interface IPromotion {
  restrictionShops: {shopId: number; }[]; // id`s of shops
  restrictionPromotions: {restrictionPromotionId: number; }[]; // id`s of promotions
  restrictionProducts: {productId: number; }[]; // id`s of products
  reductionProducts: {productId: number; }[]; // id`s of products
  giftProducts: IPromotionGiftProduct[]; // id`s of products
  id: number;
  userId: string;
  dateFrom: string;
  dateTo: string;
  applyingQuantity: number;
  perUserApplyingQuantity: number;
  priority: number;
  partialUse: boolean;
  code: string; // promo-code
  minimumAmount: number; // minimal sum threshold to activate this promo
  reductionPercent: number;
  reductionAmount: number;
  reductionTax: boolean;
  currencyCode: string;
  isActive: boolean;
  promotionTranslations: IPromotionTranslation[];
}

export interface IPromotionTranslation {
  description: string;
  languageCode: string;
}

export interface IPromotionGiftProduct {
  productId: number;
}

export class IPromotionResponse {
  count: number;
  pageIndex: number;
  pageSize: number;
  data: IPromotion[];
}

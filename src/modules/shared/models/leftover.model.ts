import {IStorageTranslation} from "./storage.model";

export interface IProductLeftover {
  quantity: number;
  storageTranslations: IStorageTranslation[];
}

declare type BvTableFieldArray = import('bootstrap-vue').BvTableFieldArray;

declare type PriceItem = {
  name: string;
  price: string;
  _cellVariants?: {
    name: string;
    price: string;
  }
}

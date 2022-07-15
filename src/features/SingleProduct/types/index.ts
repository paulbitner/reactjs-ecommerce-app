export type TSingleProduct = {
    productid: number;
    productname: string;
    categoryName: string;
    mainImage: string;
    productdescription: string;
    tagline?:string;
    productVariants: Array<any>
  };

  export type Variant = {
    variantID: number;
    variantImage: string;
    variantName: string;
    variantPrice: string;
    quantity?: number | undefined;
  }
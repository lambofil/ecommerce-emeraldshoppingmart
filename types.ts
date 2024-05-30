export interface Productss {
    _id: number;
    title: string;
    isNew: boolean;
    oldPrice: number;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: number;
    quantity: number;
}

export interface ItemProps {
    item: Productss;
}

export interface StateProps {
    shopping: { 
      productData: [];
      userInfo: {};
      orderData: { 
        order: Productss[];
     }
    }
}

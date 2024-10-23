export interface Apparel {
  code: string;
  size: string;
  quantity: number;
  price: number;
}

export interface OrderItem {
  code: string;
  size: string;
  quantity: number;
}

export interface Order {
  items: OrderItem[];
}

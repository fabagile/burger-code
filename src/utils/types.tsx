export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
};
export interface CartItem extends Product {
  quantity: number
}
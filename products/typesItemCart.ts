import { Product } from "./typesProduct";

export interface ItemCartTypes {
  id: string;
  title: Product['title'];
  category: Product['category'];
  description: Product['description'];
  image: Product['image'];
  price: Product['price'];
  count: number;
  total: number;
}
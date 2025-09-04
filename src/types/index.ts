export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  region: string;
  roastLevel: "Suave" | "Medio" | "Intenso";
  weight: string;
}

export interface CartItem extends Product {
  quantity: number;
}

export interface Customer {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  region: string;
}

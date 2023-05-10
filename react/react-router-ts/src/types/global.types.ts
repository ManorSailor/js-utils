type DummyJSONResponse = {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
};

type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
};

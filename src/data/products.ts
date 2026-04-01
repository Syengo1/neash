export type Product = {
  id: string;
  name: string;
  shade: string;
  price: number;
  colorHex: string;
  isNew?: boolean;
};

export const PRODUCTS: Product[] = [
  {
    id: 'gloss-aura',
    name: 'Aura',
    shade: 'Clear',
    price: 650,
    colorHex: '#F2F2F2', // Translucent/Clear vibe
    isNew: true,
  },
  {
    id: 'gloss-kiss',
    name: 'Kiss',
    shade: 'Baby Pink',
    price: 1000,
    colorHex: '#F4C2C2', // Soft baby pink
  },
  {
    id: 'gloss-hot',
    name: 'Hot',
    shade: 'Light Red',
    price: 1000,
    colorHex: '#E55B5B', // Vibrant light red
  },
  {
    id: 'gloss-choco',
    name: 'Choco',
    shade: 'Brown',
    price: 1000,
    colorHex: '#5C3A21', // Deep rich brown
  },
];
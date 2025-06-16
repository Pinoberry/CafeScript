import type { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Café Araucanía Premium',
    description: 'Café de altura cultivado en las montañas de La Araucanía. Notas frutales y aroma intenso que refleja la riqueza de nuestros suelos volcánicos.',
    price: 8500,
    image: 'https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=500',
    region: 'La Araucanía',
    roastLevel: 'Medio',
    weight: '250g'
  },
  {
    id: '2',
    name: 'Café Valparaíso Costero',
    description: 'Blend especial con influencia marina de la región de Valparaíso. Sabor equilibrado con toques salinos únicos de nuestra costa.',
    price: 7200,
    image: 'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=500',
    region: 'Valparaíso',
    roastLevel: 'Suave',
    weight: '250g'
  },
  {
    id: '3',
    name: 'Café Santiago Urbano',
    description: 'Mezcla perfecta para el ritmo metropolitano. Tostado medio-alto que despierta tus sentidos en cada sorbo matutino.',
    price: 6800,
    image: 'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=500',
    region: 'Santiago',
    roastLevel: 'Intenso',
    weight: '250g'
  },
  {
    id: '4',
    name: 'Café Maule Tradicional',
    description: 'Café tradicional del valle del Maule. Cultivado con métodos ancestrales que preservan el sabor auténtico de Chile.',
    price: 7800,
    image: 'https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&w=500',
    region: 'Maule',
    roastLevel: 'Medio',
    weight: '250g'
  },
  {
    id: '5',
    name: 'Café Biobío Orgánico',
    description: 'Café 100% orgánico de la región del Biobío. Cultivado sin pesticidas, respetando el medio ambiente y tu salud.',
    price: 9200,
    image: 'https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=500',
    region: 'Biobío',
    roastLevel: 'Suave',
    weight: '250g'
  },
  {
    id: '6',
    name: 'Café Los Lagos Premium',
    description: 'Café de los verdes paisajes de Los Lagos. Sabor suave y aromático, perfecto para acompañar las tardes lluviosas del sur.',
    price: 8800,
    image: 'https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=500',
    region: 'Los Lagos',
    roastLevel: 'Medio',
    weight: '250g'
  }
];

export const regions = [
  'Todas las Regiones',
  'La Araucanía',
  'Valparaíso',
  'Santiago',
  'Maule',
  'Biobío',
  'Los Lagos'
];
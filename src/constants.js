import { nanoid } from 'nanoid'
import { IoFastFoodOutline } from 'react-icons/io5'
import { CiPizza } from 'react-icons/ci'
import {
  GiChickenOven,
  GiAnglerFish,
  GiNoodles,
  GiBowlOfRice,
  GiChipsBag,
  GiChocolateBar,
} from 'react-icons/gi'
import avocadoHass from './assets/avocado Hass.jpg'
import Blueberries from './assets/blueberries.webp'
import butter from './assets/butter.webp'
import kale from './assets/kale.webp'
import pasta from './assets/pasta.webp'
import steak from './assets/steak.webp'

export const orderInformationData = [
  {
    id: nanoid(),
    title: 'Supplier',
    description: 'East coast fruits & vegetables',
  },
  {
    id: nanoid(),
    title: 'Shipping date',
    description: 'Thu, Feb 10',
  },
  {
    id: nanoid(),
    title: 'Total',
    description: '$15,028.3',
  },
  {
    id: nanoid(),
    title: 'Category',
    description: [
      {
        id: nanoid(),
        icon: IoFastFoodOutline,
      },
      {
        id: nanoid(),
        icon: CiPizza,
      },
      {
        id: nanoid(),
        icon: GiChickenOven,
      },
      {
        id: nanoid(),
        icon: GiAnglerFish,
      },
      {
        id: nanoid(),
        icon: GiNoodles,
      },
      {
        id: nanoid(),
        icon: GiBowlOfRice,
      },
      {
        id: nanoid(),
        icon: GiChipsBag,
      },
      {
        id: nanoid(),
        icon: GiChocolateBar,
      },
    ],
  },
  {
    id: nanoid(),
    title: 'Department',
    description: '300-444-678',
  },
  {
    id: nanoid(),
    title: 'Status',
    description: 'Awaiting your approval',
  },
]

export const ProductsData = [
  {
    id: nanoid(),
    productName: 'Organic Hass Avocado',
    brand: 'Green Fields Organic',
    price: 399.99,
    quantity: 3,
    image: avocadoHass,
    status: '',
    reason: '',
  },
  {
    id: nanoid(),
    productName: 'Whole Wheat Penne Rigate Pasta',
    brand: "Nature's Harvest",
    price: 499.99,
    quantity: 2,
    image: pasta,
    status: '',
    reason: '',
  },
  {
    id: nanoid(),
    productName: 'Grass-Fed Ribeye Steak',
    brand: 'Premium Cuts',
    price: 799.99,
    quantity: 1,
    image: steak,
    status: '',
    reason: '',
  },
  {
    id: nanoid(),
    productName: 'Organic Wild Blueberries',
    brand: 'Berry Bliss Organics',
    price: 299.99,
    quantity: 2,
    image: Blueberries,
    status: '',
    reason: '',
  },
  {
    id: nanoid(),
    productName: 'Creamy Almond Butter',
    brand: 'Nutty Delights',
    price: 450,
    quantity: 1,
    image: butter,
    status: '',
    reason: '',
  },
  {
    id: nanoid(),
    productName: 'Fresh Organic Kale Bunch',
    brand: 'Green Valley Farms Organic',
    price: 680,
    quantity: 4,
    image: kale,
    status: '',
    reason: '',
  },
]

export const reasonList = [
  {
    id: 0,
    text: 'Missing product',
  },
  {
    id: 1,
    text: 'Quantity is not the same',
  },
  {
    id: 2,
    text: 'Price is not the same',
  },
  {
    id: 3,
    text: 'Other',
  },
]

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
    price: 2.99,
    quantity: 3,
    total: 8.97,
  },
  {
    id: nanoid(),
    productName: 'Whole Wheat Penne Rigate Pasta',
    brand: "Nature's Harvest",
    price: 3.49,
    quantity: 2,
    total: 6.98,
  },
  {
    id: nanoid(),
    productName: 'Grass-Fed Ribeye Steak',
    brand: 'Premium Cuts',
    price: 11.99,
    quantity: 1,
    total: 11.99,
  },
  {
    id: nanoid(),
    productName: 'Organic Wild Blueberries',
    brand: 'Berry Bliss Organics',
    price: 4.99,
    quantity: 2,
    total: 9.98,
  },
  {
    id: nanoid(),
    productName: 'Creamy Almond Butter',
    brand: 'Nutty Delights',
    price: 6.99,
    quantity: 1,
    total: 6.99,
  },
  {
    id: nanoid(),
    productName: 'Fresh Organic Kale Bunch',
    brand: 'Green Valley Farms Organic',
    price: 2.49,
    quantity: 4,
    total: 9.96,
  },
]

import logo from '../../assets/logo.png';

import {broccoli, cucumber, potato, pumpkin, tomato} from '../../assets/vegetables'

const basket = {
  top: {
    title: 'Basket details'
  },
  details: {
    name: 'Vegetables Basket',
    logo: logo,
    farmName: 'Jenny Jack Farm',
    description: 'A hand carefully picked basket products from farm directly to your kitchen',
    price: 40.00,
    button: 'Buy'
  },
  items: {
    title: 'Basket items',
    list: [
      {
        name: 'Broccoli',
        thumb: broccoli,
      },
      {
        name: 'Cucumber',
        thumb: cucumber,
      },
      {
        name: 'Potatp',
        thumb: potato,
      },
      {
        name: 'Pumpkin',
        thumb: pumpkin,
      },
      {
        name: 'Tomato',
        thumb: tomato,
      },
    ]
  }
}

export default basket;
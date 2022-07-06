import SliderOneFirstUltimos from '../assets/images/slider-1-ultimos-1.png'
import SliderOneSecondUltimos from '../assets/images/slider-1-ultimos-2.jpg'
import SliderOneThridUltimos from '../assets/images/slider-1-ultimos-3.jpg'

import SliderTwoFirstUltimo from '../assets/images/slider-2-ultimos-1.png'
import SliderTwoSecondUltimo from '../assets/images/slider-2-ultimos-2.jpg'

import SliderThreeFirstUltimo from '../assets/images/slider-3-ultimos-1.png'
import SliderThreeSecondUltimo from '../assets/images/slider-3-ultimos-2.jpg'

import SliderFourthFirstUltimo from '../assets/images/slider-4-ultimos-1.png'
import SliderFourthSecondUltimo from '../assets/images/slider-4-ultimos-2.png'

import SliderFifthFirstUltimo from '../assets/images/slider-5-ultimos-1.png'
import SliderFifthSecondUltimo from '../assets/images/slider-5-ultimos-2.png'

import SliderSixthFirstUltimo from '../assets/images/slider-6-ultimos-1.png'

import SliderSeventhFirstUltimo from '../assets/images/slider-7-ultimos-1.png'

import SliderEighthFirstUltimo from '../assets/images/slider-8-ultimos-1.png'

import SliderNinthFirstUltimo from '../assets/images/slider-9-ultimos-1.png'

export const carouselMockedData = [
  {
    id: 0,
    condition: 0, //0 = Novo, 1 = Usado
    certified: false,
    year: 2019,
    description: 'Mazda MX-5 Miata Convertible',
    price: '38,500',
    location: 'Los Angeles',
    details: ['18K mi', 'Manual', 'Gasolina'],
    photos: [
      SliderOneFirstUltimos,
      SliderOneSecondUltimos,
      SliderOneThridUltimos,
    ],
  },
  {
    id: 1,
    condition: 1, //0 = Novo, 1 = Usado
    certified: true,
    year: 2019,
    description: 'BMW 640 XI Gran Turismo',
    price: '44,920',
    location: 'New Jersey',
    details: ['10K mi', 'Automático', 'Gasolina'],
    photos: [SliderTwoFirstUltimo, SliderTwoSecondUltimo],
  },
  {
    id: 2,
    condition: 1, //0 = Novo, 1 = Usado
    certified: false,
    year: 2019,
    description: 'Nissan 370Z Nismo',
    price: '37,900',
    location: 'New York',
    details: ['16K mi', 'Automático', 'Diesel'],
    photos: [SliderThreeFirstUltimo, SliderThreeSecondUltimo],
  },
  {
    id: 3,
    condition: 0, //0 = Novo, 1 = Usado
    certified: true,
    year: 2019,
    description: 'Volkswagen GTI S',
    price: '20,000',
    location: 'San Francisco',
    details: ['25K mi', 'Automático', 'Híbrido'],
    photos: [SliderFourthFirstUltimo, SliderFourthSecondUltimo],
  },
  {
    id: 4,
    condition: 1, //0 = Novo, 1 = Usado
    certified: false,
    year: 2017,
    description: 'Ford Explorer XLT',
    price: '24,000',
    location: 'Kansas',
    details: ['34K mi', 'Manual', 'Diesel'],
    photos: [SliderFifthFirstUltimo, SliderFifthSecondUltimo],
  },
  {
    id: 5,
    condition: 1, //0 = Novo, 1 = Usado
    certified: false,
    year: 2019,
    description: 'Nissan 370Z Nismo',
    price: '37,900',
    location: 'New York',
    details: ['16K mi', 'Automático', 'Diesel'],
    photos: [SliderSixthFirstUltimo, SliderThreeSecondUltimo],
  },
  {
    id: 6,
    condition: 1, //0 = Novo, 1 = Usado
    certified: true,
    year: 2018,
    description: 'Mazda MX-5 Miata Convertible',
    price: '38,500',
    location: 'Los Angeles',
    details: ['18K mi', 'Manual', 'Gasolina'],
    photos: [SliderSeventhFirstUltimo],
  },
  {
    id: 7,
    condition: 1, //0 = Novo, 1 = Usado
    certified: true,
    year: 2018,
    description: 'Mercedes Benz C300 Sport',
    price: '54,420',
    location: 'San Francisco',
    details: ['35K mi', 'Híbrido', 'Gasolina'],
    photos: [SliderEighthFirstUltimo],
  },
  {
    id: 8,
    condition: 1, //0 = Novo, 1 = Usado
    certified: false,
    year: 1995,
    description: 'Ford Truck Lifted',
    price: '24,000',
    location: 'Chicago',
    details: ['278K mi', 'Manual', 'Diesel'],
    photos: [SliderNinthFirstUltimo],
  },
]

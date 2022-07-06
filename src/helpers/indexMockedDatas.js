import Sedan from '../assets/images/type-sedan.svg'
import SUV from '../assets/images/type-suv.svg'
import Compact from '../assets/images/type-compact.svg'
import Convertible from '../assets/images/type-convertible.svg'
import Coupe from '../assets/images/type-coupe.svg'
import Crossover from '../assets/images/type-crossover.svg'
import FamilyMVP from '../assets/images/type-familympv.svg'
import Wagon from '../assets/images/type-wagon.svg'
import Pickup from '../assets/images/type-pickup.svg'
import SportCoupe from '../assets/images/type-sportcoupe.svg'

import Seats from '../assets/images/seats.png'
import Tires from '../assets/images/tires.png'
import Wheel from '../assets/images/wheel.png'
import BabySeat from '../assets/images/baby-seat.png'

import LatestNewsImageOne from '../assets/images/home/latest-news-image-1.png'
import LatestNewsAvatarOne from '../assets/images/home/latest-news-avatar-1.png'
import LatestNewsImageTwo from '../assets/images/home/latest-news-image-2.png'
import LatestNewsAvatarTwo from '../assets/images/home/latest-news-avatar-2.png'
import LatestNewsImageThree from '../assets/images/home/latest-news-image-3.png'
import LatestNewsAvatarThree from '../assets/images/home/latest-news-avatar-3.png'

import SliderFirstOfferOne from '../assets/images/slider-1-ofertas-1.png'
import SliderSecondOfferOne from '../assets/images/slider-1-ofertas-2.jpg'
import SliderThreeOfferOne from '../assets/images/slider-1-ofertas-3.jpg'

import SliderOneOfferTwo from '../assets/images/slider-2-ofertas-1.png'
import SliderTwoOfferTwo from '../assets/images/slider-2-ofertas-2.jpg'
import SliderOneOfferTwoMobile from '../assets/images/slider-2-ofertas-1-mobile.png'
import SliderTwoOfferTwoMobile from '../assets/images/slider-2-ofertas-2-mobile.jpg'

import SliderOneOfferThree from '../assets/images/slider-3-ofertas-1.png'
import SliderTwoOfferThree from '../assets/images/slider-3-ofertas-2.jpg'
import SliderOneOfferThreeMobile from '../assets/images/slider-3-ofertas-1-mobile.jpg'
import SliderTwoOfferThreeMobile from '../assets/images/slider-3-ofertas-2-mobile.jpg'

export const typesSectionMockedData = [
  {
    label: 'Sedan',
    image: Sedan,
  },
  {
    label: 'SUV',
    image: SUV,
  },
  {
    label: 'Wagon',
    image: Wagon,
  },
  {
    label: 'Crossover',
    image: Crossover,
  },
  {
    label: 'Coupe',
    image: Coupe,
  },
  {
    label: 'Pickup',
    image: Pickup,
  },
  {
    label: 'Sport Coupe',
    image: SportCoupe,
  },
  {
    label: 'Compact',
    image: Compact,
  },
  {
    label: 'Convertible',
    image: Convertible,
  },
  {
    label: 'Family MVP',
    image: FamilyMVP,
  },
]
export const accessoriesSectionMockedData = [
  {
    label: 'Bancos',
    image: Seats,
    alt: 'Bancos de carro',
  },
  {
    label: 'Pneus',
    image: Tires,
    alt: 'Pneus',
  },
  {
    label: 'Rodas',
    image: Wheel,
    alt: 'Rodas de carro',
  },
  {
    label: 'Acessórios',
    image: BabySeat,
    alt: 'Imagem de bebe conforto',
  },
]
export const latestNewsSectionMockedData = [
  {
    image: LatestNewsImageOne,
    alt: 'Fusca',
    title: 'DICAS',
    subtitle: 'Loren ipsuns',
    avatarImage: LatestNewsAvatarOne,
    authorName: 'Jacob Jones',
    date: '24 de Nov',
  },
  {
    image: LatestNewsImageTwo,
    alt: 'Carro',
    title: 'OFERTAS',
    subtitle: 'Loren ipsuns',
    avatarImage: LatestNewsAvatarTwo,
    authorName: 'Annette Black',
    date: '28 de Nov',
  },
  {
    image: LatestNewsImageThree,
    alt: 'Motocicleta',
    title: 'OFERTAS',
    subtitle: 'Loren ipsuns',
    avatarImage: LatestNewsAvatarThree,
    authorName: 'Ralph Edwards',
    date: '15 de Dez',
  },
]
export const offersSectionMockedData = [
  {
    id: 0,
    condition: 1, //0 = Novo, 1 = Usado
    certified: false,
    year: 2014,
    description: 'Mercedes Benz Convertible Coupe',
    price: '25,880',
    location: 'New Yourk',
    details: ['48K mi', 'Automático', 'Gasolina'],
    photos: {
      desktop: [SliderFirstOfferOne, SliderSecondOfferOne, SliderThreeOfferOne],
      SliderTwoOfferTwoMobile: [],
    },
  },
  {
    id: 1,
    condition: 1, //0 = Novo, 1 = Usado
    certified: false,
    year: 1995,
    description: 'Ford Truck Lifted',
    price: '24,000',
    location: 'Chicago',
    details: ['278K mi', 'Manual', 'Diesel'],
    photos: {
      desktop: [SliderOneOfferTwo, SliderTwoOfferTwo],
      mobile: [SliderOneOfferTwoMobile, SliderTwoOfferTwoMobile],
    },
  },
  {
    id: 2,
    condition: 0, //0 = Novo, 1 = Usado
    certified: false,
    year: 2020,
    description: 'Mercedes Benz C300 Sport',
    price: '54,420',
    location: 'San Francisco',
    details: ['No mileage', 'Automático', 'Híbrido'],
    photos: {
      desktop: [SliderOneOfferThree, SliderTwoOfferThree],
      mobile: [SliderOneOfferThreeMobile, SliderTwoOfferThreeMobile],
    },
  },
]

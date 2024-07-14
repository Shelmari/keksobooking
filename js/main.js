const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECKIN = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS_URL = 'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/';
const PHOTOS = [
  `${PHOTOS_URL}duonguyen-8LrGtIxxa4w.jpg`,
  `${PHOTOS_URL}brandon-hoogenboom-SNxQGWxZQi0.jpg`,
  `${PHOTOS_URL}claire-rendall-b6kAwr1i0Iw.jpg`
];
const Latitude = {
  MIN: 35.65,
  MAX: 35.7
};

const Longitude = {
  MIN: 139.7,
  MAX: 139.8
};

const PriceRange = {
  MIN: 6000000,
  MAX: 60000000
};

const TypeRange = {
  MIN: 0,
  MAX: 4
};

const RoomsRange = {
  MIN: 1,
  MAX: 6
};

const GuestsRange = {
  MIN: 1,
  MAX: 10
};

const getIndexPhoto = () => {
  let numberPhoto = 0;
  return () => {
    numberPhoto += 1;
    return numberPhoto;
  };
};

const getRandomIntegerNumber = (min, max) => {
  const result = Math.random() * (max - min + 1) + min;
  return Math.floor(result);
};

const getRandomNumber = (min, max) => {
  const result = Math.random() * (max - min) + min;
  return parseFloat(result.toFixed(5));
};

const indexPhoto = getIndexPhoto();

const addNull = (number) => (number < 10) ? `0${number}` : number;

const renderingAnnouncement = (index) => {
  const latNumber = getRandomNumber(Latitude.MIN, Latitude.MAX);
  const lngNumber = getRandomNumber(Longitude.MIN, Longitude.MAX);
  return {
    author: {
      avatar: `img/avatars/user${addNull(index)}.png`
    },
    offer: {
      title: `Объявление ${index}`,
      address: `${latNumber} ${lngNumber}`,
      price: getRandomIntegerNumber(PriceRange.MIN, PriceRange.MIN),
      type: TYPES[getRandomIntegerNumber(TypeRange.MIN, TypeRange.MAX)],
      rooms: getRandomIntegerNumber(RoomsRange.MIN, RoomsRange.MAX),
      guests: getRandomIntegerNumber(GuestsRange.MIN, GuestsRange.MAX),
      checkin: CHECKIN[getRandomIntegerNumber(0, CHECKIN.length - 1)],
      checkout: CHECKIN[getRandomIntegerNumber(0, CHECKIN.length - 1)],
      features: Array.from(
        new Set(
          Array.from({length: getRandomIntegerNumber(1, 10)}, () => FEATURES[getRandomIntegerNumber(0, FEATURES.length - 1)])
        )
      ),
      description: `Описание объявления №${index}`,
      photos: Array.from({length: getRandomIntegerNumber(1, 3)}, () => PHOTOS[getRandomIntegerNumber(0, 2)]),
      location: {
        lat: latNumber,
        lng: lngNumber,
      },
    },
  };
};

const getAnnouncement = () => Array.from({length: 10}, () => renderingAnnouncement(indexPhoto()));

getAnnouncement();

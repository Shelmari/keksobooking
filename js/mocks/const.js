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
  MIN: 1000,
  MAX: 120000
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

export {
  TYPES,
  CHECKIN,
  FEATURES,
  PHOTOS,
  Latitude,
  Longitude,
  PriceRange,
  TypeRange,
  RoomsRange,
  GuestsRange
};

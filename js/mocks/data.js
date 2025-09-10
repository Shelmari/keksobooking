import { CHECKIN, FEATURES, GuestsRange, Latitude, Longitude, PHOTOS, PriceRange, RoomsRange, TypeRange, TYPES } from './const.js';
import { addNull, getRandomIntegerNumber, getRandomNumber, indexPhoto } from './utils.js';

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
      features: Array.from(new Set(
        Array.from({length: getRandomIntegerNumber(1, 10)}, () =>
          FEATURES[getRandomIntegerNumber(0, FEATURES.length - 1)]))
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

export {getAnnouncement};

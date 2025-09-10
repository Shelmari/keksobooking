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

export {getRandomIntegerNumber, getRandomNumber, indexPhoto, addNull};

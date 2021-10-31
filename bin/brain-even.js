function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  console.log(getRandomInRange(10, 20));
function getRandomNumber(min: number = 0, max: number = 0) {
    return Math.floor(((min + 50) + (max - min) * Math.random()));
}

export default getRandomNumber; 
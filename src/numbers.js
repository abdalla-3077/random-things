function RndNumber(min, max) {
    if (min > max) {
        throw new Error("min should not be greater than max");
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

module.exports = RndNumber;
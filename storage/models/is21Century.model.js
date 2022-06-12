function is21Century() {
    return new Date().getFullYear() >= 2000 && new Date().getFullYear() < 2100
};


module.exports = {
    is21Century,
};
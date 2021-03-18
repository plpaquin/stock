module.exports = {
  recommendationAlgorithm: () => {
    const recommendation = ['Buy', 'Hold', 'Sell'];
    const random = Math.floor(Math.random() * recommendation.length);
    return recommendation[random];
  }
};

module.exports = {
  recommendationAlgorithm: () => {
    const recommendation = [
      'Buy', 'Hold', 'Sell'
    ];

    const random = Math.floor(Math.random() * 3);

    return recommendation[random];
  }
};

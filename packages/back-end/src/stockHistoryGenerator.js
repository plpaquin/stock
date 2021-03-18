const { DateTime } = require('luxon');

const { stockPriceGenerator } = require('./stockPriceGenerator');
const { socialMediaCountGenerator } = require('./socialMediaCountGenerator');
const { recommendationAlgorithm } = require('./recommendationAlgorithm');

module.exports = {
  stockHistoryGenerator: (length) => {
    const history = [];

    for (let i = 0; i < length; i++) {
      const recommendation = recommendationAlgorithm(); 

      const entry = {
        date: DateTime.now().minus({ days: length - 1 - i }),
        price: stockPriceGenerator(),
        socialMediaCount: socialMediaCountGenerator(),
        recommendation: recommendation,
        change: history.length > 0 && history[i - 1].recommendation !== recommendation
      };

      history.push(entry);
    }

    return history;
  }
};

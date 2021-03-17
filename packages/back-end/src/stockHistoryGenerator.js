const { DateTime } = require('luxon');

const { stockPriceGenerator } = require('./stockPriceGenerator');
const { socialMediaCountGenerator } = require('./socialMediaCountGenerator');
const { recommendationAlgorithm } = require('./recommendationAlgorithm');

module.exports = {
  stockHistoryGenerator: (length) => {
    const history = [];

    for (let i = 0; i < length; i++) {
      const entry = {
        date: DateTime.now().minus({ days: i }).toLocaleString(DateTime.DATE_FULL),
        price: stockPriceGenerator(),
        socialMediaCount: socialMediaCountGenerator(),
        recommendation: recommendationAlgorithm()
      };

      history.push(entry);
    }

    return history;
  }
};

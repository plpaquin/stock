const jsonServer = require('json-server');
const server = jsonServer.create();

const paths = require('./db.json');
const router = jsonServer.router(paths);

const { stockHistoryGenerator } = require('./src/stockHistoryGenerator');

const middlewares = jsonServer.defaults();
server.use(middlewares);

router.render = (req, res) => {
  let override;

  if (res.statusCode === 404) {
    const stockSymbol = req.path.substr(1);

    override = {
      symbol: stockSymbol,
      history: stockHistoryGenerator(req.query.history)
    };

    res.statusCode = 200;
  }

  override ? res.jsonp(override) : res.jsonp(res.locals.data);
};

server.use(router);
server.listen(3000, () => {
  console.log('JSON Server is running');
});
